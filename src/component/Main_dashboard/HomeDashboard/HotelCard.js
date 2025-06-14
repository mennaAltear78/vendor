import React, { useContext, useState } from "react";
import car from "../../../Assets/mdi_bedroom.svg";
import flag from "../../../Assets/iconamoon_flag.svg";

import PrimaryImage_View from "./comman/PrimaryImage_View";
import { Link } from "react-router-dom";
import RatingStars from "./comman/RatingStars";
import defaultImage from "../../../Assets/Image.svg";

import DotMenu from "./comman/DotMenu";
import { AuthContext } from "../../Authentication/Context/auth-context";
import { useDeleteHotelMutation } from "../../../services/HotelApi";


function HotelCard({ data, setOpen }) {
  const ctx = useContext(AuthContext);

  const [deleteHotel, { isLoading: Loading, isError, isSuccess }] =
    useDeleteHotelMutation();
  const handele = () => {
    setOpen(true);
    ctx.setspecificHotelId(data.id);
  };
  const images =
    data.primary_images.length > 0
      ? data?.primary_images
      : [defaultImage, defaultImage, defaultImage, defaultImage];
  return (
    <Link
      style={{ textDecoration: "none" }}
      className="border-solid text-[black]  flex cursor-pointer justify-between  p-1 mt-[30px] rounded-[10px] hover:border-[#0000ff79]  border-[#8080805a] border-[1px] font-usedFont hover:bg-blue-50 hover:shadow-md
      transition duration-300 w-[98%]"
      onClick={handele}
    >
      <div className="flex  ">
        <PrimaryImage_View
          data={{ primary_images: images }}
          DimensionsS="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]"
          DimentionsB="sm:h-[110px] h-[100px]"
          Drawer="sm:w-[157px] w-[100px]"
        />
        <div>
          <div className="   mb-[-16px] items-center">
            <h1 className="sm:text-[20px] text-[12px] flex gap-3 max-h-[50px] max-w-[150px] sm:max-w-full overflow-hidden text-ellipsis line-clamp-5 sm:w-full ">
              {data.name}{" "}
              <div className="bg-[#e4d960a0] ml-0  rounded-[4px]  text-[#ffae00] sm:p-[3px] h-4 p-[2px] text-[10px] mb-2">
                {data.type}
              </div>
            </h1>
          </div>
          <p className="text-[#8080809a] sm:text-sm text-[9px] lg:w-full w-[150px]  md:w-[200px] max-h-[100px] overflow-hidden text-ellipsis line-clamp-5">
            {data.description}
          </p>

          <div className="flex gap-2 items-center mb-[17px] mt-[-20px] ">
            <RatingStars rating={data.ratings_average} />
            <p className="sm:text-[13px] text-[10px]">
              {data?.ratings_average} ({data?.ratings_quantity} Review)+
            </p>
          </div>

          <div className="text-sm mt-[-26px] ">
            <p className="sm:text-[10px] text-[8px] sm:flex items-center gap-1 mb-[-10px]">
              <img src={car} alt="rooms" width="12px" clas />
              {Object.keys(data?.location).map((key) => (
                <span key={key}>
                  {data?.location[key]} , {data?.location[key]}
                </span>
              ))}
            </p>
            <p className="sm:text-[10px] text-[8px] flex items-center gap-1">
              <img src={flag} alt="languages" width="12px" />
              {data?.language_spoken?.map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    {index < data.language_spoken.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:hidden">
          <DotMenu
            id={data.id}
            Loading={Loading}
            error={isError}
            deleteFunction={deleteHotel}
          />
        </div>
        <div className="w-[full] flex justify-end items-center gap-2">
          <div
            className={`${
              data.is_completed
                ? "bg-[#ff00aa] flex justify-end "
                : "bg-[gray] "
            } py-[2px] px-[2px] rounded-md sm:w-[25px] sm:h-[9px] w-[20px] h-[9px] flex items-center `}
          >
            <div className="w-[10px] h-[10px] bg-[#ffffff] rounded-full "></div>
          </div>
          <p className="text-[#ff00aa] sm:text-[10px] text-[8px]  ">
            {data.is_completed ? "Active" : "not Active"}
          </p>
          <div className="hidden sm:flex ">
            <DotMenu id={data.id} />
          </div>
        </div>
        <div>
          <div className="  mt-[10px]">
            <div className="bg-[#b736de29] sm:w-[80%] w-[50px] mb-[10px] sm:text-[10px] text-[8px] rounded-[4px] text-[#e100ff] p-[4px] ">
              {data.facilities}
            </div>
            <div className="bg-[#e4d96052] sm:w-[80%] w-[50px] sm:text-[9.4px] text-[8px] rounded-[4px] text-[#ffae00] p-[4px] ">
              {data.promocode_available
                ? "promocode available"
                : "No promocode"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;
