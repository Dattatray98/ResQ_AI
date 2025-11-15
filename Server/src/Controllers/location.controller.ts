import { googleMapsClient } from "../Service/GoogleMap.service";
import { Request, Response } from "express";

export const GetLocation = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.query;

        if (!lat || !lng) {
            return res.status(400).json({ message: "latitude and longitude are required" });
        }

        const response = await googleMapsClient.reverseGeocode({
            params: {
                latlng: `${lat},${lng}`,
                key: process.env.GOOGLE_MAP_API_KEY!,
            },
        });

        const address = response.data.results?.[0]?.formatted_address;
        if (!address) {
            return res.status(404).json({ message: "No address found for these coordinates" });
        }

        const shorterAddress = address.length > 10 ? address.slice(0, 50) : address;

        res.status(200).json({
            latitude: lat,
            longitude: lng,
            shorterAddress,
        });
    } catch (err) {
        console.error("Error in GetLocation:", err);
        res.status(500).json({ error: "Failed to reverse geocode" });
    }
};
