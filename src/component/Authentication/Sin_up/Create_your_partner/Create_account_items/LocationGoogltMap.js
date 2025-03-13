import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 37.7749, lng: -122.4194 };

function LocationGoogleMap(props) {
  const [location, setLocation] = useState(defaultCenter);
  const [address, setAddress] = useState("");

  const handleMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setLocation(newLocation);

    // استدعاء Google Geocoder API للحصول على العنوان
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: newLocation }, (results, status) => {
      if (status === "OK" && results[0]) {
        const formattedAddress = results[0].formatted_address;
        setAddress(formattedAddress);
        props.PlaceHandeler(formattedAddress, newLocation); // يتم الاستدعاء بعد تعيين العنوان
      } else {
        setAddress("Location name not found");
      }
    });
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

      <div>
        <p><strong>Coordinates:</strong> {location.lat}, {location.lng}</p>
        <p><strong>Location Name:</strong> {address}</p>
      </div>
    </LoadScript>
  );
}

export default LocationGoogleMap;
