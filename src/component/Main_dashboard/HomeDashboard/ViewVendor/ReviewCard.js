import React from 'react';
import img from "../../../../Assets/Ellipse 411.png";
const ReviewCard = ({ reviewer, comment, rating }) => {
    return (
        <div className="px-2 border rounded-lg  font-normal text-[15px] ">
            <div className='flex gap-2 items-center mb-[-20px]' ><img
                            src={img}
                            height="50px"
                            width="50px"
                            className="rounded-[60%]"
                            alt="User avatar"
                          />
                          <div >  <p className='mb-[-20px] '>
                            Menna Ahmed
                          </p>
                          <p>
                            Egypt
                          </p>
                          
                          </div>
                        
                </div>      
       
            <p className='mb-[-10px] text-[12px]'>Deluxe Double,   Room Stayed in Dec 12 2023</p>
            <p className='text-[13px]'>“” Good Hotel and service ,especially wi if is very fast , deserv take 5 star one of the best placces i had ever visted before....“” </p>
        </div>
    );
};

export default ReviewCard;