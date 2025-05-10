import React from 'react';
import ImageContainer from '../../Edit/EditHotel/ImageContainer'
import RoomDetails from './RoomDetails';
import FacilitiesUpdate from '../EditHotel/FacilitiesUpdate';
import appData from '../../../../config/appData';
const RoomEdit = ({data=[]}) => {
    // console.log(data,"data");
const NumberOfImgToAdd=0
  return (
    <div className="px-[30px] sm:px-4 mr-[15px] sm:mr-0 mt-4  mb-[100px] sm:w-[700px]  w-[330px] bg-white rounded-lg  p-2 shadow-lg">
        <ImageContainer idHotel={data._id} ImagesData={data.cover_images} NumberOfImgToAdd={NumberOfImgToAdd}  Name="Room Images" Note={`(you can add at most ${NumberOfImgToAdd } images)`} spaceBetween={100}/>
         <RoomDetails/>
         <FacilitiesUpdate data={data=[]} dataDisplayed={appData.RoomViews} title='Room Views' labelKey = "value" valueKey = "value"/>
         <FacilitiesUpdate data={data=[]} dataDisplayed={appData.RoomFacilitie} title='Room Facilitie'/>
         <FacilitiesUpdate data={data=[]} dataDisplayed={appData.BathroomFacilities} title='Bathroom Facilities'/>
 </div>
  );
};

export default RoomEdit;