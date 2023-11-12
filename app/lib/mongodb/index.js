import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
console.log(URI);
const options = {};

if (!URI)
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );

let Client = new MongoClient(URI, options);
let clientPromise;

if (!global._mongoClientPromise) {
  global._mongoClientPromise = Client.connect();
} else clientPromise = Client.connect();

export default clientPromise;
