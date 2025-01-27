import dbConnect from '@/lib/dbConnect';
import {User} from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
   try {
     // Connect to the database
     await dbConnect();

     const users = await User.find();
     return NextResponse.json({ users }, { status: 200 });
   } catch (error) {
     return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req) { 
  await dbConnect();

  try {
      const userInfo = await req.json();

      const user = new User(userInfo);

      await user.save();

      return NextResponse.json({ message: 'user created successfully' }, {status: 201});
  } catch (error) {
    console.error(error);
     return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}