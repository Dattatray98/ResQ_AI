export const GenerateCoordinates = (lat: number, lng: number, radius: 500) => {
    const points = [];
    const earthRadius = 6378137;

    for (let angle = 0; angle < 360; angle += 45) {
        const dx = radius * Math.cos((angle * Math.PI) / 180);
        const dy = radius * Math.sin((angle * Math.PI) / 180);

        const newlat = lat + (dy / earthRadius) * (180 / Math.PI);

        const newlng = lng + (dx / (earthRadius * Math.cos((lat * Math.PI) / 180))) * (180 / Math.PI);
        points.push({ lat: newlat, lng: newlng });
    }

    return points;
}