import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { getLocation } from "../hooks/useMap";
import Map from "../map";
import { getWeatherData } from "../hooks/useWeather";
import { IoPartlySunnyOutline } from "react-icons/io5";

const Dashboard = () => {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [data, setData] = useState<any>("");
    const [time, setTime] = useState(new Date() || "");
    const handleGetLocation = () => {
        getLocation(setCoords);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval)
    }, [coords])


    useEffect(() => {
        if (coords) {
            getWeatherData(coords, setData)
        }
    }, [coords]);


    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="h-[50vh] p-10 border flex items-center bg-linear-to-br from-white via-[#fbd9b9] to-[#ffffff]">
                    <div className="h-[32vh] w-[56vh] border border-gray-300 rounded-[7vh] shadow-sm p-10 bg-[#fcf1e8]">
                        <div className="flex items-center justify-between gap-2 backdrop:backdrop-blur-2xl">
                            <span className="flex items-center gap-2">
                                <IoPartlySunnyOutline className="text-yellow-600 h-8 w-8" />
                                <h1 className="text-4xl font-medium">Weather</h1>
                            </span>
                            <p className="text-5xl font-medium text-gray-400 w-47 px-2">{time.toLocaleTimeString('en-US', {
                                hour: "2-digit",
                                minute: "2-digit",
                                second : "2-digit",
                                hour12: false
                            })}</p>
                        </div>
                        <div className="p-5">
                            {Array.isArray(data) ? (
                                data.slice(1).map((item: any) => (
                                    <div key={item[0]} className="flex items-center ">
                                        {/* <p className="font-medium text-xl">{key} : &#160;</p> */}
                                        <p className="font-bold text-2xl">{item[1]}</p>
                                    </div>
                                ))
                            ) : (
                                <p>loading...</p>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleGetLocation}>Getlocation</button>
                </div>
                <div>
                    <div>
                        {coords ? <Map lat={coords.lat} lng={coords.lng} /> : "Loading..."}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Dashboard
