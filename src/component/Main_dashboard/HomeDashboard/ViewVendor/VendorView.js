import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetSpecificHotelQuery } from "../../../../services/PostApi";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Facilities from "./FacilitiesView";
import RoomView from "./RoomView";
import ReviewCards  from './ReviewCards'
import Booking_Policies from "./Booking_Policies";
import HotelDetailsSkeleton from "./HotelDetailsSkeleton";
import AuthContext from "../../../Authentication/Context/auth-context";


const VendorView = () => {
  const { id: paramId } = useParams(); // Get id from the URL
  const ctx = useContext(AuthContext); // Get context
  const id = React.useMemo(() => ctx?.IdSpesificHotel|| paramId, [ctx, paramId]);

  if (!id) {
    console.error("Missing id for VendorView");
    return <p>Error: Missing hotel ID</p>;
  }
  
  const { data, error, isLoading } = useGetSpecificHotelQuery({id });

  if (isLoading) return <HotelDetailsSkeleton/>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="w-full  font-usedFont px-2 bg-[#80808015] ">
      <div className=" grid  justify-center ">
        <Header data={data} />
        <ImageGallery data={data} />
        <Facilities facilities={data.data.hotel.facilities} />
        <RoomView data={data} id={id}/>
        <ReviewCards data={data} id={id}/>
        <Booking_Policies data={data}/>     
      </div>
    </div>
  );
};

export default VendorView;
