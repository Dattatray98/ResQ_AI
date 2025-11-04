import { Request, Response } from "express"
import { getMap } from "../Service/GoogleMaps.service";

export const fetchMapData = async (req:Request, res: Response)=>{
    const {lat, lng} = req.query;

    if(!lat || !lng){
        return res.status(400).json({message : "latitude and longitude is required"});
    }

    try{
        const data = await getMap(Number(lat), Number(lng));

        res.status(200).json({message: "fetched map data successfully", data});

    }catch(err){
        console.log(err);
        res.status(500).json({message : "server error ", err});
    }
}
