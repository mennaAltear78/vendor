import React from "react";
import InputField from "../../CreateYourVendor/common/InputField";
import Menu from "../../CreateYourVendor/common/Menue";
import appData from "../../../../config/appData";

const RoomDetails = ({data}) => {
  const smokingPolicyOptions = appData.smokingPolicy.map((item) => ({
    value: item.value,
    label: item.policy,
  }));
    const RoomType = appData.RoomType.map((item) => ({
    value: item.value,
    label: item.policy,
  }));
  return (
    <div>
      <div className="sm:flex grap-4">
   
          <InputField
            label={"Room Name"}
              value={data.name} // Use PropertyToEdit state
            name="name" // Add name attribute for identification
            className={"w-[90%]"}
            //   onChange={onchangeHandeler}
          />
         <Menu
              label="Room Type"
              // value={data.smoking}
              // onChange={setSelectedPetOption}
              options={appData.RoomType}
              placeholder={data.type || ""}
              isSearchable={false}
            />
         <Menu
              label="Smoking Policy"
              // value={data.smoking}
              // onChange={setSelectedPetOption}
              options={smokingPolicyOptions}
              placeholder={data.smoking_policy || ""}
              isSearchable={false}
            />
      </div>
      <div className="sm:flex grap-1 mt-[10px]">
        {Array.from({ length: 3 }).map(() => (
          <InputField
            label={"Property Name"}
            //   value={PropertyToEdit.name} // Use PropertyToEdit state
            name="name" // Add name attribute for identification
            className={"w-[90%]"}
            //   onChange={onchangeHandeler}
          />
        ))}
      </div>
      <div>
        <InputField
          label={"Property Name"}
          //   value={PropertyToEdit.name} // Use PropertyToEdit state
          name="name" // Add name attribute for identification
          className={"w-[98%]"}
          //   onChange={onchangeHandeler}
        />
        <InputField
          label={"description"}
            value={data.description} // Use PropertyToEdit state
          name="description" // Add name attribute for identification
          className="w-[98%] h-[60px] disabled:bg-[#4947470c] mt-[20px]"
          textarea={true}
          //   onChange={onchangeHandeler}
        />
      </div>
    </div>
  );
};

export default RoomDetails;
