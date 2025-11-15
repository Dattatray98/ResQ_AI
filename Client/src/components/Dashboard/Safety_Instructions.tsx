
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLocation } from "../../hooks/useLocation";


interface datatype {
    id: number;
    heading: string;
    parag: string;
}



const data: datatype[] = [
    {
        id: 1,
        heading: "Evacuate to higher ground",
        parag: "Move to safe location away from the flood Zone immediately."
    },
    {
        id: 2,
        heading: "Turn off main utilities",
        parag: "Switch off your electricity, gas, and water supplies if it's safe."
    },
    {
        id: 3,
        heading: "Avoid floodwater",
        parag: "Do not walk, swim, or drive through flooded areas."
    },
    {
        id: 4,
        heading: "Have an emergency kit",
        parag: "Keep your supplies accessible and ready to go at a moment's notice."
    }
]



const Safety_Instructions: React.FC<any> = ({ onClose, directions, scrollToMap }) => {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [higherGround, setHigherGround] = useState<any | null>(null);

    useEffect(() => {
        const handleCoords = () => {
            getLocation(setCoords);
        }
        handleCoords();
    }, [])


    useEffect(() => {
        const fetchLocation = async () => {
            const response = await axios.get("http://localhost:8000/api/location/higher-ground",
                {
                    params: {
                        lat: coords?.lat,
                        lng: coords?.lng,
                    }
                },
            );
            setHigherGround(response.data)
        };

        fetchLocation();
    }, [coords]);

    return (
        <div className={` absolute top-[15%] left-[15%] border border-green-200 h-auto w-[70%] rounded-xl bg-linear-to-tr from-green-50 via-gray-50 to-gray-50 shadow-md p-5`}>
            <ImCross className="absolute top-5 right-5 cursor-pointer" onClick={onClose} />
            <div className="flex justify-evenly p-8">
                <div className="p-3 w-[50%] border-r-2 border-gray-200">
                    <h1 className="text-3xl font-medium mb-5">Safety Instructions</h1>
                    {data.map((item, id) => (
                        <div key={id} className="p-2 w-[50%]">
                            <h3 className="text-xl text-gray-700 font-medium">{item.heading}</h3>
                            <p className="text-gray-500 text-sm">{item.parag}</p>
                        </div>
                    ))}
                </div>

                <div className="w-[50%] p-3">
                    <h1 className="text-3xl font-medium mb-2">Higher Ground Locations</h1>
                    <p className="font-medium mb-3 text-gray-600">User Elevation : {higherGround?.UserElevation.toFixed(2)} m</p>
                    <div className="flex flex-col gap-3 overflow-y-scroll scrollbar-hidden p-3">
                        {higherGround?.loction?.length > 0 ? (
                            higherGround.loction.map((point: any, index: number) => (
                                <div key={index}
                                    onClick={() => { directions({ lat2: point.lat, lng2: point.lng }); scrollToMap() }}

                                    className="flex flex-col justify-between border border-gray-200 shadow-sm px-4 py-2 rounded-xl hover:scale-[1.01] transition-all duration-300 hover:bg-green-50 cursor-pointer">
                                    <h1 className="text-sm font-medium text-gray-700">{point.address}</h1>
                                    <div className="flex gap-5 pt-2">
                                        <p className="text-sm text-gray-600">Distance : {point.distanceInMeters} m</p>
                                        <p className="text-sm text-gray-600">Elevation : {point.elevation.toFixed(2)} m</p>
                                    </div>
                                </div>
                            ))) : (
                            <p>No higher ground found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety_Instructions;