import PrimaryImage_View from "../comman/PrimaryImage_View";
import RatingStars from "../comman/RatingStars";
import defaultImage from "../../../../Assets/Image.svg";

const ImageGallery = ({ data }) => {
  // console.log(data.data.hotel.description);
  const images = data.data.hotel.primary_images.length > 0 ? data.data.hotel.primary_images : [defaultImage, defaultImage, defaultImage, defaultImage];
 console.log(data.data.hotel);
 

  return (
    <div className="mt-3 bg-white rounded-lg font-usedFont p-4 flex sm:w-[700px] w-[360px] shadow-md">
      <PrimaryImage_View
        data={{ primary_images: images }}
        DimensionsS="w-[70px] h-[70px]"
        DimentionsB="h-[150px]"
        // wd="914"
        Drawer="w-[217px]"
      />
      <div>
        <h1 className="text-[15px]">{data.data.hotel.name}</h1>
        <RatingStars rating={data?.hotel?.ratings_average} />
        <div className=" text-[#47464681] sm:w-[400px] w-[160px] text-[13px]  ">
          <p>{data.data.hotel.description}</p>
        </div>
        <div className="flex items-center  text-[10px] gap-1 mt-[-20px] ">
          <span class="material-symbols-outlined text-blue-500">
            location_on
          </span>
          <p>
            <div className=" text-[#474646d8] text-black">
              <p className="truncate  sm:w-[300px] w-[60px]">
                {data.data.hotel.location.country},{" "}
                {data.data.hotel.location.address}
              </p>
            </div>
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-[-10px]">
          {data.data.hotel.language_spoken.map((lang, index) => (
            <div key={`${lang}-${index}`} className="bg-[#ffa60065] text-[orange] p-1 text-[13px] rounded-[5px] w-[50px] mb-2">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
