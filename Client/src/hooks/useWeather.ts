import axios from "axios";

export async function getWeatherData(coords: any, setData: any, setDailyWeather: any) {
    if (!coords) return;

    try {
        const res = await axios.get("http://localhost:8000/api/weatherdata",
            {
                params: {
                    latitude: coords.lat,
                    longitude: coords.lng
                }
            });

            const todayData = Object.entries(res.data.CurrentWeather);

            const dailyData = res.data.dailyData;

        setData(todayData);
        setDailyWeather(dailyData)
    } catch (err) {
        console.log(err)
    }

}