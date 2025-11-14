import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from 'framer-motion';
const Alert_message: React.FC<any> = ({ prediction, onOpenSafety }) => {
  const [isRisk, setIsrisk] = useState<boolean>();

  useEffect(() => {
    if (!prediction) return;

    const pred = parseFloat(prediction);
    if (pred >= 60) {
      setIsrisk(true);
    } else {
      setIsrisk(false);
    }
  }, [prediction])

  const handleCancelAlert = () => {
    setIsrisk(false)
  }



  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`absolute top-[20%] left-[30%] border border-red-300 shadow-sm rounded-xl h-[40vh] w-[40%] flex  flex-col items-center justify-center bg-red-50 p-10 ${isRisk == true ? "block" : "hidden"}`}>
        <ImCross className="absolute top-5 right-5 cursor-pointer" onClick={handleCancelAlert} />
        <h1 className="text-4xl font-medium ">High Flood Risk Detected</h1>
        <p className="text-lg text-gray-400">Severe rainfall and rising river levels detected in your area.</p>

        <button onClick={onOpenSafety} className="px-4 py-2 bg-red-600 text-white font-medium cursor-pointer border rounded-xl mt-10">View Safety Instructions</button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Alert_message
