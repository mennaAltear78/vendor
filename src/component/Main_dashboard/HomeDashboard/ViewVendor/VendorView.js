import { useNavigate, useParams } from "react-router-dom";
import {
  useGetReviewRoomQuery,
  useGetSpecificHotelQuery,
} from "../../../../services/PostApi";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Facilities from "./FacilitiesView";
import RoomView from "./RoomView";
import ReviewCards from "./ReviewCards";
import Booking_Policies from "./Booking_Policies";
import HotelDetailsSkeleton from "./HotelDetailsSkeleton";
import AuthContext from "../../../Authentication/Context/auth-context";
import { useContext, useEffect, useMemo, useState } from "react";
import HotelEdit from "../../Edit/EditHotel/HotelEdit";
import EditHotelSkeleton from "../../Edit/EditHotel/EditHotelSkeleton";

const VendorView = () => {
  const [Edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(true);

  const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  const id = useMemo(() => ctx?.IdSpesificHotel || paramId, [ctx, paramId]);
  useEffect(() => {
    ctx.setIdSpesificHotel(id);
  }, [id]);
  const { data, error, isLoading } = useGetSpecificHotelQuery(
    { id },
    { skip: !id }
  );
  const {
    data: reviewData,
    error: Reviewerror,
    isLoading: ReviewLoading,
  } = useGetReviewRoomQuery({ id }, { skip: !id });

  if (isLoading) return Edit ? <EditHotelSkeleton /> : <HotelDetailsSkeleton />;
  if (error) return <p>No Hotels Found</p>;

  //  console.log(data,"room");

  return (
    <div className={`w-full font-usedFont px-2 bg-[#80808015] `}>
      <div className="grid justify-center">
        <Header
          data={data?.data?.hotel?.name}
          Edit={Edit}
          setEdit={setEdit}
          expand={expand}
          setExpand={setExpand}
          id={id}
        />
        {Edit ? (
          <HotelEdit data={data.data.hotel} />
        ) : (
          <>
            <ImageGallery data={data} />
            <Facilities facilities={data.data.hotel.facilities} />
            <RoomView id={id} />
            <ReviewCards data={reviewData} id={id} review={reviewData} />
            <Booking_Policies data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default VendorView;
