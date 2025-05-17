import React, { useEffect, useRef, useState } from "react";
import Scroller from "../../HomeDashboard/comman/Scroller";
import download from "../../../../Assets/solar_upload-bold.png";
import ImageCard from "./ImageCard";
import Button from "../../../Authentication/regular_components/Button";
import { useAddCoverImagesMutation } from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";
import { v4 as uuidv4 } from "uuid";

const ImageViewSection = ({
  ImagesData,
  Name,
  Note,
  primary,
  spaceBetween,
  idHotel,
  NumberOfImgToAdd,
}) => {
  const fileInputRef = useRef(null);

  const [edit, SetEdit] = useState(false);
  const [Images, SetImages] = useState([]);
  const [AddedImages, SetAddImages] = useState([]);

  const [AddCoverImage, { isLoading, error }] = useAddCoverImagesMutation();

  // Initialize images when ImagesData changes
  useEffect(() => {
    if (ImagesData) {
      const initializedImages = ImagesData.map((image, index) => ({
        id: uuidv4(), // Generate unique ID
        image,
        originalIndex: index, // Store original index
      }));
      SetImages(initializedImages);
    }
  }, [ImagesData]); // Run only when `ImagesData` changes

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        SetAddImages([...AddedImages, file]);
      };
      reader.readAsDataURL(file);
    }
  };

  const AddImagesHanadeler = () => {
    const formData = new FormData();
    AddedImages.forEach((file) => {
      formData.append("cover_images", file);
    });

    AddCoverImage({ id: idHotel, body: formData })
      .unwrap()
      .then((response) => {
        console.log("AddCoverImage response:", response);
        SetAddImages([]); // Clear AddedImages after successful upload
      })
      .catch((err) => console.error("AddCoverImage error:", err));
  };

  const removeImageHandler = (id) => {
    SetImages((prevImages) => {
      const filteredImages = prevImages.filter((img) => img.id !== id);
      return filteredImages;
    });
  };

  return (
    <div>
      <div className="flex">
        <div className="flex w-full items-center">
          <b className="text-[20px] w-full ">{Name}</b>
          <span className="text-[red] text-[10px] w-full sm:ml-[-50px]">
            {Note}
          </span>
        </div>

        <div className="w-full flex justify-end mb-[10px] mt-[10px]">
          <span
            className="material-symbols-outlined text-[15px] w-4 h-4 p-1 rounded-lg mb-[-10px] bg-[#0000ff2a] mt-[-9px] text-[blue] cursor-pointer"
            onClick={() => SetEdit(!edit)}
          >
            edit
          </span>
        </div>
      </div>

      <Scroller
        key={ImagesData.length} // Force re-render when Images changes
        spaceBetween={spaceBetween}
        numberCardShown={4}
        items={Images.map((img) => ({
          idHotel: idHotel,
          index: img.originalIndex, // Use the original index for API operations
          img: img.image,
          id: img.id, // Use the unique ID from Images state
          RemoveHandler: removeImageHandler, // Pass the remove handler
          edit: edit,
          primary: primary,
          NumberOfImgToAdd: NumberOfImgToAdd,
        }))}
        Component={ImageCard}
        hightdiv="h-[150px]"
      />

      {NumberOfImgToAdd > 0 && edit && !primary ? (
        <div className="flex justify-between mb-[20px]">
          <div className="border border-dashed border-[gray] w-[70px] flex rounded-lg justify-center">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <img
              src={download}
              onClick={() => fileInputRef.current.click()}
              className="cursor-pointer h-[50px] w-[50px]"
              alt="Folder Icon"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error?.data?.message || "Failed to update property"}
            </div>
          )}
          <div className="flex justify-end mb-[10px]  ">
            {isLoading ? (
              <SpinnerLoading dimentians="h-[30px] ml-[100px] text-[blue]" />
            ) : primary === false || AddedImages.length === 0 ? null : (
              <Button
                className="border-none rounded-[8px] h-[30px] w-[60px] bg-[blue] cursor-pointer text-white "
                type="button"
                name={
                  <div className="flex gap-1 items-center">
                    <span className="material-symbols-outlined text-[15px] mt-[-9px]">
                      add
                    </span>
                    <p className="text-[15px] mt-[4px]">Add</p>
                  </div>
                }
                onClickAction={AddImagesHanadeler}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageViewSection;
