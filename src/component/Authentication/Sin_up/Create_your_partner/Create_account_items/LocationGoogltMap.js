import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import map from "../../../../../Assets/Rectangle 24048 (1).svg";
const containerStyle = {
  width: "85%",
  height: "70px",
  borderRadius:'10px'
};



function LocationGoogleMap(props) {
  const [location, setLocation] = useState({lng:172.4736470489644,lat:-42.53569606686742});
  const [address, setAddress] = useState("");
  


  const handleMapClick = async(event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setLocation(newLocation);
    const API_KEY =process.env.REACT_APP_GOOGLE_POSITION_MAPS_API_KEY // استخدم مفتاح HERE API وليس Google

   
    const url = `https://discover.search.hereapi.com/v1/discover?at=${location.lat},${location.lng}&q=Mosques&apiKey=${API_KEY}`;
    ;
    
    try {
        const response = await axios.get(url);
        console.log("Response Data:", response.data);
        setAddress(response.data.items[0].address.label)
        console.log("address",address ,location.lng,location.lat);
        props.setlocation(response.data.items[0].address.label,response.data.items[0].address.city,response.data.items[0].address.countryName,location.lng,location.lat
        )
        console.log("here",response.data.items[0].address.city,response.data.items[0].address.countryName);
        
    } catch (error) {
        console.error("Error fetching location data:", error.response?.data || error.message);
    }
   



  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={14}
        onClick={handleMapClick}
      >
        <Marker position={location} />
      </GoogleMap>
      <img className="w-[300px] h-[70px] mt-[-70px] z-30" src={map} />
      <div>
        {/* <p><strong>Coordinates:</strong> {location.lat}, {location.lng}</p> */}
        
      </div>
    </LoadScript>
  );
}

export default LocationGoogleMap;
