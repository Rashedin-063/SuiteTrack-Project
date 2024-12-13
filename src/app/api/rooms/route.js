import dbConnect from '@/lib/dbConnect';
import Room from '@/models/Room';
import { NextResponse } from 'next/server';

// get all rooms data
export async function GET() {
  try {

  // Connect to the database
    await dbConnect();

    const rooms = await Room.find();
    return NextResponse.json({rooms}, {status: 200});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// post single room data
export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const roomData = body.formData;

    
    const room = new Room(roomData);
    await room.save()
    return NextResponse.json(
      { message: 'Room added successfully' },
      { status: 201 }
    );
  } catch (error) {
     return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

