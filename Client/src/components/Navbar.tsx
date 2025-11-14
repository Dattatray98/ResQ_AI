import { Link } from "react-router-dom"
import { NavbarTypes } from "../types/components-type/Navbar.types"
import { useLocation } from "react-router-dom"
import { SignedIn, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    const dashnav = path.startsWith("/dashboard")


    return (
        <nav className={`w-full h-18 flex justify-between items-center px-[5vh] ${dashnav ? "bg-transparent absolute z-10 border-b border-gray-400" : "absolute z-10 top-5 bg-transparent "}`}>
            <div className="flex items-center justify-between w-[45%] ">
                <div>
                    <h1 className=" flex text-3xl font-medium text-black mb-2 ">Res<p className="text-red-700">Q</p>-AI</h1>
                </div>
                <div className={`flex gap-10 ${dashnav ? "" : "hidden"}`}>
                    {NavbarTypes.map((item) => (
                        <Link to={`${item.path}`} key={item.id} className={`font-medium cursor-pointer text-black ${dashnav ? "text-xl" : "text-black text-xl"}`}>{item.label}</Link>
                    ))}
                </div>
            </div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
