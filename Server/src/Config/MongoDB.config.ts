import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const MongoDatabase = () => {
    mongoose.connect(process.env.MONGO_URL || "")
    .then(() => console.log("connected to mongoDB database"))
    .catch((err: any) => console.log("error connecting to mongoDB database : ", err));
}