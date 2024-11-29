import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import connectDB from '@/lib/connectDB';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error('Fill all the fields!');
        }

        try {
          const db = await connectDB();
          const userCollection = db.collection('users');
          const query = { email };
          const isExists = await userCollection.findOne(query);

          if (!isExists) {
            throw new Error('User is not registered yet!');
          }

          if (!isExists.hashPassword) {
            throw new Error('User password is missing in the database');
          }

          const comparePassword = bcrypt.compareSync(
            password,
            isExists.hashPassword
          );

          if (!comparePassword) {
            throw new Error("Password didn't match");
          }

          return {
            id: isExists._id.toString(),
            email: isExists.email,
            name: isExists.name, // Optional
          };
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('An error occurred during authentication');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
