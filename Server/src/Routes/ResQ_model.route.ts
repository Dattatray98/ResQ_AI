import { Router } from "express"
import { ModelPred } from "../Controllers/ModelPred.controller";

const router = Router();

router.post("/resq", ModelPred);

export default router;