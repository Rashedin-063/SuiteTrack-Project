import mongoose from "mongoose";

const connection = {};
console.log(process.env.MONGODB_URI);
console.log(process.env.GOOGLE_CLIENT_ID);

console.log('hello')

async function dbConnect() {
  if (connection.isConnected){
    console.log("Already connected")
    return;
  }


  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Db connection error', error);
    process.exit(1);
  }
}

dbConnect();

export default dbConnect;