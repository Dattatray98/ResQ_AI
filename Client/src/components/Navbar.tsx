import { Link } from "react-router-dom"
import { NavbarTypes } from "../types/components-type/Navbar.types"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    const dashnav = path.startsWith("/dashboard")
    
    return (
        <div className={`w-full h-18 flex justify-between items-center px-[10vh] ${dashnav ? "bg-transparent absolute z-10": "absolute z-10 top-5 bg-transparent "}`}>
            <div className="flex items-center justify-between w-[45%] ">
                <div>
                    <h1 className={`font-bold cursor-pointer text-black ${dashnav ? "text-2xl" : "text-4xl"}`}>ResQ AI</h1>
                </div>
                <div className="flex gap-10">
                    {NavbarTypes.map((item) => (
                        <Link to={`${item.path}`} key={item.id} className={`font-medium cursor-pointer text-black ${dashnav ? "text-lg" : "text-black text-xl"}`}>{item.label}</Link>
                    ))}
                </div>
            </div>
            <div className="cursor-pointer  ">
                <a href="/" className="text-white border-2 border-gray-300 px-5 py-1 rounded-xl">landing</a>
            </div>
        </div>
    )
}

export default Navbar
