import { useEffect, useState } from "react";
import useAlret from "../../hooks/useAlert"

const Risk_comp = () => {
  const pred = useAlret();
  const [RiskLevel, setRiskLevel] = useState("");

  const prediction = JSON.stringify(pred.prediction).slice(0, 4);

  useEffect(() => {
    const handleRiskLevel = () => {
      if (prediction <= '3') {
        setRiskLevel("Low");
      } else if (prediction > "3" && prediction <= "7") {
        setRiskLevel("Moderate");
      } else if (prediction > "7") {
        setRiskLevel("high")
      }
    }
    handleRiskLevel();
  }, [prediction])

  return (
    <div className="border w-[85%] border-gray-200 rounded-4xl shadow-sm p-5 bg-[#fcecdf]">
      <h1 className="text-xl md:text-3xl text-gray-600 font-medium">Flood Risk Prediction</h1>
      <div className="flex justify-evenly mx-5 py-5 border-b border-gray-300 ">
        <div className="w-[50%] px-8">
          <h3 className="font-medium text-sm md:text-lg">Location</h3>
          <p className="text-[12px] md:text-sm font-medium text-gray-500 ">Pune, Maharashtra</p>
        </div>
        <div className="border-l-2 border-gray-200 w-[50%] px-2 md:px-8 flex flex-col items-end">
          <h3 className="font-medium text-sm md:text-lg">Probabilty of Flood</h3>
          <p className="text-2xl md:text-4xl text-gray-600 font-medium">{JSON.stringify(pred.prediction).slice(0, 4)}%</p>
        </div>
      </div>

      <div className="flex justify-evenly gap-2 md:mx-5 py-3">
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm w-[50%] bg-[#fae2cc] hover:shadow-md transition-all duration-300">
          <h3 className="md:text-xl font-medium text-gray-700">Risk Level</h3>
          <div className="flex items-center gap-2 ml-2">
            <span className={`h-4 w-4 mt-1 bg-red-700 rounded-full ${RiskLevel == "Moderate" ? "bg-yellow-500" : ""} ${RiskLevel == "Low" ? "bg-green-600" : ""} ${RiskLevel == "High" ? "bg-red-700" : ""}`}></span>
            <p className={`text-xl md:text-3xl font-medium text-red-700 ${RiskLevel == "Moderate" ? "text-yellow-500" : ""} ${RiskLevel == "Low" ? "text-green-600" : ""} ${RiskLevel == "High" ? "text-red-700" : ""}`}>{RiskLevel}</p>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm w-[50%] md:h-auto h-25 hover:shadow-md transition-all duration-300">
          <h3 className="md:text-xl font-medium text-gray-700">ResQ Your self</h3>
          <p className="text-sm font-medium text-gray-500 cursor-pointer">See nearest safe places and routes &gt;</p>
        </div>
      </div>
    </div>
  )
}

export default Risk_comp
