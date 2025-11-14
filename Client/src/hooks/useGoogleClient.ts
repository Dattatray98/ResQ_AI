import { useEffect, useState } from "react"


export const useGoogleMaps = (apiKey: string) => {
    const [googleMaps, setGoogleMaps] = useState<typeof google | null>(null);

    useEffect(() => {
        if (window.google) {
            setGoogleMaps(window.google);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true
        script.onload = () => {
            setGoogleMaps(window.google!);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }

    }, [apiKey]);

    return googleMaps;
}
