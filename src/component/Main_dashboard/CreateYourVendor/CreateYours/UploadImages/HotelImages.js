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
              <div className="font-[Poppins] ml-2 p-3 sm:w-[460px] border border-solid border-[rgba(128,128,128,0.404)]  rounded-[15px] mt-[50px]">
                <b className="text-[22px]">
                  {/* Primary Images */}
                  {props.title}
                  <span className="text-red-500 ml-2 text-[13px]">
                    {props.limits}
                  </span>
                </b>
                <hr className="border border-[rgba(128,128,128,0.404)]" />
                <p>Upload it</p>
                <div className="sm:w-[460px]  h-[120px] border-2 border-dashed border-gray-500 rounded-[5px]  mb-[10px] flex items-center justify-center flex-col">
                  <img
                    src={download}
                    onClick={!props.HotelImages ? onAddImageHandeler : null}
                    className={!props.HotelImages ? "cursor-pointer" : ""}
                  />
                  <p className="font-medium text-gray-500 text-[10px]">
                    Upload From Max 10 MG Per File
                  </p>
                </div>
                <div className=" cursor-pointer  gap-1 mt-5 flex flex-wrap sm:mr-[-100px]">
                  {images.map((image) => (
                    <div key={image.id} className="relative">
                      {image.id <= 200 ? (
                        <div key={image.id}>
                          {!props.HotelImages && (
                            <TrashIcon
                              key={image.id}
                              setImages={setImages}
                              setHotalImages={setHotalImages}
                              images={images}
                              id={image.id}
                              img={images}
                            />
                          )}
                          <ImageDownload
                            name={props.HotelImages ? "primary image" : "Image"}
                            id={image.id}
                            ImageHandeler={(img) => {
                              const file = img.image;
                              setImages((prev) =>
                                prev.map((item) =>
                                  item.id === image.id
                                    ? { ...item, image: file }
                                    : item
                                )
                              );
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                {props.HotelImages && (
                  <>
                    <hr/>
                    <b className="text-[22px]">
                      cover Images
                      <span className="text-red-500 ml-2 text-[13px]">
                        (must upload at least 5 images up to 200)
                      </span>
                    </b>
                    <div className=" gap-1 mt-5 flex flex-wrap sm:mr-[-100px]">
                      <img
                        onClick={onAddImageHandeler}
                        className="hover:animate-bounce cursor-pointer ml-[29px] mr-[20px] mt-[20px]"
                        width="100px"
                        height="100px"
                        src={download}
                      />
                      {imagesHotal.map((image) => (
                        <div key={image.id} className="relative">
                          {image.id <= 200 ? (
                            <div key={image.id}>
                              <TrashIcon
                                key={image.id}
                                setImages={setImages}
                                setHotalImages={setHotalImages}
                                images={images}
                                id={image.id}
                                img={imagesHotal}
                              />
                              <ImageDownload
                                name="cover image"
                                ImageHandeler={(img) => {
                                  setHotalImages((prev) =>
                                    prev.map((item) =>
                                      item.id === image.id
                                        ? { ...item, image: img.image }
                                        : item
                                    )
                                  );
                                }}
                              />
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
