import dbConnect from "@/lib/dbConnect";
import Room from "@/models/Room";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();


  try {
    const products = await Room.find({});

   return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({error: error.message});
  }
}