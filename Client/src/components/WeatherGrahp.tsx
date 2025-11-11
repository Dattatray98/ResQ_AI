import {
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    Legend,
    Chart as ChartJS,
    LineElement,
    Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const WeatherGraph: React.FC<any> = ({ Data  }) => {


    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: "7-Day Weather Trends",
            },
        },
    };

    return (
        <div className="h-50 md:h-[30vh] md:w-[60vh] p-5 rounded-4xl border border-gray-200 shadow-md bg-white">
            <Line data={Data} options={options} />
        </div>
    );
};

export default WeatherGraph;
