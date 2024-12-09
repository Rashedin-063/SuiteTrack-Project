import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    rooms: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema)

export default Room;