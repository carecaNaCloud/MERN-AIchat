import mongoose from "mongoose";
const { Schema } = mongoose;
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const Chat = new Schema<ChatCompletionMessageParam>({
  role: {
    type: String,
    enum: ["system", "user", "assistant", "tool", "function"],
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default Chat;
