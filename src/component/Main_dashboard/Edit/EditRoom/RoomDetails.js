import React, { useEffect, useState } from "react";
import InputField from "../../CreateYourVendor/common/InputField";
import Menu from "../../CreateYourVendor/common/Menue";
import appData from "../../../../config/appData";
import Button from "../../../Authentication/regular_components/Button";
import { useUpdateRoomPropertiesMutation } from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const RoomDetails = ({ data }) => {
  console.log(data._id);
  const id=data._id
   const [updateRoomProperties, { isLoading, error }] =
       useUpdateRoomPropertiesMutation()
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    type: "",
    price_per_night: "",
    capacity: { adults: 0, children: 0 },
    available_rooms: "",
    description: "",
    status: "Available",
    smoking_policy: "",
    size: "",
    bed: {
      type: {
        ar: "سرير مفرد"
      },
      count: 3
    }
  });

  useEffect(() => {
    if (data) {
      setRoomDetails({
        name: data.name || "",
        type:{en: data.type || ""},
        price_per_night: data.price_per_night || "",
        capacity: {
          adults: data.capacity?.adults || 0,
          children: data.capacity?.children || 0
        },
        available_rooms: data.available_rooms || "",
        description:{en: data.description || ""},
        status:{en: "Available"},
        smoking_policy:{en: data.smoking_policy || ""},
        size: {value:data.size?.value || ""},
        // bed: {
        //   type: { ar: "سرير مفرد" },
        //   count: 3
        // }
      });
    }
  }, [data]);

  const smokingPolicyOptions = appData.smokingPolicy.map((item) => ({
    value: item.policy,
    label: item.policy,
  }));

  // Handle input changes
  const handleChange = (key, value) => {
    setRoomDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCapacityChange = (key, value) => {
    setRoomDetails((prev) => ({
      ...prev,
      capacity: {
        ...prev.capacity,
        [key]: value,
      }
    }));
  };

  return (
    <div>
      <div className="sm:flex gap-4">
        <InputField
          label="Room Name"
          value={roomDetails.name}
          name="name"
          className="w-[90%]"
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <Menu
          label="Room Type"
          value={roomDetails.type.en}
          placeholder={roomDetails.type.en}
          options={appData.RoomType}
          onChange={(selected) => handleChange("type", { en: selected.value })}
          isSearchable={false}
        />

        <Menu
          label="Smoking Policy"
          value={roomDetails.smoking_policy.en}
          options={smokingPolicyOptions}
          placeholder={roomDetails.smoking_policy.en}
          onChange={(selected) =>
            handleChange("smoking_policy", { en: selected.value })
          }
          isSearchable={false}
        />
      </div>

      <div className="sm:flex gap-4 mt-[10px]">
        <InputField
          label="Available Rooms"
          value={roomDetails.available_rooms}

          name="available_rooms"
          type="number"
          className="w-[90%]"
          onChange={(e) => handleChange("available_rooms", e.target.value)}
        />

        <InputField
          label="Price Per Night"
          value={roomDetails.price_per_night}
          name="price_per_night"
          type="number"
          className="w-[90%]"
          onChange={(e) => handleChange("price_per_night", e.target.value)}
        />

        <InputField
          label="Size (m²)"
          value={roomDetails.size.value}
          name="size"
          type="number"
          className="w-[90%]"
          onChange={(e) => handleChange("size", { value: e.target.value })}
        />
      </div>

      <div className="sm:flex gap-4 mt-[10px]">
        <InputField
          label="Number of Adults"
          value={roomDetails.capacity.adults}
          name="adults"
          type="number"
          className="w-[93%]"
          onChange={(e) => handleCapacityChange("adults", e.target.value)}
        />

        <InputField
          label="Number of Children"
          value={roomDetails.capacity.children}
          name="children"
          type="number"
          className="w-[93%]"
          onChange={(e) => handleCapacityChange("children", e.target.value)}
        />
      </div>

      <div>
        <InputField
          label="Description"
          value={roomDetails.description.en}
          name="description"
          textarea={true}
          className="w-[98%] h-[60px] disabled:bg-[#4947470c] mt-[20px]"
          onChange={(e) => handleChange("description", { en: e.target.value })}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error?.data?.message || "Failed to update property"}
        </div>
      )}
            <div className="flex justify-end mt-[10px]">
        {isLoading ? (
          <SpinnerLoading dimentians="h-4 w-4 text-[blue] ml-[130px] mt-[10px]" />
        ) : (
          <Button
            className="border-none rounded-[8px] mt-[-3px] h-[30px] w-[60px] bg-[blue] cursor-pointer text-white"
            type="button"
            name={
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-[15px] mt-[-9px]">
                  edit
                </span>
                <p className="text-[15px] mt-[4px]">Edit</p>
              </div>
            }
            onClickAction={() => {
              // console.log("Updated Room Details:", roomDetails);
              updateRoomProperties({id,body:roomDetails})
            }}
          />
        )}
      </div>
  
    </div>
  );
};

export default RoomDetails;
