
import { ImCross } from "react-icons/im";

interface datatype {
    id: number;
    heading: string;
    parag: string;
}

interface placetype {
    id: number;
    place: string;
    distance: number
}

const places: placetype[] = [
    { id: 1, place: "pune", distance: 500 },
    { id: 2, place: "nanded", distance: 200 },
    { id: 3, place: "mumbai", distance: 100 }
]
const data: datatype[] = [
    {
        id: 1,
        heading: "Evacuate to higher ground",
        parag: "Move to safe location away from the flood Zone immediately."
    },
    {
        id: 1,
        heading: "Turn off main utilities",
        parag: "Move to safe location away from the flood Zone immediately."
    },
    {
        id: 1,
        heading: "Avoid floodwater",
        parag: "Move to safe location away from the flood Zone immediately."
    },
    {
        id: 1,
        heading: "Have an emergency kit",
        parag: "Move to safe location away from the flood Zone immediately."
    }
]



const Safety_Instructions:React.FC<any> = ({onClose}) => {
    
    return (
<div className={` absolute top-[15%] left-[15%] border border-green-200 h-auto w-[70%] rounded-xl bg-linear-to-tr from-green-50 via-gray-50 to-gray-50 shadow-md p-5`}>
            <ImCross className="absolute top-5 right-5 cursor-pointer" onClick={onClose} />
            <div className="flex justify-evenly p-8">
                <div className="p-3 w-[50%] border-r-2 border-gray-200">
                    <h1 className="text-3xl font-medium mb-5">Safety Instructions</h1>
                    {data.map((item) => (
                        <div key={item.id} className="p-2 w-[50%]">
                            <h3 className="text-xl text-gray-700 font-medium">{item.heading}</h3>
                            <p className="text-gray-500 text-sm">{item.parag}</p>
                        </div>
                    ))}
                </div>
                <div className="w-[50%] p-3">
                    <h1 className="text-3xl font-medium mb-5">Higher Ground Locations</h1>
                    <div className="flex flex-col gap-3">
                        {places.map((items) => (
                            <div className=" flex justify-between items-center border border-gray-200 shadow-sm px-4 py-2  rounded-xl hover:scale-[1.02] transition-all duration-300 hover:bg-green-50">
                                <h1 className="text-xl font-medium text-gray-700">{items.place}</h1>
                                <p className="text-sm font-medium text-gray-600">Distance {items.distance} &gt;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety_Instructions
