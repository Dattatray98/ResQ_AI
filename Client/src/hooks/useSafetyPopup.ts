import { useState } from "react"

const useSafetyPopup = () => {
    const [OpenSafety, setOpenSafety] = useState<boolean>(false);

    const handleSafety = () => {
        setOpenSafety(true); // open popup
    };

    const closeSafety = () => {
        setOpenSafety(false); // close popup
    };

    return { OpenSafety, handleSafety, closeSafety };

}

export default useSafetyPopup