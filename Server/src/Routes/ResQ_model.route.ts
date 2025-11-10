import { Router } from "express"
import { ResQ_Model } from "../Config/ResQ_model.config";

const router = Router();

router.post("/resq", ResQ_Model);

export default router;