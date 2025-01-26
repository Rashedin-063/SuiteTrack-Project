import dbConnect from '@/lib/dbConnect';
import {User} from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  
}

export async function POST(req) { 
  await dbConnect();

  try {
      const user = await req.json();

      const newUser = new User(user);

      await newUser.save();

      return NextResponse.json({ message: 'user created successfully' }, {status: 201});
  } catch (error) {
    console.error(error);
     return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}