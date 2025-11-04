import { Router } from "express";
import {fetchMapData} from "../Controllers/GoogleMaps.controller"
const router = Router();

router.get("/map", fetchMapData);