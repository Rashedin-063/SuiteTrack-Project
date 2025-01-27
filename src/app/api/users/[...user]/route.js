import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  const email = request.nextUrl.pathname.split('/').pop();

  // console.log('Extracted email from pathname:', email);
  
  
  try {
    // Connect to the database
    await dbConnect();

    const user = await User.findOne({ email: email });
    // console.log('user info', user);
    
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}