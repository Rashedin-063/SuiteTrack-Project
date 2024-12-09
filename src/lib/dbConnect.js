const mongoose = require('mongoose');

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log('Already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Db connection error', error);
    process.exit(1);
  }
}

dbConnect();

module.exports = dbConnect;
