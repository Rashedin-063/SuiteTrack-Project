import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";
import connectDB from '@/lib/connectDB';

const handler = NextAuth({
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60
    },
    providers : [
        CredentialsProvider({
            credentials : {
                email : {},
                password : {}
            },

            async authorize (credentials){
                const {email, password} = credentials;

                if(!email || !password){
                    console.log("Fill all")
                    return Promise.reject(new Error("Fill All the fields!"));
                }

                try{
                    const db = await connectDB();
                    const userCollection = db.collection("users");
                    const query = {email : email}
                    const isExists = await userCollection.findOne(query);

                    if(!isExists){
                        console.log("Not found")
                        return Promise.reject(new Error("User is not registered yet!"));
                    }

                    const comparePassword = bcrypt.compareSync(password, isExists?.hashPassword);

                    if(!comparePassword){
                        console.log("Didn't match")
                        return Promise.reject(new Error("Password didn't match"));
                    }

                    return isExists;
                }catch (error) {
                    console.log(error)
                    return Promise.reject(new Error("An error occurred during authentication"));
                }
            }
        })
    ],
    pages : {
        signIn : '/login'
    }
})

export {handler as GET, handler as POST};