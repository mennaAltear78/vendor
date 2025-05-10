
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpecificHotelQuery } from "../../../../services/PostApi";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Facilities from "./FacilitiesView";
import RoomView from "./RoomView";
import ReviewCards  from './ReviewCards'
import Booking_Policies from "./Booking_Policies";
import HotelDetailsSkeleton from "./HotelDetailsSkeleton";
import AuthContext from "../../../Authentication/Context/auth-context";
import { useContext, useEffect, useMemo, useState } from "react";
import HotelEdit from "../../Edit/EditHotel/HotelEdit";



const VendorView = () => {
  const Edit = JSON.parse(localStorage.getItem("Edit")) || false;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("Edit", JSON.stringify(Edit));
  }, [Edit]);

  const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  const id = useMemo(() => ctx?.IdSpesificHotel || paramId, [ctx, paramId]);

  const { data, error, isLoading } = useGetSpecificHotelQuery(
    { id },
    { skip: !id }
  );

  if (isLoading) return <HotelDetailsSkeleton />;
  if (error) return <p>No Hotels Found</p>;

  const openPageHandeler = () => {
    console.log(ctx.IdSpesificHotel);
    navigate(`/PropertyList/${ctx.IdSpesificHotel}`);
  };

  return (
    <div className={`w-full font-usedFont px-2 bg-[#80808015] `}>
      <div className="grid justify-center">
        <Header data={data} openPageHandeler={openPageHandeler} />
        {Edit? (
          <HotelEdit data={data.data.hotel} />
        ) : (
          <>
            <ImageGallery data={data} />
            <Facilities facilities={data.data.hotel.facilities} />
            <RoomView id={id} />
            <ReviewCards data={data} id={id} />
            <Booking_Policies data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default VendorView;