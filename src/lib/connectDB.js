import { MongoClient, ServerApiVersion } from 'mongodb';

let db;

const connectDB = async () => {
  if (db) {
    return db;
  }

  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.p2btb5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db('SuitTrack');
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
