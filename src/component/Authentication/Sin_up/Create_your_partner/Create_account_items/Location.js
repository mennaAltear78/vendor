import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet"; // Ensure useMapEvents is imported

import "leaflet/dist/leaflet.css";
import style from "./Location.module.css";

function Location(props) {
  const [position, setPosition] = useState(null);  // Stores the current position (lat, lng)
  const [longitude, setLongitude] = useState(''); // Stores the longitude
  const [latitude, setLatitude] = useState('');   // Stores the latitude
  const [placeName, setPlaceName] = useState('');  // Stores the name of the place

  // Reverse geocoding to get the place name from coordinates
  const reverseGeocode = async (lat, lng) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    const data = await response.json();
    setPlaceName(data.display_name);  // Sets the name of the place
    props.displayNameHandeler(placeName ,longitude ,latitude)
  };

  // MapClick component listens for clicks on the map
  const MapClick = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;  // Extracts lat, lng from the click event
        setPosition([lat, lng]);         // Sets the position to the clicked location
        setLatitude(lat);                // Updates latitude
        setLongitude(lng);               // Updates longitude
        reverseGeocode(lat, lng);        // Calls reverse geocoding to get the place name
      }
    });
    return null;
  };

  return (
    <div >
      {/* <button onClick={() => setPosition(null)}>Open Map</button>  */}

      <MapContainer center={[51.505, -0.09]} zoom={13} className='w-[700px] h-[400px]'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  // Loads map tiles from OpenStreetMap
        />
        {position && (
          <Marker position={position}>
            <Popup>
              Place: {placeName} <br /> Latitude: {latitude} <br /> Longitude: {longitude} 
            </Popup>
          </Marker>
        )}
        <MapClick />  {/* Enables click functionality to select a position */}
      </MapContainer>
    </div>
  );

}

export default Location;
