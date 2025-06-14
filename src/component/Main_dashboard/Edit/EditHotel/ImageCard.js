import { useState, useEffect } from "react";
import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";

const ImageCard = ({
  img,
  RemoveHandler,
  id,
  edit,
  primary,
  cover,
  index,
  idImg,
  NumberOfImgToAdd,
  UpdateFunction,
  DeleteFunction,
  DeleteLoading,
  DeleteError,
  UpdateLoading,
  UpdateError,
}) => {
  const anyError = DeleteError || UpdateError;
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(img);
  const [isDeleting, setIsDeleting] = useState(false);
console.log(img,"???????????");

  const updateImagesHandler = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("imageIndex", Number(index));

    if (primary) {
      formData.append("primary_image", file);
    } else if (cover) {
      formData.append("cover_images", file);
    } else {
      formData.append("images", file);
    }

    await UpdateFunction({ id, body: formData });
    await setFile(null);
  };

  const DeleteImageHandler = () => {
    if (isDeleting) return; // Prevent multiple clicks
    setIsDeleting(true);
    const DeletedImages = { imagesIndexes: [index] };
    RemoveHandler(idImg);
    DeleteFunction({ id, body: DeletedImages })
      .unwrap()
      .then((response) => {
        console.log("DeleteCoverImage API success:", response);
      })
      .catch((err) => {
        console.error("DeleteCoverImage API error:", err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsDeleting(false);
        }, 1000);
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
      if (image && typeof image === "string" && image.startsWith("blob:")) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div>
      <div className="flex gap-3 rounded-lg h-[150px] w-full mb-4">
        {edit && (
          <div className="flex h-[150px]">
            {!primary  &&
              (isDeleting ? (
                <SpinnerLoading dimentians="h-4 w-4 text-[red]" />
              ) : NumberOfImgToAdd >= 195 ? null : (
                <div
                  onClick={DeleteImageHandler}
                  className="cursor-pointer"
                  data-id={idImg}
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
              <label htmlFor={`file-input-${idImg}`} className="cursor-pointer">
                <span className="material-symbols-outlined text-[20px] w-4 flex items-center justify-center h-4 p-1 rounded-lg bg-[#0000ff2a] text-[blue]">
                  upload
                </span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id={`file-input-${idImg}`}
              />

              {file ? (
                UpdateLoading ? (
                  <SpinnerLoading dimentians="h-4 w-4 text-blue-600" />
                ) : (
                  <span
                    className="material-symbols-outlined text-[10px] w-4 flex items-center justify-center h-4 p-1 rounded-lg bg-[#0000ff2a] text-[blue] cursor-pointer"
                    onClick={updateImagesHandler}
                  >
                    <span className="material-symbols-outlined">sync</span>
                  </span>
                )
              ) : null}
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-lg">
          {file ? (
            DeleteLoading || UpdateLoading ? (
              <SpinnerLoading dimentians="h-4 w-4 text-blue-600" />
            ) : (
              <img
                id={`file-input-${idImg}`}
                src={image}
                width="150px"
                height="150px"
                className="h-full object-cover"
                alt="Image"
              />
            )
          ) : null}
          <img
            id={`file-input-${idImg}`}
            src={image}
            width="150px"
            height="150px"
            className="h-full object-cover"
            alt="Image"
          />
        </div>
      </div>
      {anyError ? (
        <div className="text-red-500 text-sm">
          Error: {anyError?.data?.message || "Failed to update image"}
        </div>
      ) : null}
    </div>
  );
};

export default ImageCard;
