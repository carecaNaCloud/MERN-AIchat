import mongoose from "mongoose";
const { Schema } = mongoose;
import Chat from "./Chat";

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [Chat],
});

export default mongoose.model("Users", User);
