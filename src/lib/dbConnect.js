import mongoose from "mongoose";

const connection = {};
console.log(process.env.MONGODB_URI);
const mongodb_uri = "mongodb+srv://suiteTrackOwner:XZ4bAc8QiCgXb2V2@cluster0.4qgkjzt.mongodb.net/suteTrack?retryWrites=true&w=majority&appName=Cluster0"

async function dbConnect() {
  if (connection.isConnected){
    console.log("Already connected")
    return;
  }

  try {
    const db = await mongoose.connect(mongodb_uri || '', {  
      useNewUrlParser: true,
     useUnifiedTopology: true,
    });
  
    connection.isConnected = db.connections[0].readyState;
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Db connection error', error);
    process.exit(1);
  }
}

dbConnect();

export default dbConnect;