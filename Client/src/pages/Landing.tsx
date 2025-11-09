import Navbar from "../components/Navbar"

const Landing = () => {
    return (
        <div className=" relative">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="border md:h-screen relative bg-cover "
                style={{backgroundImage: "url('../public/herosection7.jpg')"}}
                >
                    <div className="absolute z-11 left-[15vh] top-[30vh]">
                        <div className="mb-[5vh]">
                            <h1 className=" flex text-9xl font-medium text-black mb-2 ">Res<p className="text-red-700">Q</p>-AI</h1>
                            <p className="text-gray-700 text-xl mb-5">AI-powered flood prediction & disaster response system.</p>
                        </div>
                        <div className="flex gap-5 ml-10">
                            <button className="border border-gray-300 px-9 py-3 text-lg rounded-xl font-bold bg-red-700 text-white hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 cursor-pointer">Get Started</button>
                            <button className="border border-gray-300 px-9 py-3 text-lg rounded-xl font-bold text-white bg-black hover:bg-white hover:shadow-md hover:text-black transition-all duration-300 cursor-pointer ">Learn More</button>
                        </div>
                    </div>

                </div>

                <div className="h-screen p-20 flex gap-5">
                   
                </div>
            </main>
        </div>
    )
}

export default Landing
