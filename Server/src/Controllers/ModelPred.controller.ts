import { Request, Response } from "express"
import { ResQ_Model } from "../Config/ResQ_model.config";

export const ModelPred = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const prediction = await ResQ_Model(data);
        return res.status(200).json(prediction);

    } catch (err) {
        res.status(500).json({message: "server error ", err});
    }
}