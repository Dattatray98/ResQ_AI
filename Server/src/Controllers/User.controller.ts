import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import User from "../Models/User.model";

export const CreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        // console.log("request body : ", req.body);

        if(!name || !email || !password){
            // console.log("please provide all the details")
            return res.status(400).json({ message : 'please provide all the details'});
        }

        // console.log("hashing password");
        const hashpassword = await bcrypt.hash(password, 10);
        // console.log("password hashed successfully");

        const user = await User.create(
            {
                name,
                email,
                password: hashpassword,
            }
        );


        // console.log("user create successfully : ", user);

        res.status(201).json({ message: "user created successfully : ", user });
    } catch (err) {
        console.log("got an error : ", err);
        res.status(500).json({ message : "Internal Server error : ", err})
    };
};



export const GetUser = async (req: Request, res: Response) =>{
    try{

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({ message : "please provide all the details"});
        }

        
        const user = await User.findOne({ email: email});
        console.log('user found : ', user);
        if(!user){
            return res.status(404).json({ message : 'user not found'});
        }

        const hashedpasswrod = await bcrypt.compare(password, user?.password || "");

        const isPasswordValid = hashedpasswrod;

        if(!isPasswordValid){
            return res.status(401).json({ message : "invalid credentials"});
        }

        res.status(200).json({ message : "user found successfully", user});

    }catch(err){
        console.log("got an error : ", err);
        res.status(500).json({ message : "Internal Server error : ", err});
    };
};


export const UserUpdate = async (req: Request, res: Response) => {
    try{
        const { email } = req.params;
        const update = req.body;

        const user = await User.findOneAndUpdate({ email: email }, update, {new: true});

        if(!user){
            return res.status(404).json({ message : "user not found"});
        };

        res.status(200).json({ message : "user updated successfully", user});
    }catch(err){
        console.log(" got an error : ", err);
        res.status(500).json({ message : "Internal Server error : ", err});
    }
};


