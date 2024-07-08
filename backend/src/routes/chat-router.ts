import {Router} from 'express';
import {chatCompletion, validate} from './../utils/validator'
import { verifyToken } from '../utils/token-manager';
import { generateChatCompletion } from '../controllers/chat-controller';

const route = Router(); 
route.post("/new", validate(chatCompletion), verifyToken, generateChatCompletion)

export default route;