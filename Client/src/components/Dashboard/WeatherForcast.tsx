
import type React from "react"
import { IoPartlySunnyOutline } from "react-icons/io5"
import { CiTempHigh } from "react-icons/ci";

const WeatherForcast: React.FC<any> = ({ data, time }) => {

    const unit = ["%", "mph"]



    return (
        <div className="h-auto w-[85%] mt-10 border border-gray-200 rounded-4xl shadow-md p-4 md:p-10 bg-[#fcecdf]">
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="border-b border-gray-300 w-50 pb-1">
                        {Array.isArray(data) ? (
                            data.slice(0, 1).map((item: any) => (
                                <p key={item[0]} className="md:text-5xl text-gray-400 font-medium flex items-center"><CiTempHigh className="h-11 w-11 mt-2" />{item[1]}°C</p>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                    <div className="ml-4">
                        {Array.isArray(data) ? (
                            data.slice(2 - 4).map((item: any, i) => (
                                <p key={item[0]} className="text-lg text-gray-400 font-medium flex items-center">{item[0]} : {item[1]} {unit[i]}</p>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className=" backdrop:backdrop-blur-2xl w-55">
                    <span className="flex items-center gap-2">
                        <IoPartlySunnyOutline className="text-yellow-600 h-9 w-9" />
                        <h1 className="md:text-4xl text-gray-700 font-medium">Weather</h1>
                    </span>
                    <p className="text-xl ml-5 font-medium text-gray-400 px-2">{time.toLocaleTimeString('en-US', {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit"
                    })}</p>
                </div>
            </div>
            {/* <div className="py-5 md:px-4 hidden md:block">
               <Risk_comp />
            </div> */}
        </div>
    )
}

export default WeatherForcast
