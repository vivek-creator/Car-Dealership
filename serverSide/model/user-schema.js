import { MongoClient } from 'mongodb'; //adding login validation
//import bcrypt from 'bcrypt';

const url = `mongodb+srv://user:vivekTripathi@car-dealership.ih9etnx.mongodb.net/?retryWrites=true&w=majority&appName=car-dealership`;
const client = new MongoClient(url);
const dbName = 'car-dealership';

async function connectDB() {
    try {
        await client.connect();
        return client.db(dbName);
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
        throw error;
    }
}

async function createUser(userData) {
    const db = await connectDB();
    const result = await db.collection('users').insertOne(userData);
    return result.insertedId;
}

async function loginUser(email, password) {
  const db = await connectDB();
  const user = await db.collection('users').findOne({ email });
  if (user && await password===user.password) {
    return { status: 'success', message: 'Login successful', user:user};
  } else {
    return { status: 'error', message: 'Invalid credentials'};
  }
}

export { createUser, loginUser, connectDB };




