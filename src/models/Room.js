import mongoose, { Document, Schema } from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rooms: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: 'roomCollection' }
);

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema)

export default Room;