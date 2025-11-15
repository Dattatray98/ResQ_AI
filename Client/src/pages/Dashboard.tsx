import { useEffect, useState } from "react";
import { getLocation } from "../hooks/useLocation";
import { getWeatherData } from "../hooks/useWeather";
import WeatherForcast from "../components/Dashboard/WeatherForcast";
import WeatherGrahp from "../components/WeatherGrahp";
import Risk_comp from "../components/Dashboard/Risk_comp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAlret from "../hooks/useAlert";
import Alert_message from "../components/Dashboard/Alert_message";
import Safety_Instructions from "../components/Dashboard/Safety_Instructions";
import useSafetyPopup from "../hooks/useSafetyPopup";
import MapComponent from "../components/MapComponent";

const Dashboard = () => {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [direct, setDirect] = useState<{ lat: number; lng: number } | null>(null);
    const [data, setData] = useState<any>("");
    const [dailyWeather, setDailyWeather] = useState<any>("")
    const [time, setTime] = useState(new Date() || "");
    const pred = useAlret();
    const { OpenSafety, handleSafety, closeSafety } = useSafetyPopup();
    

    useEffect(() => {
        const handleGetLocation = () => {
            getLocation(setCoords);
        }
        handleGetLocation();
    },[])

    const tempData = {
        labels: dailyWeather.time, // X-axis: time (dates)
        datasets: [
            {
                label: "Max Temperature (°C)",
                data: dailyWeather.temperature_2m_max,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
                innerHeight: "100%",
                innerWidth: "100%"
            },
        ],
    };

    const preciptationData = {
        labels: dailyWeather.time, // X-axis: time (dates)
        datasets: [
            {
                label: "precipitation",
                data: dailyWeather.precipitation_sum,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
                innerHeight: "100%",
                innerWidth: "100%"
            },
        ],
    };

    const WindData = {
        labels: dailyWeather.time,
        datasets: [
            {
                label: "Wind Speed",
                data: dailyWeather.wind_speed_10m_max,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
                innerHeight: "100%",
                innerWidth: "100%"
            },
        ],
    };

    const handleTesting = () => {
        pred.fetchpred();
    }

    const scrollSelection = ()=>{
        const section = document.getElementById("map");
        if(section){
            section?.scrollIntoView({behavior: "smooth"});
        }
    }

    const handleDirections = ({ lat2, lng2 }: { lat2: number, lng2: number }) => {
        setDirect({ lat: lat2, lng: lng2 })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval)
    }, [coords])


    useEffect(() => {
        if (coords) {
            getWeatherData(coords, setData, setDailyWeather)
        }
    }, [coords]);



    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="relative">
                <div className="h-[80vh] w-full p-3 md:p-10 flex items-center bg-linear-to-br from-white via-[#fbd9b9] to-[#ffffff]">
                    <div className="pt-10 md:px-8 mt-10 h-[90%] w-[50%] flex flex-col justify-center">
                        <h1 className=" flex text-4xl md:text-7xl font-medium text-black mb-2 ">Res<p className="text-red-700">Q</p>-AI Dashboard</h1>
                        <p className="text-gray-600 text-sm md:text-lg font-medium mt-2 ml-1">
                            Monitor real-time weather and disaster insights powered by ResQ AI ⚡
                        </p>

                        <div className="flex gap-5">
                            <button  className="px-5 py-2 bg-red-700 shadow-sm rounded-xl text-white font-medium mt-5 md:mt-10 md:ml-3 cursor-pointer">Refresh location</button>
                            <button onClick={handleTesting} className="px-5 py-2 bg-white shadow-sm rounded-xl text-black font-medium mt-5 md:mt-10 md:ml-3 cursor-pointer">Test With mock Data</button>
                        </div>

                    </div>

                    <div className="h-[90%] w-[50%] flex flex-col items-center gap-5 mt-10 ">
                        <WeatherForcast data={data} time={time} dailyWeather={dailyWeather} />
                        <Risk_comp prediction={pred.prediction} onOpenSafety={handleSafety} />
                    </div>
                </div>


                <div className="flex p-10 gap-6 bg-linear-to-tr from-[#fbd9b9] via-[#fbd9b9] to-[#ffffff]">
                    <WeatherGrahp Data={tempData} />
                    <WeatherGrahp Data={preciptationData} />
                    <WeatherGrahp Data={WindData} />
                </div>
                <div>
                    <div className="p-5 bg-blue-50">
                        <div className="p-3">
                            <h1 className="font-medium text-2xl text-black">Map</h1>
                        </div>
                        <div id="map">
                            {/* {coords ? <Map lat={coords.lat} lng={coords.lng} /> : "Loading..."} */}
                            {coords ? <MapComponent lat={coords.lat} lng={coords.lng} lat2={direct?.lat} lng2={direct?.lng} /> : "loading..."}
                        </div>
                    </div>
                </div>

                <Alert_message prediction={pred.prediction} onOpenSafety={handleSafety} />
                {OpenSafety && <Safety_Instructions lat={coords?.lat} lng={coords?.lng} onClose={closeSafety} directions={handleDirections} scrollToMap={scrollSelection} />}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Dashboard;
