import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    size: Number,
    rent: Number,
    image: String
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema)

export default Room;