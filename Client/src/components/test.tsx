import { useState } from "react";
import axios from "axios";
import Map from "./map";
import Navbar from "./Navbar";

const App = () => {
  const [formData, setformData] = useState({
    latitude: '',
    longitude: ''
  });
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const [data, setData] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  }


  const fetchweather = async (lat?: string, lon?: string) => {
    const response = await axios.get("http://localhost:5000/api/weatherdata", {
      params: {
        latitude: lat || formData.latitude,
        longitude: lon || formData.longitude
      }
    })
    setData(Object.entries(response.data));
  }

  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(
  //     (position)=>{
  //       const lat = position.coords.latitude.toString();
  //       const lon = position.coords.longitude.toString();
  //       setformData({latitude : lat, longitude: lon });
  //       setCoords({
  //         lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //       })
  //       fetchweather(lat, lon);
  //     },(error)=>{
  //       console.log(error);
  //     }
  //   );
  // },[])


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setformData({ latitude: position.coords.latitude.toString(), longitude: position.coords.longitude.toString() })
        setCoords({
           lat: position.coords.latitude,
            lng: position.coords.longitude,
        })
      }
    );

  }

  return (
    <div>
      <Navbar/>
      <input type="text" placeholder="latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
      <input type="text" placeholder="longitude" name="longitude" value={formData.longitude} onChange={handleChange} />

      <button onClick={getLocation}> Use Current location</button>
      <button onClick={() => fetchweather()}>Get data</button>

      {data && data.map(([key, value]: [string, any]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}

      <div>
        {coords ? <Map lat={coords.lat} lng={coords.lng} /> : "Loading..."}
      </div>

    </div>
  )
}

export default App
