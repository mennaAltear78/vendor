import ImageContainer from "./ImageContainer";
import PropertyDetails from "./PropertyDetails";
import PoliciesEdit from "./PoliciesEdit";
import FacilitiesUpdate from "./FacilitiesUpdate";
import appData from "../../../../config/appData";
import {
  useAddCoverImagesMutation,
  useAddFacilitieMutation,
  useDeleteCoverImageMutation,
  useDeleteFacilityMutation,
  useUpdateCoverImagesMutation,
  useUpdatePrimaryImagesMutation,
} from "../../../../services/HotelApi";
import NoListCointainer from "../../HomeDashboard/comman/NoListCointainer";

const HotelEdit = ({ data }) => {
  const [
    updatePrimaryImage,
    { isLoading: primaryLoading, error: PrimaryError },
  ] = useUpdatePrimaryImagesMutation();
  const [updateCoverImage, { isLoading: CoverLoading, error: CoverError }] =
    useUpdateCoverImagesMutation();
  const [
    DeleteCoverImage,
    { isLoading: DeleteCoverLoading, error: DeleteCoverError },
  ] = useDeleteCoverImageMutation();
  const [AddFacilitie, { isLoading, error }] = useAddFacilitieMutation();
  const [AddCoverImage, { isLoading: AddIsLoading, error: AddError }] =
    useAddCoverImagesMutation();
  const [DeleteFacilitie, { isLoading: l, error: e }] =
    useDeleteFacilityMutation();
  const NumberOfImgToAdd = 200 - data.cover_images.length;
  return (
    <div className="px-[30px] sm:px-4 mr-[15px] sm:mr-0 mt-4  mb-[100px] sm:w-[700px]  w-[330px] bg-white rounded-lg  p-2 shadow-lg">
      {data.primary_images.length > 0 ? (
        <div>
          <ImageContainer
            id={data._id}
            UpdateFunction={updatePrimaryImage}
            isLoading={primaryLoading}
            error={PrimaryError}
            ImagesData={data.primary_images}
            Name="Primary Images"
            Note="(you should add 3 Images)"
            primary
            spaceBetween={220}
          />
          <ImageContainer
            id={data._id}
            AddFunction={AddCoverImage}
            AddIsLoading={AddIsLoading}
            AddError={AddError}
            DeleteFunction={DeleteCoverImage}
            DeleteLoading={DeleteCoverLoading}
            errDelete={DeleteCoverError}
            cover
            UpdateFunction={updateCoverImage}
            isLoading={CoverLoading}
            error={CoverError}
            ImagesData={data.cover_images}
            NumberOfImgToAdd={NumberOfImgToAdd}
            Name="Cover Images"
            Note={`(you can add at most ${data.cover_images.length}/200 images)`}
            spaceBetween={100}
          />
        </div>
      ) : (
        <NoListCointainer name="Hotel images" List={false} link='/HotelImages' />
      )}

      <PropertyDetails data={data} />
      <PoliciesEdit data={data} />
      <FacilitiesUpdate
        id={data._id}
        AddFunction={AddFacilitie}
        DeleteFunction={DeleteFacilitie}
        isLoading={isLoading}
        error={error}
        data={data?.facilities}
        dataDisplayed={appData.facilities}
        title="Facilities"
        labelKey="facilitie"
        valueKey="value"
      />
    </div>
  );
};

export default HotelEdit;
