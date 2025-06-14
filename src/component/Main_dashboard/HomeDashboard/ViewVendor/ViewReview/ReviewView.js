import React, { useContext } from 'react';
import Header from '../Header';
import RatingCard from './RatingCard';
import ReviewCardDetails from './ReviewCardDetails';

import { useParams } from 'react-router-dom';
import HotelReviewSkeleton from './HotelReviewSkeleton';
import { AuthContext } from '../../../../Authentication/Context/auth-context';
import { useGetReviewRoomQuery } from '../../../../../services/RoomApi';
import { useGetSpecificHotelQuery } from '../../../../../services/HotelApi';


const ReviewView = () => {
    const { id } = useParams();
    // console.log("id", id);
    const ctx = useContext(AuthContext);
    const { data, error, isLoading } = useGetSpecificHotelQuery({ id:ctx?.IdSpesificHotel });
    //  console.log(data);
     
    const {data:reviewData,error:Reviewerror ,isLoading:ReviewLoading }=useGetReviewRoomQuery({id})
    // console.log(reviewData);
    
      if (isLoading || ReviewLoading) return <HotelReviewSkeleton/>;
      if (error) return <p>Error: {error.message}</p>;
      
    return (
        <div className=" sm:w-full font-usedFont grid justify-center   bg-[#80808036] pb-[100px] ">
      <div className=" sm:w-[730px]   ">
           <Header data={data.data.hotel.name}/>
            <RatingCard data={reviewData} />
            {reviewData?.data?.reviews.map((review)=>(
                <ReviewCardDetails review={review} />
            ))}
        </div>
        </div>
    );
};

export default ReviewView;