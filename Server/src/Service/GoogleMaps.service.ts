import axios from "axios";



export const getMap = async (lat: number, lng: number) => {
    const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json",
        {
            params: {
                 latlng: `${lat},${lng}`,
                key: process.env.GOOGLE_MAP_API_KEY,
            },
        }
    );

    return response.data;
}

