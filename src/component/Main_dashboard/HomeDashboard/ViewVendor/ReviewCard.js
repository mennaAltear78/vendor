import React from "react";

const ReviewCard = ({ user, booking, comment }) => {
  const getFlagUrl = (countryName) => {
    const nameToCode = {
      Egypt: "eg",
      France: "fr",
      Germany: "de",
      "United States": "us",
      Tunisia: "tn",
    };

    const code = nameToCode[countryName];
    return code ? `https://flagcdn.com/32x24/${code}.png` : null;
  };
  return (
    <div className=" border rounded-lg  font-normal text-[15px] ml-4  ">
      <div className="flex gap-2 items-center mb-[-20px]">
        <img
          src={user.avatar}
          height="44px"
          width="44px"
          className="rounded-[60%]"
          alt="User avatar"
        />
        <div>
          <p className="mb-[-10px] ">{user.full_name}</p>
          <p className="text-[13px] text-gray-500 flex items-center">
            <img
              src={getFlagUrl(user.location.country)}
              className="w-3 h-3 mr-1"
            />{" "}
            {user.location.country}, {user.location.city}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center text-sm  mb-5">
        {booking.rooms.map((item, index) => (
          <div key={index} className="text-sm  ml-2 flex itens-center mt-2">
            <span class="material-symbols-outlined text-sm mr-1 ">hotel</span>
            {item.room_type}
          </div>
        ))}
        <div className={`flex items-center text-sm mt-2 ml-2 h-2 `}>
          <span class="material-symbols-outlined text-sm ">
            event_available
          </span>{" "}
          <p>
            {booking?.num_of_nights} nights.
            {booking?.check_out.split("T")[0]}
          </p>
          <div className="ml-2 ">
            <span class="material-symbols-outlined text-sm">
              family_restroom
            </span>{" "}
            {booking?.num_of_adults} Adults, {booking?.num_of_childrens}{" "}
            Childerns
          </div>
        </div>
      </div>

      <p className="text-[15px] mt-[-10px] text-gray-500">“”{comment}“”</p>
    </div>
  );
};

export default ReviewCard;
