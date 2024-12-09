import dbConnect from '@/lib/dbConnect';
import Room from '@/models/Room';
import { NextResponse } from 'next/server';

export async function GET() {
  try {

  // Connect to the database
    await dbConnect();

    // Fetch data from the database
    const rooms = await Room.find();
    return NextResponse.json(rooms);
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
