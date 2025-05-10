import React, { useContext, useState } from "react";
import star from "../../../Assets/icons/Star 112.svg";
import car from "../../../Assets/mdi_bedroom.svg";
import flag from "../../../Assets/iconamoon_flag.svg";
import DotMenu from "./DotMenu";
import PrimaryImage_View from "./comman/PrimaryImage_View";
import { Link } from "react-router-dom";
import AuthContext from "../../Authentication/Context/auth-context";
import RatingStars from "./comman/RatingStars";

function HotelCard({ data, setOpen }) {
  const ctx = useContext(AuthContext);
  const handele = () => {
    setOpen(true);
    ctx.setIdSpesificHotel(data.id);
  };



  return (
    <Link
      style={{ textDecoration: "none" }}
      className="border-solid text-[black] flex cursor-pointer justify-between p-1 mt-[30px] rounded-[10px] hover:border-[#0000ff79]  border-[#8080805a] border-[1px] font-usedFont hover:bg-blue-50 hover:shadow-md
      transition duration-300 w-full"
      // to={`/PropertyList/${data.id}`}
      onClick={handele}
    >
      <div className="flex  ">
        <PrimaryImage_View
          data={data}
          DimensionsS="w-[50px] h-[50px]"
          DimentionsB="h-[110px] "
          wd="158px"
        />
        <div>
          <div className="flex gap-1  mb-[-16px] items-center">
            <h1 className="text-[20px]">{data.name}</h1>
            {/* <div className="bg-[#6666dba1] rounded-[4px] text-[blue] p-[4px] text-[10px]">
              #23212
            </div> */}
            <div className="bg-[#e4d960a0] rounded-[4px] text-[#ffae00] p-[4px] text-[10px]">
              {data.type}
            </div>
          </div>

          <p className="text-[#8080809a]  text-sm">{data.description}</p>

          <div className="flex gap-2 items-center mb-[17px] mt-[-20px] ">
          <RatingStars rating={data.ratings_average}/>
            <p className="text-[13px]">
              {data?.ratings_average} ({data?.ratings_quantity} Review)+
            </p>
          </div>

          <div className="text-sm mt-[-26px] ">
            <p className="text-[10px] flex items-center gap-1 mb-[-10px]">
              <img src={car} alt="rooms" width="12px" />{" "}
              {Object.keys(data?.location).map((key) => (
                <span key={key}>
                  {data?.location[key]} , {data?.location[key]}
                </span>
              ))}
            </p>
            <p className="text-[10px]  flex items-center gap-1">
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
        <div className="w-[full] flex justify-end items-center gap-2">
          <div
            className={`${
              data.is_completed ? "bg-[#ff00aa] flex justify-end" : "bg-[gray] "
            } py-[2px] px-[2px] rounded-md w-[25px] h-[9px]`}
          >
            <div className="w-[10px] h-[10px] bg-[#ffffff] rounded-full "></div>
          </div>
          <p className="text-[#ff00aa] text-[10px] ">
            {data.is_completed ? "Active" : "not Active"}
          </p>

          <DotMenu id={data.id} />
        </div>
        <div>
          <div className="  mt-[10px]">
            <div className="bg-[#b736de29] mb-[10px]  rounded-[4px] text-[#e100ff] p-[4px] text-[10px]">
              {data.facilities}
            </div>
            <div className="bg-[#e4d96052] rounded-[4px] text-[#ffae00] p-[4px] text-[10px]">
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
