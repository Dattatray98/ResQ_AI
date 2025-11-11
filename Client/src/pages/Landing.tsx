import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

interface datatype {
    id: number;
    heading: string;
    description: string;
}

const data: datatype[] = [
    {
        id: 1,
        heading: "Data Ingestion",
        description: "Aggregating real-time geospatial, meteorological data from diverse sources",
    },
    {
        id: 1,
        heading: "Data Ingestion",
        description: "Aggregating real-time geospatial, meteorological data from diverse sources",
    },
    {
        id: 1,
        heading: "Data Ingestion",
        description: "Aggregating real-time geospatial, meteorological data from diverse sources",
    },
    {
        id: 1,
        heading: "Data Ingestion",
        description: "Aggregating real-time geospatial, meteorological data from diverse sources",
    },

]



const Landing = () => {
    return (
        <div className=" relative">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="border md:h-screen relative bg-cover "
                    style={{ backgroundImage: "url('../public/herosection7.jpg')" }}
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

                <div className="h-auto p-10 flex items-center gap-5 bg-gray-900">
                    <div className="w-[50%] p-10">
                        <h1 className="text-white text-4xl font-medium">About ResQ-AI</h1>
                        <p className="text-gray-400">ResQ-AI is an AI-powered platform that predicts and prevents flood risks using real-time weather, satellite, and topography data.</p>
                        <div className="flex mt-10">
                            <div className="">
                                <h2 className="text-white text-2xl font-medium">Our Mission</h2>
                                <p className="text-gray-400">Use AI to build safer, disaster resilient communities.</p>
                            </div>
                            <div className="">
                                <h2 className="text-white text-2xl font-medium">Our Vision</h2>
                                <p className="text-gray-400">A world protected by intelligent early-warning systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] p-10">
                        <div className="h-full flex flex-wrap rounded-xl border-2 border-[#027fa5] ]">
                            <img src="/about.png" alt="ResQ-AI" className="h-full w-full rounded-xl " />
                        </div>
                    </div>
                </div>

                <div className="h-auto p-10 flex flex-col items-center gap-5 bg-gray-900">
                    <div>
                        <h1 className="text-white text-center text-4xl font-medium">ResQ-AI Workflow : From Data to Action</h1>
                        <p className="text-gray-400 text-lg">Our AI-powered platform tranforms complex data into life-saving insights through a streamlined, four-step process.</p>
                    </div>
                    <div className="flex gap-5 p-10">
                            {data.map((item:any)=>(
                                <div className="text-white border border-gray-700 bg-gray-800 p-5 rounded-xl shadow-sm shadow-gray-700">
                                    <h1 className="text-white text-xl font-medium">{item.heading}</h1>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Landing