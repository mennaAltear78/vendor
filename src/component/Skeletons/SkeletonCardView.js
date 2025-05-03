import React from "react";

function SkeletonCardView() {
  return (
    <div>
      <div className="  items-center   space-x-2 mt-4 animate-pulse">
        {[...Array(10)].map((_, index) => (
          <div className="p-3 border h-40 mb-3 flex bg-[#80808095]  rounded-lg shadow-md animate-pulse bg-white">
            <div className=" p-2 rounded mb-4">
              <div className=" p-2 mt-[-10px]  bg-gray-300 rounded mb-2 h-[80px] w-[290px]"></div>

              <div className="display flex ">
                <div className="p-2 bg-gray-300 rounded mb-8 mx-1 w-[80px] h-[40px]"></div>
                <div className=" p-2 bg-gray-300 rounded mb-8 mx-1 w-[80px] h-[40px]"></div>
                <div className="p-2 bg-gray-300 rounded mb-8 mx-1 w-[80px] h-[40px]"></div>
              </div>
            </div>
            <div className="mt-4 ">
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-gray-300 rounded w-[60px] mt-4"></div>
                <div className="h-8 bg-gray-300 rounded w-[40px] mt-4"></div>

                <div className="h-8 bg-gray-300 rounded w-[70px] mt-4"></div>
              </div>
              <div className="h-4  bg-gray-300 rounded  mt-2 px-[300px]"></div>

              <div className="h-8 bg-gray-300 rounded mt-2  w-full"></div>
            </div>
          </div>
        ))}
        <div>
          <div className="h-8 bg-gray-300 rounded mt-2  w-full"></div>

          <div className="h-8 bg-gray-300 rounded mt-2  w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCardView;
