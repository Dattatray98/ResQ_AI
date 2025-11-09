import { useEffect } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

declare const google: any;

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  useEffect(() => {
    // Inject Google Maps script only once
    const existingScript = document.getElementById("googleMaps");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "googleMaps";
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCq6YAGoH4Q6Ef4OsFMHXTnjd6-l2_RV3g&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize map
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat, lng },
        zoom: 14,
      });

      new google.maps.Marker({
        position: { lat, lng },
        map: map,
      });
    };
  }, [lat, lng]);

  return <div id="map" className="rounded-2xl w-full h-[60vh] border-2 border-gray-300 shadow-md "/>;
};

export default Map;
