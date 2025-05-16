import React, { useState, useEffect } from "react";
import InputField from "../../CreateYourVendor/common/InputField";
import Button from "../../../Authentication/regular_components/Button";
import { useUpdatePropertiesMutation } from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const PropertyDetails = ({ data, edit }) => {
  const id = data._id;
  const [PropertyToEdit, setPropertyToEdit] = useState({});
  const [updateProperty, { isLoading, error }] = useUpdatePropertiesMutation();

  // Initialize PropertyToEdit with data when the component mounts or data changes
  useEffect(() => {
    if (data) {
      setPropertyToEdit({
        name: data?.name || "",
        description: data?.description || "",
        ratings_average: data?.ratings_average || "",
        type: data?.type || "",
        smoking_policy: data?.policies?.smoking_policy || "",
      });
    }
  }, [data]);

  const onchangeHandeler = (e) => {
    const { name, value } = e.target;
    setPropertyToEdit({ ...PropertyToEdit, [name]: value });
  };

  return (
    <div>
      <div>
        <b className="text-[20px]">Property Details</b>
        <InputField
          label={"Property Name"}
          value={PropertyToEdit.name} // Use PropertyToEdit state
          name="name" // Add name attribute for identification
          className={"w-[98%]"}
          onChange={onchangeHandeler}
        />
        <InputField
          label={"description"}
          value={PropertyToEdit.description} // Use PropertyToEdit state
          name="description" // Add name attribute for identification
          className="w-[98%] h-[60px] disabled:bg-[#4947470c] mt-[20px]"
          textarea={true}
          onChange={onchangeHandeler}
        />
        {error && (
          <div className="text-red-500 text-sm">
            {error?.data?.message || "Failed to update property"}
          </div>
        )}
        <div className="flex justify-end mb-[10px] mt-[10px]">
          {isLoading ? (
            <SpinnerLoading dimentians="h-6 w-6 ml-[130px]" />
          ) : (
            <Button
              className="border-none rounded-[8px] mt-[-3px]  h-[30px] w-[60px] bg-[blue] cursor-pointer text-white"
              type="button"
              name={
                <div className="flex gap-1  items-center ">
                  <span className="material-symbols-outlined text-[15px] mt-[-9px] ">
                    edit
                  </span>
                  <p className="text-[15px] mt-[4px]">Edit</p>
                </div>
              }
              onClickAction={() => {
                const data = {
                  name: PropertyToEdit.name,
                  description: { en: PropertyToEdit.description },
                };
                updateProperty({ id: id, data });
              }}
            />
          )}
        </div>

        <InputField
          label={"Rating"}
          value={PropertyToEdit.ratings_average} // Use PropertyToEdit state
          name="ratings_average" // Add name attribute for identification
          className={"w-[98%]"}
          onChange={onchangeHandeler}
        />
        <div className="flex gap-[15px] mb-[20px]">
          <InputField
            label={"Property Type"}
            value={PropertyToEdit.type} // Use PropertyToEdit state
            name="type" // Add name attribute for identification
            className={"w-[98%]"}
            onChange={onchangeHandeler}
          />

        </div>
      </div>
      <div className="flex justify-end mb-[10px]">
        <Button
          className="border-none rounded-[8px] mt-[-3px]  h-[30px] w-[60px] bg-[blue] cursor-pointer text-white"
          type="button"
          name={
            <div className="flex gap-1  items-center ">
              <span className="material-symbols-outlined text-[15px] mt-[-9px] ">
                edit
              </span>
              <p className="text-[15px] mt-[4px]">Edit</p>
            </div>
          }
          onClickAction={() => {
            console.log("Updated Property Details:", PropertyToEdit);
          }}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
