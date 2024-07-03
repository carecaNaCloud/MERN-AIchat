import { Request, Response, NextFunction, response } from "express";
import User from "./../models/User";
import ms from 'ms';
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager";
import { AUTH_COOKIE } from "../utils/constants";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    res.status(200).json({users});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can not connect to database" });
  }
};

const userSignup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 13);
    
    const user = new User({ name, email, password: hashedPassword });
    
    // await user.save();
    const location = 'Location: '.concat(`${req.baseUrl}/${user._id}`); 
    res.set({location});

    // create token and store cookies
    res.clearCookie(AUTH_COOKIE, {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      signed: true,
    });
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date(Date.now() + ms("7d"));
    res.cookie(AUTH_COOKIE, token, {
      httpOnly: true,
      signed: true,
      expires 
    });

    res.status(201).json(user);
  
  } catch (error) {
    console.log(error);
    res.status(500).json({"message": "Something went wrong, try again in a few seconds"});
  }
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).send("Email or password incorrect");
    }
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send("Email or password incorrect");
    }

    res.clearCookie(AUTH_COOKIE, {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      signed: true,
    });
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date(Date.now() + ms("7d"));
    res.cookie(AUTH_COOKIE, token, {
      httpOnly: true,
      signed: true,
      expires 
    });


    return res.status(200).send()
  } catch (error) {
    console.log (error)
    return res.status(500).json({message: 'ERROR', cause: error.message});
  }
}




export { getAllUsers, userSignup, userLogin };
