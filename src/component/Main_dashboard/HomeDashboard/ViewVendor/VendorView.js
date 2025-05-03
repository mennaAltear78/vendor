
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
import { useContext, useMemo } from "react";


const VendorView = () => {
  const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  const id = useMemo(() => ctx?.IdSpesificHotel || paramId, [ctx, paramId]);

  const { data, error, isLoading } = useGetSpecificHotelQuery(
    { id },
    { skip: !id }
  );

  if (isLoading) return <HotelDetailsSkeleton />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full font-usedFont px-2 bg-[#80808015]">
      <div className="grid justify-center">
        <Header data={data} />
        <ImageGallery data={data} />
        <Facilities facilities={data.data.hotel.facilities} />
        <RoomView data={data} id={id} />
        <ReviewCards data={data} id={id} />
        <Booking_Policies data={data} />
      </div>
    </div>
  );
};

export default VendorView;
