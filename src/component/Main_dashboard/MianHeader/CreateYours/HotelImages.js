import React, { useContext, useState } from "react";
import MainDashBoardWrapper from "../../../Authentication/regular_components/MainDashBoardWrapper";
import CreateHotelWrapper from "../common/CreateHotelWrapper";
import classes from "./CreateHotel.module.css";
import { useNavigate } from "react-router-dom";
import PopupMessage from "../../../Authentication/Sin_up/Create_your_partner/Create_account_items/PopupMessage";
import gif from "../../../../Assets/413dc7adf0ec89fd9448f62d17a3b029.gif";
import ImageDownload from "../common/ImageDownload";
import download from "../../../../Assets/solar_upload-bold.png";
import AuthContext from "../../../Authentication/Context/auth-context";

function HotelImages(props) {
  const [Done, SetDone] = useState(false);
  const [error, setError] = useState(null);
  const [isPop_up, SetPop_up] = useState(false);
  const [images, setImages] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);
  const [imagesHotal, setHotalImages] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();
    SetPop_up(true);
    if (props.HotelImages) {
      ctx.setHotelImageDone((prevSteps) => [...prevSteps, 3]);
    } else if (!props.HotelImages)
      ctx.setHotelImageDone((prevSteps) => [...prevSteps, 5]);
  };

  const clickPrivHandeler = () => {
    navigate("/CompleteProfie");
    SetDone(true);
  };
  const CancelHandeler = () => {
    navigate("/CompleteProfie");
  };
  const onAddImageHandeler = () => {
    if (images.length <= 200 && !props.HotelImages) {
      setImages([...images, { id: images.length }]);
      console.log(images);
    } else if (imagesHotal.length <= 200 && props.HotelImages) {
      setHotalImages([...imagesHotal, { id: imagesHotal.length }]);
    } else {
      setError("you can't upload more than 200 images");
    }
  };
  const removeImageHandeler = (id, img) => {
    img === images
      ? setImages((prevImages) => prevImages.filter((image) => image.id !== id))
      : setHotalImages((prevImages) =>
          prevImages.filter((image) => image.id !== id)
        );
  };

  return (
    <MainDashBoardWrapper>
      <form
        onSubmit={onClickHandler}
        className="w-[100vw] h-screen ml-[100px] sm:ml-[150px] mb-[400px]"
      >
        <CreateHotelWrapper clickHandeler={clickPrivHandeler}>
          <div className={classes.rating}>
            <b className="text-[22px]">
              {/* Primary Images */}
              {props.title}
              <span className="text-red-500 ml-2 text-[13px]">{props.limits}</span>
            </b>
            <hr />
            <p >Upload it</p>
            <div className={classes.uploadImage}>
              <img
                src={download}
                onClick={!props.HotelImages ? onAddImageHandeler : null}
                className={!props.HotelImages ? "cursor-pointer" : ""}
              />
              <p style={{ color: "gray", fontSize: "10px" }}>
                Upload From Max 10 MG Per File
              </p>
            </div>
            <div className=" cursor-pointer flex gap-1 mt-5 flex-wrap mr-[-100px]">
              {images.map((image) => (
                <div key={image.id} className="relative">
                  {image.id <= 200 ? (
                    <div key={image.id}>
                      {!props.HotelImages && (
                        <p
                          className="absolute top-[-18px] left-[-8px] cursor-pointer  "
                          onClick={() => removeImageHandeler(image.id, images)}
                          key={image.id}
                        >
                                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="hover:animate-bounce absolute top-[-10px] w-6 h-6 text-red-500 "
                   viewBox="0 0 24 24"
                   fill="currentColor"
                 >
                   <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm2 2v8h10v-8H7zM9 2h6v2H9V2z" />
                 </svg>
                        </p>
                        
                      )}
                      <ImageDownload name="primary image" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {props.HotelImages && (
              <>
                {" "}
                <hr />
                <b className="text-[22px]">
                  cover Images
                  <span className="text-red-500 ml-2 text-[13px]">
                    (must upload at least 5 images up to 200)
                  </span>
                </b>
                <div className="flex gap-1 mt-5 flex-wrap mr-[-100px]">
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
                          <p
                            className="absolute top-[-22px] left-[-8px] z-10 cursor-pointer "
                            onClick={() =>
                              removeImageHandeler(image.id, imagesHotal)
                            }
                            key={image.id}
                          >
                                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="absolute top-[-10px] w-6 h-6 text-red-500"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                 >
                   <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm2 2v8h10v-8H7zM9 2h6v2H9V2z" />
                 </svg>
                          </p>
                          <ImageDownload name="cover image" />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {error && <p className="error">{error}</p>}
        </CreateHotelWrapper>
      </form>
      {isPop_up && (
        <PopupMessage
          popMessageCss="popupMain"
          // details="Now, proceed to upload images for the room. 😊📸"
          CancelbtnCss="blueCssS"
          highlighted="The Hotel images has been uploaded successfully!"
          messageImg={gif}
          // cancel={true}
          btnCss="blueCss"
          btnMessage2="Go to"
          btnMessage1="continue"
          cancelHandeler={CancelHandeler}
          close={true}
          handleTogglePopup={CancelHandeler}
        />
      )}
    </MainDashBoardWrapper>
  );
}

export default HotelImages;
