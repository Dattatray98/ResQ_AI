import Router from "express";
import { getWeatherData } from "../Service/Weather.service";
const router = Router();


router.get('/weatherdata', getWeatherData);

export default router;