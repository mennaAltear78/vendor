import React from 'react';
import ImageDownload from './ImageDownload'; // Ensure this is the correct import path

const ImagesUploadContainer = ({  imagesHotal, removeImageHandler, setHotalImages }) => {

    
  return (
    <div>

      <div className="flex flex-wrap gap-4">
        {imagesHotal.map((image) => (
          <div key={image.id} className="relative">
            {image.id <= 200 && (
              <div>
                <p
                  className="absolute top-[-22px] left-[-8px] z-10 cursor-pointer"
                  onClick={() => removeImageHandler(image.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:animate-bounce absolute top-[-10px] w-6 h-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm2 2v8h10v-8H7zM9 2h6v2H9V2z" />
                  </svg>
                </p>
                <ImageDownload
                  name="cover image"
                  ImageHandeler={(img) => {
                    setHotalImages((prev) =>
                      prev.map((item) =>
                        item.id === image.id ? { ...item, image: img.image } : item
                      )
                    );
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesUploadContainer;