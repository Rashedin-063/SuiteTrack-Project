import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import getSingleUser from '@/queries/getSingleUser';
import bcrypt  from 'bcrypt';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log('the credentials', credentials)
        if (credentials === null) return null;

        try {
          //  getting the user data
        const response = await fetch(
          `http://localhost:3000/api/users/${credentials.email}`
        );
    const {user} = await response.json()
          console.log(user)
          if (user) { 
            const isMatch = bcrypt.compare(
              credentials?.password,
              user.hashedPassword
            );

            if (isMatch) {
               console.log(isMatch, user, 'success')
               return user;
             } else {
               throw new Error('Email or Password is not correct');
             }
          }
          else {
            console.error('User not found');
          }

      } catch (error) {
         console.error(error);
      }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
});
