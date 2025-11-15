import { SignInButton, useUser } from "@clerk/clerk-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface WorkflowStep {
    id: number;
    heading: string;
    description: string;
}

const workflowData: WorkflowStep[] = [
    { id: 1, heading: "Data Ingestion", description: "Aggregating real-time geospatial, meteorological data from diverse sources." },
    { id: 2, heading: "Data Processing", description: "Cleaning, normalizing, and preparing data for predictions." },
    { id: 3, heading: "Prediction", description: "AI models predict flood risks based on real-time data." },
    { id: 4, heading: "Action", description: "Deliver actionable insights to help communities respond effectively." },
];

const Landing: React.FC = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    // Redirect signed-in users to dashboard
    useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }
    }, [isSignedIn, navigate]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative">
            <header>
                <Navbar />
            </header>

            <main>
                {/* Hero Section */}
                <div
                    className="border md:h-screen relative bg-cover"
                    style={{ backgroundImage: "url('../../Public/herosection7.jpg')" }}
                >
                    <div className="absolute z-10 left-[15vh] top-[30vh]">
                        <h1 className="text-9xl font-bold text-black mb-2">
                            Res<p className="text-red-700 inline">Q</p>-AI
                        </h1>
                        <p className="text-gray-700 text-xl mb-5">
                            AI-powered flood prediction & disaster response system.
                        </p>
                        <div className="flex gap-5">
                            <SignInButton>
                                <button className="border border-gray-300 px-9 py-3 text-lg rounded-xl font-bold bg-red-700 text-white hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 cursor-pointer">
                                    Get Started
                                </button>
                            </SignInButton>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="border border-gray-300 px-9 py-3 text-lg rounded-xl font-bold text-white bg-black hover:bg-white hover:text-black hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div id="about" className="h-auto p-10 flex items-center gap-5 bg-gray-900">
                    <div className="w-1/2 p-10">
                        <h1 className="text-white text-4xl font-medium mb-5">About ResQ-AI</h1>
                        <p className="text-gray-400">
                            ResQ-AI is an AI-powered platform that predicts and prevents flood risks using real-time weather, satellite, and topography data.
                        </p>
                        <div className="flex mt-10 gap-10">
                            <div>
                                <h2 className="text-white text-2xl font-medium">Our Mission</h2>
                                <p className="text-gray-400">Use AI to build safer, disaster-resilient communities.</p>
                            </div>
                            <div>
                                <h2 className="text-white text-2xl font-medium">Our Vision</h2>
                                <p className="text-gray-400">A world protected by intelligent early-warning systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 p-10">
                        <div className="h-full flex flex-wrap rounded-xl border-2 border-[#027fa5]">
                            <img src="../../Public/about.png" alt="ResQ-AI" className="h-full w-full rounded-xl" />
                        </div>
                    </div>
                </div>

                {/* Workflow Section */}
                <div className="h-[50vh] p-10 flex flex-col justify-center items-center gap-5 bg-gray-900">
                    <h1 className="text-white text-4xl font-medium text-center mb-3">
                        ResQ-AI Workflow: From Data to Action
                    </h1>
                    <p className="text-gray-400 text-lg text-center mb-5">
                        Our AI-powered platform transforms complex data into life-saving insights through a streamlined, four-step process.
                    </p>
                    <div className="flex gap-5 flex-wrap justify-center">
                        {workflowData.map((step) => (
                            <div
                                key={step.id}
                                className="text-white border border-gray-700 bg-gray-800 p-5 rounded-xl shadow-sm shadow-gray-700 w-60"
                            >
                                <h1 className="text-xl font-medium">{step.heading}</h1>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="h-[50vh] p-10 flex flex-col justify-center items-center gap-5 bg-gray-900">
                    <h1 className="text-5xl text-center text-white font-medium">Stay Ahead of the Flood.</h1>
                    <h1 className="text-5xl text-center text-white font-medium">Protect Your Community with AI</h1>
                    <p className="text-xl text-gray-400 mt-5 text-center">
                        Get a personalized walk-through of the ResQ-AI platform and see how our predictive analytics can safeguard your region.
                    </p>
                    <div className="flex gap-5 mt-10">
                        <button className="px-5 py-2 w-50 rounded-xl bg-gray-300 font-bold text-lg cursor-pointer hover:bg-white hover:text-gray-800 text-black transition-all duration-300 hover:shadow-sm shadow-gray-400">
                            Request a Demo
                        </button>
                        <button className="border border-gray-400 text-white px-5 py-2 w-50 rounded-xl bg-transparent font-bold text-lg cursor-pointer hover:shadow-sm shadow-gray-400 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Landing;
