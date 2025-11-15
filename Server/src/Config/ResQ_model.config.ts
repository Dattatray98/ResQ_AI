import axios from 'axios';
import { Request, Response } from 'express';
interface model_data {
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

export const ResQ_Model = async (data: model_data) => {
    const respones = await axios.post("https://resq-ai-disaster-predictor.onrender.com/predict", data);
    return respones.data
}