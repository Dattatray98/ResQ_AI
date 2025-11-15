import express, { Request, Response } from "express";
import { MongoDatabase } from "./Config/MongoDB.config";
import cors from 'cors';
import Weather from "./Routes/Weather.route";
import Resq from "./Routes/ResQ_model.route";
import Location from "./Routes/location.route";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.FRONT_END_KEY,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
}));


const PORT = process.env.PORT || 8000;

app.use(express.json());

// MongoDatabase();

app.get('/', (req: Request, res: Response) => {
    res.send("ResQ-Ai server is running!");
});


app.use("/api", Weather);
app.use("/api", Resq);
app.use("/api", Location);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 