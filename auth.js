import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
// import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/models/User';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
//     CredentialsProvider({
//       credentials: {
//         username: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         if (credentials === null) return null;
//  return console.log(credentials)

//         try {
//           //  getting the user data
//            const user = await User.findOne({ email: credentials?.email })
//            return console.log(user)
//           if (user) { 
//             const isMatch = await bcrypt.compare(credentials?.password, user.hashedPassword);

//              if (isMatch) {
//                return user;
//              } else {
//                throw new Error('Email or Password is not correct');
//              }
//           }
//           else {
//             console.error('User not found');
//           }

//       } catch (error) {
//          console.error(error);
//       }
//       },
//     }),
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
