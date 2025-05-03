import React from 'react';
import Header from '../Header';
import RatingCard from './RatingCard';
import ReviewCardDetails from './ReviewCardDetails';
import { useGetSpecificHotelQuery } from '../../../../../services/PostApi';
import { useParams } from 'react-router-dom';
import HotelReviewSkeleton from './HotelReviewSkeleton';


const ReviewView = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSpecificHotelQuery({ id });
    
      if (isLoading) return <HotelReviewSkeleton/>;
      if (error) return <p>Error: {error.message}</p>;

    return (
        <div className=" sm:w-full w-[360px]  font-usedFont grid justify-center   bg-[#80808036] pb-[100px] ">
      <div className=" sm:w-[730px] w-[360px]  ">
           <Header data={data}/>
            <RatingCard/>
            {Array.from({length:6}).map(()=>(
                <ReviewCardDetails/>
            ))}
        </div>
        </div>
    );
};

export default ReviewView;