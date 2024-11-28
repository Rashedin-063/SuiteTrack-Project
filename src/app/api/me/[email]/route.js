import connectDB from "@/Libraries/connectDB";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const {email} = await params;
    try{
        const db = await connectDB();
        const usersCollection = db.collection("users");
        const query = {email : email};
        const result = await usersCollection.findOne(query)
        return NextResponse.json({message : "User is here!", result}, {status : 200})
    }catch(error){
        return NextResponse.json({message : "Something's wrong!", error})
    }
}