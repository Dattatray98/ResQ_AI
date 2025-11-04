import axios from 'axios';
import { Request, Response } from 'express';


export const getWeatherData = async (req: Request, res: Response) => {
    try {
        const {latitude, longitude} = req.query;

        if(!latitude || !longitude){
            return res.status(400).json({ message : "latitude and longitude not provided"});
        }

        const Weather = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude : latitude,
                longitude : longitude,
                hourly: 'temperature_2m,precipitation,wind_speed_10m',
            }
        });


        const data = Weather.data.hourly;

        const now = new Date();
        const offset = 5.5 * 60 * 60 * 1000; 
        const istTime = new Date(now.getTime() + offset);
        const currenthour = istTime.toISOString().slice(0, 13) + ":00";
        console.log(currenthour);

        const index = data.time.findIndex((t: string) => t.startsWith(currenthour));

        if (index !== -1){
            const CurrentWeather = {
                time : data.time[index],
                temperature : data.temperature_2m[index],
                precipitation : data.precipitation[index],
                wind_speed : data.wind_speed_10m[index],
            };
            return res.status(200).json(CurrentWeather);

        }else{
            return res.status(404).json({ message : "current weather data not found"});
        }

    } catch (error) {
        res.status(500).json({ message : "Internal server error", error});
    }
}



