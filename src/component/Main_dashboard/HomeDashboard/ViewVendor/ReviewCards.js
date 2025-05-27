import React, { useContext } from "react";
import Scroller from "../comman/Scroller";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";

const ReviewCards = ({ review }) => {
  const ctx = useContext(AuthContext);
  const d = ctx.IdSpesificHotel;
  const items =review?.data?.reviews || []; // Use reviews from the data prop or fallback to an empty array
  console.log(items, "idd");

  return (
    <div className="sm:w-[730px] w-[360px]">
      <Link
        className="no-underline text-[black]"
        to={`/profileView/${d}/Reviews`}
      >
        <div className="flex justify-between items-center hover:text-[blue] cursor-pointer">
          <h2>Top Reviews </h2>
          <div className="flex ">
          <b className="hover:text-[blue] mr-[3px]">show All</b>
          <div className="w-5 h-5 bg-[#8080801e] rounded-full flex items-center">
            <span class="material-symbols-outlined hover:text-[blue] text-[15px] ml-[3px]">
              chevron_right
            </span>
          </div>
        </div>
        </div>
      </Link>
      
      <Scroller items={items}  Component={ReviewCard} numberCardShown={2}/>
    </div>
  );
};

export default ReviewCards;
