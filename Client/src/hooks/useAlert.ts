import axios from "axios"
import { useEffect, useState } from "react"

const useAlret = () => {
    const [prediction, setPrediction] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchpred() {
            try {
                const res = await axios.post("http://localhost:8000/api/resq", {
                    "MonsoonIntensity": 75,
                    "RiverManagement": 80,
                    "Deforestation": 40,
                    "Urbanization": 70,
                    "ClimateChange": 65,
                    "DamsQuality": 50,
                    "Siltation": 55,
                    "AgriculturalPractices": 60,
                    "Encroachments": 50,
                    "IneffectiveDisasterPreparedness": 45,
                    "DrainageSystems": 70,
                    "CoastalVulnerability": 65,
                    "Landslides": 30,
                    "Watersheds": 50,
                    "DeterioratingInfrastructure": 55,
                    "PopulationScore": 80,
                    "WetlandLoss": 60,
                    "InadequatePlanning": 50,
                    "PoliticalFactors": 55
                })

                const value = res.data?.prediction?.[0]?.[0]
                const percent = value * 100;
                setPrediction(percent)
                console.log(percent);
            } catch (err: any) {
                setError(err.message)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        fetchpred();
    }, [])

    return { prediction, loading, error }
}


export default useAlret;