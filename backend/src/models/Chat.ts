import mongoose from 'mongoose';
import {randomUUID} from 'crypto';
const { Schema } = mongoose;

const Chat = new Schema({
  id: {
    type: String,
    default: randomUUID()
  },
  role: { 
    type: String,
    require: true
  }, 
  content: {
    type: String,
    required: true
  }
})

export default Chat;