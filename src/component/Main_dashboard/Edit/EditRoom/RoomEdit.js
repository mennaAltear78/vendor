import React from 'react';
import ImageContainer from '../../Edit/EditHotel/ImageContainer'
import RoomDetails from './RoomDetails';
import FacilitiesUpdate from '../EditHotel/FacilitiesUpdate';
import appData from '../../../../config/appData';
import { useAddRoomImagesMutation, useAddRoomFacilitiesMutation,useDeleteRoomFacilitiesMutation,useDeleteBathRoomFacilitiesMutation, useAddRoomViewFacilitiesMutation, useAddBathRoomFacilitiesMutation,useDeleteRoomImageMutation, useDeleteViewFacilitiesMutation, useUpdateRoomImagesMutation } from '../../../../services/PostApi';
const RoomEdit = ({ data = [] }) => {

  //Facilities
  //Add
  const [ViewFacilities, { isLoading: l, error: e }] = useAddRoomViewFacilitiesMutation();
  const [RoomFacilities, { isLoading: ll, error: ee }] = useAddRoomFacilitiesMutation();
  const [AddBathRoom, { isLoading: Loading, error: Error }] = useAddBathRoomFacilitiesMutation();
 //Remove
 const [ DeleteViewFacilities, { isLoading: D, error: Del },] = useDeleteViewFacilitiesMutation();
 const [ DeleteRoomFacilities, { isLoading: Dw, error: Delw },] = useDeleteRoomFacilitiesMutation();
 const [ DeleteBathRoomFacilities, { isLoading: Dqqq, error: q },] = useDeleteBathRoomFacilitiesMutation();
 //Image Room 
 const [DeleteRoomImage,{ isLoading: DeleteRoomLoading, error: DeleteRoomError }, ] = useDeleteRoomImageMutation();
 const [AddRoomImages, { isLoading: RoomImagesLoading, error: RoomImagesError }] = useAddRoomImagesMutation();
 const [updateRoomImages, { isLoading, error }] = useUpdateRoomImagesMutation();


  const NumberOfImgToAdd = 200 - data.data.room.images.length
  return (
    <div className="px-[30px] sm:px-4 mr-[15px] sm:mr-0 mt-4  mb-[100px] sm:w-[700px]  w-[330px] bg-white rounded-lg  p-2 shadow-lg">
      <ImageContainer id={data.data.room._id} ImagesData={data.data.room.images} NumberOfImgToAdd={NumberOfImgToAdd}
        AddFunction={AddRoomImages} AddIsLoading={RoomImagesLoading} AddError={RoomImagesError}
        DeleteFunction={DeleteRoomImage} DeleteLoading={DeleteRoomLoading} errDelete={DeleteRoomError}
        UpdateFunction={updateRoomImages} isLoading={isLoading} error={error}
        Name="Cover Images" Note={`(you can add at most ${data.data.room.images.length}/200 images)`} spaceBetween={100} />

      <RoomDetails data={data.data.room} />
      <FacilitiesUpdate Room id={data.data.room._id} AddFunction={ViewFacilities} DeleteFunction={DeleteViewFacilities}
        isLoading={l} error={e} view
        data={data.data.room.view} dataDisplayed={appData.RoomViews} title='Room Views' labelKey="value" valueKey="value" />
        
      <FacilitiesUpdate Room id={data.data.room._id} AddFunction={RoomFacilities} DeleteFunction={DeleteRoomFacilities}
        isLoading={l} error={e} facilitie
        data={data.data.room.facilities}  dataDisplayed={appData.RoomFacilitie} title='Room Facilitie' />
     
      <FacilitiesUpdate Room  id={data.data.room._id} AddFunction={AddBathRoom} DeleteFunction={DeleteBathRoomFacilities}
        isLoading={l} error={e} bathroom_facilities
      data={data.data.room.available_in_your_own_bathroom} dataDisplayed={appData.BathroomFacilities} title='Bathroom Facilities' />
    </div>
  );
};

export default RoomEdit;