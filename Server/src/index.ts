import express, { Request, Response } from "express";
import { MongoDatabase } from "./Config/MongoDB.config";
import cors from 'cors';
import User from "./Routes/User.route"
import Weather from "./Routes/Weather.route";
import { fetchMapData } from "./Controllers/GoogleMaps.controller";
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
}));


const PORT = process.env.PORT || 5000;

app.use(express.json());

MongoDatabase();

app.get('/', (req: Request, res: Response) => {
    res.send("ResQ-Ai server is running!");
});


app.use("/api/user", User);
app.use("/api", Weather);
app.use("/api", fetchMapData);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 