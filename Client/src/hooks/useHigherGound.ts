import { useEffect, useState } from "react";
import useAlret from "./useAlert";
import axios from "axios";

interface HigherGroundPoint {
    elevation: number;
    lat: string;
    lng: string;
    address: string;
    distanceInMeters: number;
}

interface HigherGroundData {
    higherGroundAddress: HigherGroundPoint[];
}

export const useHigherGround = () => {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [higherGround, setHigherGround] = useState<HigherGroundData | null>(null);
    const pred = useAlret();

    // Get user location once
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }
        );
    }, []);

    // Fetch higher ground when coords & prediction ready
    useEffect(() => {
        const fetchHigherGround = async () => {
            if (!pred.prediction || !coords) return;

            if (pred.prediction > 60) {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_BACKEND_API}/api/location/higher-ground`,
                        {
                            params: {
                                lat: coords.lat,
                                lng: coords.lng,
                            },
                        }
                    );
                    setHigherGround(response.data);
                } catch (err) {
                    console.error("Error fetching higher ground:", err);
                }
            }
        };

        fetchHigherGround();
    }, [pred.prediction, coords]);

    return { higherGround };
};
