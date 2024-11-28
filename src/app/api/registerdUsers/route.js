import connectDB from "@/Libraries/connectDB"
import { NextResponse } from "next/server"

export const POST = async (req, {params}) => {
    const user = await req.json()
    try{
        const db = await connectDB();
        const userCollection = db.collection("users");
        const result = await userCollection.insertOne(user)
        return NextResponse.json({message : "Added an user successfully", result}, {status : 200})
    }catch(error){
        return NextResponse.json({message : "Something went Wrong!", error})
    }
}