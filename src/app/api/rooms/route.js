import dbConnect from '@/lib/dbConnect';
import Room from '@/models/Room';
import { NextResponse } from 'next/server';
import { runCorsMiddleware } from '@/lib/cors';

export async function GET(req) {
  try {
    // Run CORS middleware
    await runCorsMiddleware(req, NextResponse);

    // Connect to the database
    await dbConnect();

    // Fetch data from the database
    const products = await Room.find({});
    return NextResponse.json(products);
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
