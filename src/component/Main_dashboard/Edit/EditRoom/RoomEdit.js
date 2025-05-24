import ImageContainer from '../../Edit/EditHotel/ImageContainer'
import RoomDetails from './RoomDetails';
import FacilitiesUpdate from '../EditHotel/FacilitiesUpdate';
import appData from '../../../../config/appData';
import { useAddRoomImagesMutation, 
  useAddRoomFacilitiesMutation,useDeleteRoomFacilitiesMutation,useDeleteBathRoomFacilitiesMutation,
  useAddRoomViewFacilitiesMutation, useAddBathRoomFacilitiesMutation,useDeleteRoomImageMutation, 
  useDeleteViewFacilitiesMutation, useUpdateRoomImagesMutation } from '../../../../services/PostApi';

const RoomEdit = ({ data = [] }) => {
const NumberOfImgToAdd = 200 - data.data.room.images.length

//Facilities
  //Add
  const [ViewFacilities, { isLoading: viewLoad, error: viewError }] = useAddRoomViewFacilitiesMutation();
  const [RoomFacilities, { isLoading: RoomLoad, error: RoomError }] = useAddRoomFacilitiesMutation();
  const [AddBathRoom, { isLoading:BathRoomLoading, error: BathRoomError }] = useAddBathRoomFacilitiesMutation();

 //Remove
 const [ DeleteViewFacilities, { isLoading: DeleteViewLoading, error: DeleteViewError },] = useDeleteViewFacilitiesMutation();
 const [ DeleteRoomFacilities, { isLoading:removeRoomLoad, error: RemoveRoomError },] = useDeleteRoomFacilitiesMutation();
 const [ DeleteBathRoomFacilities, { isLoading: DeleteBathRoomLoading, error:DeleteBathRoomError},] = useDeleteBathRoomFacilitiesMutation();

 //Image Room 
 const [DeleteRoomImage,{ isLoading: DeleteImageLoading, error: DeleteImageError }, ] = useDeleteRoomImageMutation();
 const [AddRoomImages, { isLoading: AddImagesLoading, error: AddImagesError }] = useAddRoomImagesMutation();
 const [updateRoomImages, { isLoading:UpdateLoading, error:UpdateImagesError }] = useUpdateRoomImagesMutation();



  
  return (
    <div className="px-[30px] sm:px-4 mr-[15px] sm:mr-0 mt-4  mb-[100px] sm:w-[700px]  w-[330px] bg-white rounded-lg  p-2 shadow-lg">

      <ImageContainer id={data.data.room._id} ImagesData={data.data.room.images} NumberOfImgToAdd={NumberOfImgToAdd}
        AddFunction={AddRoomImages}  AddLoading={AddImagesLoading} AddError={AddImagesError}
        DeleteFunction={DeleteRoomImage} DeleteLoading={DeleteImageLoading}   DeleteError={DeleteImageError} 
        UpdateFunction={updateRoomImages} UpdateLoading={UpdateLoading}   UpdateError={UpdateImagesError} 
        Name="Images" Note={`(you can add at most ${data.data.room.images.length}/200 images)`} spaceBetween={100} />

      <RoomDetails data={data.data.room} />
      
      {/* view */}
      <FacilitiesUpdate Room id={data.data.room._id} AddFunction={ViewFacilities} DeleteFunction={DeleteViewFacilities}
        isLoading={viewLoad} error={viewError}   deleteLoad={DeleteViewLoading} deleteError={DeleteViewError} view 
        data={data.data.room.view} dataDisplayed={appData.RoomViews} title='Room Views' labelKey="value" valueKey="value" />

      {/* Facilities */}
      <FacilitiesUpdate Room id={data.data.room._id} AddFunction={RoomFacilities} DeleteFunction={DeleteRoomFacilities}
        isLoading={RoomLoad} error={RoomError} deleteLoad={removeRoomLoad} deleteError={RemoveRoomError} facilitie
        data={data.data.room.facilities}  dataDisplayed={appData.RoomFacilitie} title='Room Facilitie' />
        
     {/* bathroom */}
      <FacilitiesUpdate Room  id={data.data.room._id} AddFunction={AddBathRoom} DeleteFunction={DeleteBathRoomFacilities}
        isLoading={BathRoomLoading} error={BathRoomError} deleteLoad={DeleteBathRoomLoading} deleteError={DeleteBathRoomError} bathroom_facilities
      data={data.data.room.available_in_your_own_bathroom} dataDisplayed={appData.BathroomFacilities} title='Bathroom Facilities' />
    </div>
  );
};

export default RoomEdit;