import axios from "axios";



const getMap = async (lat: any, lng: any) => {
    const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json",
        {
            params: {
                latlag: `${lat}, ${lng}`,
                key: process.env.GOOGLE_MAP_API_KEY,
            },
        }
    );

    return response.data;
}