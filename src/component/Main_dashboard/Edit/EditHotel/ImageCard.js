import { useState, useEffect } from "react";
import {
  useDeleteCoverImageMutation,
  useUpdateCoverImagesMutation,
  useUpdatePrimaryImagesMutation,
} from "../../../../services/PostApi";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const ImageCard = ({
  img,
  RemoveHandler,
  id,
  edit,
  primary,
  index,
  idHotel,
  NumberOfImgToAdd,
}) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(img);
  const [isDeleting, setIsDeleting] = useState(false);

  const [updatePrimaryImage, { isLoading: primaryLoading, error }] =
    useUpdatePrimaryImagesMutation();
  const [updateCoverImage, { isLoading: CoverLoading, error: CoverError }] =
    useUpdateCoverImagesMutation();
  const [
    DeleteCoverImage,
    { isLoading: DeleteCoverLoading, error: DeleteCoverError },
  ] = useDeleteCoverImageMutation();

  // updatePrimary
  const updatePrimaryImageHandler = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("imageIndex", Number(index));
    formData.append("primary_image", file);
    updatePrimaryImage({ id: idHotel, body: formData });
    setFile(null);
  };
  
  // updateCoverImages
  const updateCoverImageHandler = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("imageIndex", index);
    formData.append("cover_images", file);
    updateCoverImage({ id: idHotel, body: formData });
    setFile(null);
  };
  
  // FIXED: Changed to call the UI update and API
  const DeleteCoverImageHandler = () => {
    if (isDeleting) return; // Prevent multiple clicks
    setIsDeleting(true);
    
    console.log(`Deleting image with id=${id}, index=${index}`);
    
    // Prepare the API payload
    const DeletedImages = { imagesIndexes: [index] };
    
    // First call the local state update (UI)
    RemoveHandler(id);
    
    // Then call the API
    DeleteCoverImage({ id: idHotel, body: DeletedImages })
      .unwrap()
      .then((response) => {
        console.log("DeleteCoverImage API success:", response);
      })
      .catch((err) => {
        console.error("DeleteCoverImage API error:", err);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile instanceof File) {
      setFile(selectedFile);
      const newImageUrl = URL.createObjectURL(selectedFile);
      setImage(newImageUrl);
    } else {
      console.error("Invalid file selected:", selectedFile);
      setFile(null);
    }
  };

  useEffect(() => {
    return () => {
      if (image && typeof image === 'string' && image.startsWith("blob:")) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div>
      <div className="flex gap-3 rounded-lg h-[150px] w-full mb-4">
        {edit && (
          <div className="flex h-[150px]">
            {!primary &&
              (DeleteCoverLoading || isDeleting ? (
                <SpinnerLoading dimentians="h-4 w-4 text-[red]" />
              ) : NumberOfImgToAdd >= 195 ? null : (
                <div
                  onClick={DeleteCoverImageHandler}
                  className="cursor-pointer"
                  data-id={id}
                  data-index={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:animate-bounce absolute top-[-10px] w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm2 2v8h10v-8H7zM9 2h6v2H9V2z" />
                  </svg>
                </div>
              ))}

            <div className="flex gap-1 items-end p-1 ">
              <label htmlFor={`file-input-${id}`} className="cursor-pointer">
                <span className="material-symbols-outlined text-[20px] w-4 flex items-center justify-center h-4 p-1 rounded-lg bg-[#0000ff2a] text-[blue]">
                  upload
                </span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id={`file-input-${id}`}
              />
              {file ? (
                primaryLoading || CoverLoading ? (
                  <SpinnerLoading dimentians="h-4 w-4 text-blue-600" />
                ) : (
                  <span
                    className="material-symbols-outlined text-[10px] w-4 flex items-center justify-center h-4 p-1 rounded-lg bg-[#0000ff2a] text-[blue] cursor-pointer"
                    onClick={
                      primary
                        ? updatePrimaryImageHandler
                        : updateCoverImageHandler
                    }
                  >
                    <span className="material-symbols-outlined">sync</span>
                  </span>
                )
              ) : null}
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            width="150px"
            height="150px"
            className="h-full object-cover"
            alt="Image"
          />
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm">
          Error: {error?.data?.message || "Failed to update image"}
        </div>
      )}
    </div>
  );
};

export default ImageCard;