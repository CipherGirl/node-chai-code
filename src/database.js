/* eslint-disable no-console */
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

const connectDB = async () => {
  if (!MONGODB_URI) {
    console.error('🛑 MONGODB_URI environment variable is not set.');
    process.exit(1);
  }

  try {
    const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${MONGODB_DB_NAME}`);
    console.log(
      '🛢  DB connected successfully to the host:',
      connectionInstance.connection.host,
      'Database:',
      MONGODB_DB_NAME
    );
  } catch (error) {
    console.error('🛑 Error connecting to the database:', error);
    process.exit(1);
  }
};

export default connectDB;
