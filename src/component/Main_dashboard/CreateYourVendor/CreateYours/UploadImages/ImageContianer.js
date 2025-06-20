import React from 'react'
import ImageDownload from "../../common/ImageDownload";
import download from "../../../../../Assets/solar_upload-bold.png";
import TrashIcon from "../../common/TrashIcon";
function ImageContianer({title,limits,HotelImages,onAddImageHandeler,images,setImages,setHotalImages,imagesHotal}) {
  return (
         <div className="font-[Poppins] ml-2 p-3 sm:w-[460px] border border-solid border-[rgba(128,128,128,0.404)]  rounded-[15px] mt-[50px]">
                <b className="text-[22px]">
                  {/* Primary Images */}
                  {title}
                  <span className="text-red-500 ml-2 text-[13px]">
                    {limits}
                  </span>
                </b>
                <hr className="border border-[rgba(128,128,128,0.404)]" />
                <p>Upload it</p>
                <div className="sm:w-[460px]  h-[120px] border-2 border-dashed border-gray-500 rounded-[5px]  mb-[10px] flex items-center justify-center flex-col">
                  <img
                    src={download}
                    onClick={HotelImages ? onAddImageHandeler : null}
                    className={HotelImages ? "cursor-pointer" : ""}
                  />
                  <p className="font-medium text-gray-500 text-[10px]">
                    Upload From Max 10 MG Per File
                  </p>
                </div>
                <div className=" cursor-pointer  gap-1 mt-5 flex flex-wrap sm:mr-[-100px]">
                  {images?.map((image) => (
                    <div key={image.id} className="relative">
                      {image?.id <= 200 ? (
                        <div key={image.id}>
                          {!HotelImages && (
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
                            name={HotelImages ? "primary image" : "Image"}
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

                {HotelImages && (
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
  )
}

export default ImageContianer