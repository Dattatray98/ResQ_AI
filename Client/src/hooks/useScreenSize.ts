import { useEffect, useState } from "react"

const useScreenSize = ()=>{
    const [width, setWidht] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=> setWidht(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize)
    },[]);

    return width
};


export default useScreenSize;