import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";


export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id)
    if (!user) {
      return res
        .status(401)
      .json({ message: "User not authorized" });
    }

    const chats = user.chats.map(({role, content}) => ({
      role, content
    })) as ChatCompletionMessageParam[];

    chats.push({role: "user", content: message});
    user.chats.push({role: "user", content: message});
    
    // const chatResponse = await openAI.chat.completions.create({
    //   messages: chats,
    //   model: "gpt-3.5-turbo"
    // })
    
    console.log(chatResponse);

  } catch(error) {
    console.log(error);
  }
};
