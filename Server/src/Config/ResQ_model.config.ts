import axios from 'axios';
import { Request, Response } from 'express';
interface data {
    MonsoonIntensity: number
    RiverManagement: number
    Deforestation: number
    Urbanization: number
    ClimateChange: number
    DamsQuality: number
    Siltation: number
    AgriculturalPractices: number
    Encroachments: number
    IneffectiveDisasterPreparedness: number
    DrainageSystems: number
    CoastalVulnerability: number
    Landslides: number
    Watersheds: number
    DeterioratingInfrastructure: number
    PopulationScore: number
    WetlandLoss: number
    InadequatePlanning: number
    PoliticalFactors: number

}

export const ResQ_Model = async (req: Request, res: Response) => {
    try {
        const data: data = req.body;
        const respones = await axios.post("https://resq-ai-disaster-predictor.onrender.com/predict", data);

        res.status(200).json(respones.data)

    } catch (err) {
        res.status(500).json({ message: "server error ", err })
        console.log(err)
    }
}