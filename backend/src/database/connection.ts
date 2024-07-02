import {connect, disconnect} from 'mongoose';

async function connectToDatabase() {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get database connection");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not disconnect from datatabase")
  }
}

export {connectToDatabase, disconnectFromDatabase}