import { useContext, useEffect, useState } from "react";
import MainDashBoardWrapper from "../../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../../common/CreateHotelWrapper";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import ImageDownload from "../../common/ImageDownload";
import download from "../../../../../Assets/solar_upload-bold.png";
import api from "../../../../../services/axiosInstance";
import CreateCardContainer from "../../common/CreateCardContainer";
import TrashIcon from "../../common/TrashIcon";
import Error from "../../common/Error";
import { AuthContext } from "../../../../Authentication/Context/auth-context";
import ImageContianer from "./ImageContianer";

function HotelImages(props) {
  const [images, setImages] = useState([
    { id: 0, image: "" },
    { id: 1, image: "" },
    { id: 2, image: "" },
  ]);
  const [imagesHotal, setHotalImages] = useState([
    { id: 0, image: "" },
    { id: 1, image: "" },
    { id: 2, image: "" },
    { id: 3, image: "" },
    { id: 4, image: "" },
  ]);

  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Hotel Images";
  }, [images]);

  const onAddImageHandeler = () => {
    if (images.length <= 200 && !props.HotelImages) {
      setImages([...images, { id: images.length, image: "" }]);
    } else if (imagesHotal.length <= 200 && props.HotelImages) {
      setHotalImages([...imagesHotal, { id: imagesHotal.length, image: "" }]);
    } else {
      setError("you can't upload more than 200 images");
    }
  };
  const handleImageUpload = async (e) => {
    e.preventDefault();
    setError(null);

    let primaryImages = images
      .filter((img) => img.image !== "")
      .map((img) => img.image);
    let coverImages = imagesHotal
      .filter((img) => img.image !== "")
      .map((img) => img.image);

    const ImagesFormData = new FormData();
    primaryImages.forEach((img) => ImagesFormData.append("images", img));

    const formData = new FormData();
    primaryImages.forEach((img) => formData.append("primary_images", img));
    coverImages.forEach((img) => formData.append("cover_images", img));

    if (props.HotelImages) {
      if (primaryImages.length < 3 || coverImages.length < 5) {
        setError(
          "You must upload at least 5 images for both primary and cover images."
        );
        return;
      }
      setIsLoading(true);
      try {
        const response = await api.post(
          `hotel/68051c9b07cbc0528dc7eafd/upload-images`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        ctx.setHotelImageDone((prevSteps) => [...prevSteps, 2]);
        SetPop_up(true);
      } catch (error) {
        setError("Failed to upload images. Please try again.");
      }
    } else {
      if (primaryImages.length < 3) {
        setError("Please upload at least 5 images.");
        return;
      }
      setIsLoading(true);
      try {
        const response = await api.post(
          `rooms/${ctx.RoomId}/upload-images`,
          ImagesFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        ctx.setHotelImageDone((prevSteps) => [...prevSteps, 4]);
        SetPop_up(true);
      } catch (error) {
        setError(
          `Failed to upload images. Please try again. ${error.response?.data?.message}`
        );
      }
    }
    setIsLoading(false);
  };
  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={handleImageUpload}
        className="w-[90vw] h-screen  mb-[700px] mt-10">

           <div className="sm:w-[88vw] w-[100vw] mt-10">
          <CreateHotelWrapper
            clickHandeler={() => navigate(-1)}
            isLoading={isLoading}
          >
            <CreateCardContainer>

              <ImageContianer title limits imagesHotal={imagesHotal} HotelImages={HotelImages} onAddImageHandeler={onAddImageHandeler} images={images} setImages={setImages} setHotalImage={setHotalImages}/>
            </CreateCardContainer>
               <Error error={error} />
          </CreateHotelWrapper>
        </div>
      </form>
      {isPop_up && (
        <PopupMessage
          popMessageCss="popupMain"
          // details="Now, proceed to upload images for the room. 😊📸"
          CancelbtnCss="blueCssS"
          highlighted="The Hotel images has been uploaded successfully!"
          messageImg={gif}
          btnCss="blueCss"
          btnMessage2="Go to"
          btnMessage1="continue"
          cancelHandeler={() => navigate("/CompleteProfie")}
          close={true}
          handleTogglePopup={() => navigate("/CompleteProfie")}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default HotelImages;
