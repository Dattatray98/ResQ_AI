import axios from "axios";
import React, { useEffect, useState } from "react";
import { getLocation } from "../../hooks/useLocation";

const Risk_comp: React.FC<any> = ({ prediction }) => {
  const [riskLevel, setRiskLevel] = useState("Low");
  const [userLocation, setUserLocation] = useState();
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);


  useEffect(() => {
    const handleCoords = () => {
      getLocation(setCoords);
    }
    handleCoords();
  }, [])

  useEffect(() => {
    if (!prediction) return;

    const pred = parseFloat(prediction);

    if (pred <= 30) {
      setRiskLevel("Low");
    } else if (pred > 30 && pred <= 60) {
      setRiskLevel("Moderate");
    } else if (pred > 60) {
      setRiskLevel("High");
    }
  }, [prediction]);

  useEffect(() => {
    if (!coords) return; // don't fetch if coords are not available

    const fetchUserLocation = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user-address`, {
          params: {
            lat: coords.lat,
            lng: coords.lng,
          },
        });
        setUserLocation(response.data.shorterAddress);
      } catch (err) {
        console.error("Error fetching user location:", err);
      }
    };

    fetchUserLocation();
  }, [coords]);


  return (
    <div className="border w-[85%] border-gray-200 rounded-4xl shadow-sm p-5 bg-[#fcecdf]">
      <h1 className="text-xl md:text-3xl text-gray-600 font-medium">Flood Risk Prediction</h1>
      <div className="flex justify-evenly mx-5 py-5 border-b border-gray-300 ">
        <div className="w-[50%] px-8">
          <h3 className="font-medium text-sm md:text-lg">Your Location</h3>
          <p className="text-[12px] md:text-sm font-medium text-gray-500 ">{userLocation}</p>
        </div>
        <div className="border-l-2 border-gray-200 w-[50%] px-2 md:px-8 flex flex-col items-end">
          <h3 className="font-medium text-sm md:text-lg">Probabilty of Flood</h3>
          <p className="text-2xl md:text-4xl text-gray-600 font-medium">{prediction || "0"} %</p>
        </div>
      </div>

      <div className="flex justify-evenly gap-2 md:mx-5 py-3">
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm w-[50%] bg-[#fae2cc] hover:shadow-md transition-all duration-300">
          <h3 className="md:text-xl font-medium text-gray-700">Risk Level</h3>
          <div className="flex items-center gap-2 ml-2">
            <span className={
              `h-4 w-4 mt-1 bg-red-700 rounded-full 
              ${riskLevel == "Low" ? "bg-green-600" : ""}
              ${riskLevel == "Moderate" ? "bg-yellow-500" : ""} 
              ${riskLevel == "High" ? "bg-red-700" : ""}`
            }>
            </span>

            <p className={`text-xl md:text-3xl font-medium text-red-700 ${riskLevel == "Moderate" ? "text-yellow-500" : ""} ${riskLevel == "Low" ? "text-green-600" : ""} ${riskLevel == "High" ? "text-red-700" : ""}`}>{riskLevel}</p>

          </div>
        </div>
        {riskLevel == "High" ? <div className="border border-gray-200 p-4 rounded-xl shadow-sm w-[50%] md:h-auto h-25 hover:shadow-md transition-all duration-300">
          <h3 className="md:text-xl font-medium text-gray-700">ResQ Your self</h3>
          <p className="text-sm font-medium text-gray-500 cursor-pointer">Your area has a flood risk.</p>
        </div> : <div className="border border-gray-200 p-4 rounded-xl shadow-sm w-[50%] md:h-auto h-25 hover:shadow-md transition-all duration-300">
          <h3 className="md:text-xl font-medium text-gray-700">ResQ Your self</h3>
          <p className="text-sm font-medium text-gray-500 cursor-pointer">Your are Safe Now, No flood Risk</p>
        </div>}
      </div>
    </div>
  )
}

export default Risk_comp
