import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);

        updateWidth(); // set initial width
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return width;
};

export default useScreenSize;
