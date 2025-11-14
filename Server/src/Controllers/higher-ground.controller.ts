import { Request, response, Response } from "express"
import { googleMapsClient } from "../Service/GoogleMap.service";
import { GenerateCoordinates } from "../utils/GenerateCoords";
import { getDistance } from "../utils/GetDistance";


export const GetHigherGround = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.query;

        const UserElevationRes = await googleMapsClient.elevation({
            params: {
                locations: [{ lat: Number(lat), lng: Number(lng) }],
                key: process.env.GOOGLE_MAP_API_KEY!,
            },
        });

        const UserElevation = UserElevationRes.data.results[0].elevation;

        const NearByPoints = GenerateCoordinates(Number(lat), Number(lng), 500);

        const elevations = await googleMapsClient.elevation({
            params: {
                locations: NearByPoints,
                key: process.env.GOOGLE_MAP_API_KEY!,
            },
        });


        const HigherGround = elevations.data.results.filter(
            (point) => point.elevation > UserElevation
        );



        const higherGroundAddress = await Promise.all(
            HigherGround.map(async (point) => {
                const lat2 = point.location.lat;
                const lng2 = point.location.lng;

                const geo = await googleMapsClient.reverseGeocode({
                    params: {
                        latlng: `${lat2}, ${lng2}`,
                        key: process.env.GOOGLE_MAP_API_KEY!,
                    }
                })

                const distance = getDistance(
                    Number(lat),
                    Number(lng),
                    lat2,
                    lng2
                )

                const address = geo.data.results.length > 0 ? geo.data.results[0].formatted_address : "No address found"

                return {
                    elevation: point.elevation,
                    lat: lat2,
                    lng: lng2,
                    address,
                    distanceInMeters: Math.round(distance),
                }
            })
        )

        return res.status(200).json({
            UserElevation,
            loction: higherGroundAddress
        })


    } catch (err) {
        res.status(500).json({ error: "Elevation error" });
    }
}