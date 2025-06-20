import React, { useEffect, useState } from 'react';
import InputField from '../../Main_dashboard/CreateYourVendor/common/InputField';
import Menu from '../../Main_dashboard/CreateYourVendor/common/Menue';
import LocationGoogleMap from '../../Authentication/Sin_up/Create_your_partner/Create_account_items/LocationGoogltMap';

const currencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'EGP', label: 'EGP' },
  { value: 'GBP', label: 'GBP' },
];

function LocationInformation({ formData, handleNestedInputChange }) {
  const inputClass = 'w-[98%] h-[40px] disabled:bg-[#4947470c]'; // Increased height for usability
  const [launchLocation, setLaunchLocation] = useState({
    latitude: formData?.launch_from?.latitude || 0,
    longitude: formData?.launch_from?.longitude || 0,
  });
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: formData?.destination?.latitude || 0,
    longitude: formData?.destination?.longitude || 0,
  });

  // Sync local state with formData if it changes externally
  useEffect(() => {
    setLaunchLocation({
      latitude: formData?.launch_from?.latitude || 0,
      longitude: formData?.launch_from?.longitude || 0,
    });
    setDestinationLocation({
      latitude: formData?.destination?.latitude || 0,
      longitude: formData?.destination?.longitude || 0,
    });
  }, [formData]);

  // // Debug state changes
  // useEffect(() => {
  //   console.log('LaunchLocation:', launchLocation);
  //   console.log('DestinationLocation:', destinationLocation);
  // }, [launchLocation, destinationLocation]);

  const handleLaunchLocation = (location, city, country, lng, lat) => {
    const newLocation = { latitude: lat, longitude: lng };
    setLaunchLocation(newLocation);
    // Sync with formData
    handleNestedInputChange('launch_from', 'latitude',lng );
    handleNestedInputChange('launch_from', 'longitude', lat);
  };

  const handleDestinationLocation = (location, city, country, lng, lat) => {
    const newLocation = { latitude: lat, longitude: lng };
    setDestinationLocation(newLocation);
    // Sync with formData
    handleNestedInputChange('destination', 'latitude',lng );
    handleNestedInputChange('destination', 'longitude', lat);
  };
//console.log(formData?.destination.description,"formData?.destination?.description.en");

  return (
    <div className="space-y-6">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
          <span className="text-orange-600 text-sm font-bold">4</span>
        </div>
        Location Information
      </h3>

      {/* Launch Location */}
      <LocationGoogleMap
        nobg
        styling={{
          width: '100%',
          height: '70px',
          borderRadius: '10px',
        }}
        setlocation={handleLaunchLocation}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          editt={false}
          type="number"
          required
          className={inputClass}
          label="Launch Latitude *"
          value={launchLocation.latitude}
          onChange={(e) =>
            handleNestedInputChange('launch_from', 'latitude', parseFloat(e.target.value))
          }
        />
        <InputField
          editt={false}
          type="number"
          required
          className={inputClass}
          label="Launch Longitude *"
          value={launchLocation.longitude}
          onChange={(e) =>
            handleNestedInputChange('launch_from', 'longitude', parseFloat(e.target.value))
          }
        />
      </div>

      {/* Destination Name */}
      <InputField
        editt={false}
        required
        type="text"
        placeholder="Enter destination name"
        className={inputClass}
        label="Destination Name *"
        value={formData?.destination?.name || ''}
        onChange={(e) =>
          handleNestedInputChange('destination', 'name', e.target.value)
        }
      />

      {/* Destination Info */}
      <LocationGoogleMap
        nobg
        styling={{
          width: '100%',
          height: '70px',
          borderRadius: '10px',
        }}
        setlocation={handleDestinationLocation}
      />
      <div className="grid md:grid-cols-3 gap-6">
        <InputField
          editt={false}
          type="number"
          required
          step="any"
          className={inputClass}
          label="Destination Latitude *"
          value={destinationLocation.latitude}
          onChange={(e) =>
            handleNestedInputChange('destination', 'latitude', parseFloat(e.target.value))
          }
        />
        <InputField
          editt={false}
          type="number"
          required
          step="any"
          className={inputClass}
          label="Destination Longitude *"
          value={destinationLocation.longitude || 0}
          onChange={(e) =>
            handleNestedInputChange('destination', 'longitude', parseFloat(e.target.value))
          }
        />
 
        <Menu
          editt={false}
          label="Local Currency *"
          required
          value={
            currencyOptions.find(
              (option) => option.value === formData?.destination?.local_currency
            ) || null
          }
          onChange={(selectedOption) =>
            handleNestedInputChange('destination', 'local_currency', selectedOption?.value)
          }
          options={currencyOptions}
          isSearchable={false}
        />
      </div>            
       <InputField
        editt={false}
        required
        type="text"
        placeholder="Enter destination description"
        className={inputClass}
        label="Destination Description *"
        value={formData?.destination?.description.en || ''}
        onChange={(e) =>
          handleNestedInputChange('destination', 'description', {en:e.target.value})
        }
      />
    </div>
  );
}

export default LocationInformation;
