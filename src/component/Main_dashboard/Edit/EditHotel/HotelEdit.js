import React from "react";
import ImageContainer from "./ImageContainer";
import PropertyDetails from "./PropertyDetails";
import InputField from "../../CreateYourVendor/common/InputField";
import PoliciesEdit from "./PoliciesEdit";
import FacilitiesUpdate from "./FacilitiesUpdate";
import appData from "../../../../config/appData";

const HotelEdit = ({ data }) => {
  // console.log("data is ", data.cover_images.length );
  const  NumberOfImgToAdd=200-data.cover_images.length
  return (
    <div className="px-[30px] sm:px-4 mr-[15px] sm:mr-0 mt-4  mb-[100px] sm:w-[700px]  w-[330px] bg-white rounded-lg  p-2 shadow-lg">
      <ImageContainer idHotel={data._id} ImagesData={data.primary_images} Name="Primary Images" Note="(you should add 3 Images)" primary={true} spaceBetween={220}/>
      <ImageContainer idHotel={data._id} ImagesData={data.cover_images} NumberOfImgToAdd={NumberOfImgToAdd}  Name="Cover Images" Note={`(you can add at most ${data.cover_images.length}/200 images)`} spaceBetween={100}/>
      <PropertyDetails data={data} />
      <PoliciesEdit data={data} /> 
      <FacilitiesUpdate data={data} dataDisplayed={appData.facilities} title='Facilities' labelKey = "facilitie" valueKey = "value" />
    </div>
  );
};

export default HotelEdit;
