import React from 'react';
import star from "../../../../Assets/icons/Star 112.svg";


const RatingStars = ({ rating = 0 }) => {
  return (
    <div className="bg-[#ffa60020] justify-start items-center flex gap-1 pr-1 place-content-center w-[80px] rounded-[3px] h-[17px]">
    {[...Array(5)].map((_, i) => {
   
      if (i < Math.floor(rating)) {
        // Render full star
        return <img key={i} src={star} alt="star" width="10px" />;
      } else if (i < rating) {
        // Render half star
        return (
          <span
            key={i}
            className="material-symbols-outlined sm:text-[13px] text-[8px] text-[#ffa600d8] "
          >
            star_half
          </span>
        );
      } else {
        // Render empty star
        return (
          <span
            key={i}
            className="material-symbols-outlined sm:text-[13px] text-[10px] text-[#ffa600cc]"
          >
            star_outline
          </span>
        );
      }
    })}
  </div>
  );
};

export default RatingStars;