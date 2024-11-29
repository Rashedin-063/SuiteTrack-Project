import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const user = await req.json()
    try{
        const db = await connectDB();
        const userCollection = db.collection("users");
        const query = {email : user?.email};
        const isExists = await userCollection.findOne(query);
        if(isExists){
            return Promise.reject(new Error("This user is already registered!"));
        }
        const result = await userCollection.insertOne(user)
        return NextResponse.json({message : "Added an user successfully", result}, {status : 200})
    }catch(error){
        return NextResponse.json({message : "Something went Wrong!", error})
    }
}