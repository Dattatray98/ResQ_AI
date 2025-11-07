export function getLocation( setCoords: any) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // setformData({ latitude: position.coords.latitude.toString(), longitude: position.coords.longitude.toString() })
            setCoords({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        }
    );

}
