import { Router } from "express";
import { CreateUser, GetUser, UserUpdate } from "../Controllers/User.controller";

const router = Router();


router.post('/createuser', CreateUser);
router.get("/getuser", GetUser);
router.patch("/updateuser/:email", UserUpdate);

export default router;