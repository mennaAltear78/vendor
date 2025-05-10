import React, { useContext, useEffect, useState } from "react";
import Header from "../ViewVendor/Header";
import RoomEdit from "../../Edit/EditRoom/RoomEdit";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Authentication/Context/auth-context";
import image from "../../../../Assets/Image.svg";
import PrimaryImage_View from "../comman/PrimaryImage_View";
import { useGetSpecificRoomQuery } from "../../../../services/PostApi";

const RoomView = () => {
  const navigate = useNavigate();
  const [Edit, setEdit] = useState(
    () => JSON.parse(localStorage.getItem("Edit")) || false
  );

  useEffect(() => {
    localStorage.setItem("Edit", JSON.stringify(Edit));
  }, [Edit]);

  // const { id: paramId } = useParams();
  const ctx = useContext(AuthContext);
  // const id = useMemo(() => ctx?.IdSpesificHotel || paramId, [ctx, paramId]);

  const { data, error, isLoading } = useGetSpecificRoomQuery( );
  console.log(data,"room");

  // if (isLoading) return <HotelDetailsSkeleton />;
  // if (error) return <p>No Hotels Found</p>;

  const openPageHandeler = () => {
 

    navigate(`/RoomsList/${ctx.IdSpesificHotel}`);
  };
  const fakeData = {
    primary_images: [image, image, image, image],
  };
  return (
    <div className={`w-full font-usedFont px-2 bg-[#80808015] `}>
      <div className="grid justify-center">
        <Header
          data={data}
          setEdit={setEdit}
          openPageHandeler={openPageHandeler}
        />
        {Edit && <RoomEdit data={data} />}
        <div className="bg-white sm:w-[99%] mt-[10px] p-2 pr-0  rounded-lg">
          <PrimaryImage_View
            data={fakeData}
            DimensionsS="w-[90px] h-[90px]  "
            DimentionsB=" sm:h-[250px] h-[200px]"
            wd="370px"
            ViewAll={true}
          />
        </div>

      </div>
    </div>
  );
};

export default RoomView;
