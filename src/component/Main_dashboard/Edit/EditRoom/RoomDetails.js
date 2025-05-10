import React from "react";
import InputField from "../../CreateYourVendor/common/InputField";

const RoomDetails = () => {
  return (
    <div>
      <div className="sm:flex grap-3">
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
          //   value={PropertyToEdit.description} // Use PropertyToEdit state
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
