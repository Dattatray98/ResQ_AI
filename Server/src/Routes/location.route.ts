import { Router } from "express";
import { GetLocation } from "../Controllers/location.controller";
import { GetHigherGround } from "../Controllers/higher-ground.controller";

const router = Router();


router.get("/user-address", GetLocation);
router.get("/location/higher-ground", GetHigherGround)

export default router;