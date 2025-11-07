import axios from "axios";

export async function getWeatherData(coords: any, setData: any) {
    if(!coords)return;

    try{
        const res = await axios.get("http://localhost:5000/api/weatherdata",
            {
                params: {
                    latitude: coords.lat,
                    longitude: coords.lng
                }
            });
    
            const dataArray = Object.entries(res.data);
            setData(dataArray);
            console.log(dataArray)
    }catch(err){
        console.log(err)
    }

}