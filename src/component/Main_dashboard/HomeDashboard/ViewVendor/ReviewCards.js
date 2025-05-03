import React, { useContext } from "react";
import Scroller from "../comman/Scroller";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";

const ReviewCards = ({ data, id }) => {
  const ctx = useContext(AuthContext);
  const d = ctx.IdSpesificHotel;
  const dataa = {
    reviews: [
      { reviewer: "John Doe", comment: "Great service!", rating: 5 },
      {
        reviewer: "Jane Smith",
        comment: "Very clean and comfortable.",
        rating: 4,
      },
      { reviewer: "Alice Johnson", comment: "Would stay again!", rating: 5 },
    ],
  };
  const items = dataa?.reviews || []; // Use reviews from the data prop or fallback to an empty array
  console.log(d, "idd");

  return (
    <div className="sm:w-[730px] w-[360px]">
      <Link
        className="no-underline text-[black]"
        to={`/profileView/${d}/Reviews`}
      >
        <div className="flex justify-between hover:text-[blue] cursor-pointer">
          <h2>Top Reviews </h2>
          <span class="material-symbols-outlined text-[40px]  flex mr-[10px]">
            read_more
          </span>
        </div>
      </Link>
      <Scroller items={items} Component={ReviewCard} />
    </div>
  );
};

export default ReviewCards;
