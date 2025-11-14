import { useEffect, useRef } from 'react'
import { useGoogleMaps } from '../hooks/useGoogleClient'

const MapComponent: React.FC<any> = ({ lat, lng, lat2, lng2 }) => {
    const googleMaps = useGoogleMaps(import.meta.env.VITE_GOOGLE_MAPS_KEY);
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<any>(null);
    const directionsRendererRef = useRef<any>(null);

    useEffect(() => {
        if (!googleMaps || !mapRef.current) return;
        if (mapInstanceRef.current) return;


        const map = new googleMaps.maps.Map(mapRef.current, {
            center: { lat, lng },
            zoom: 14,
        });

        mapInstanceRef.current = map;

        new googleMaps.maps.Marker({
            position: { lat, lng },
            map,
        });

    }, [googleMaps, lat, lng]);

    useEffect(() => {
        if (!googleMaps || !mapInstanceRef.current) return;
        if (!lat2 || !lng2) return;
        if (!mapInstanceRef.current) return;

        if (!directionsRendererRef.current) {
            directionsRendererRef.current = new googleMaps.maps.DirectionsRenderer();
            directionsRendererRef.current.setMap(mapInstanceRef.current);
        }
        const directionsService = new googleMaps.maps.DirectionsService();

        directionsService.route(
            {
                origin: { lat, lng },
                destination: { lat: lat2, lng: lng2 },
                travelMode: googleMaps.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === googleMaps.maps.DirectionsStatus.OK) {
                    directionsRendererRef.current?.setDirections(result);
                } else {
                    console.error("Directions request failed:", status);
                }
            }
        );
    }, [lat2, lng2, googleMaps]);

    return (
        <div
            ref={mapRef}
            className="rounded-2xl w-full h-[60vh] border-2 border-gray-300 shadow-md"
        />
    );
};

export default MapComponent;
