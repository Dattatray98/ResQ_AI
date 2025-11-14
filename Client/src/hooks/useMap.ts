export function getLocation( setCoords: any) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setCoords({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        }
    );

}
