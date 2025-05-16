import React from "react";

function EditHotelSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="h-8 w-24 bg-gray-300 animate-pulse rounded"></div>
        <div className="flex space-x-2">
          <div className="h-8 w-16 bg-[#0000ff56] animate-pulse rounded"></div>
          <div className="h-8 w-8 bg-[#58586e] animate-pulse rounded"></div>
          <div className="h-8 w-8 bg-[#7575e2] animate-pulse rounded"></div>
        </div>
      </div>

      {/* Primary Images Section */}
      <div className="mb-6">
        <div className="mt-4">
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded"></div>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className="h-24 w-full bg-[#8080809c] animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-[#8080809c] animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded"></div>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className="h-24 w-full bg-[#8080809c] animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-[#8080809c] animate-pulse rounded-lg"></div>
            <div className="h-24 w-full bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="mb-6">
        <div className="h-6 w-28 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="w-full justify-end flex">
          <div className="h-6 w-10 bg-[#0000ff5e] animate-pulse rounded mb-4"></div>
        </div>
        <div className="space-y-4">
          <div className="h-10 w-full bg-gray-300 animate-pulse rounded"></div>
          <div className="w-full justify-end flex">
            <div className="h-6 w-10 bg-[#0000ff57] animate-pulse rounded"></div>
          </div>
          <div className="h-20 w-full bg-gray-300 animate-pulse rounded"></div>
          <div className="w-full justify-end flex">
            <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded"></div>
          </div>
          <div className="h-10 w-full bg-gray-300 animate-pulse rounded"></div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="w-full justify-end flex">
                <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
              </div>
              <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="w-1/2">
              <div className="w-full justify-end flex">
                <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
              </div>
              <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Price Board Section */}
      <div className="mb-6">
        <div className="h-6 w-28 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <div className="w-full justify-end flex">
              <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
            </div>
            <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
          </div>
          <div className="w-1/2">
            <div className="w-full justify-end flex">
              <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
            </div>
            <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full justify-end flex">
        <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
      </div>
      <div className="h-10 w-full bg-gray-300 animate-pulse rounded mb-[10px]"></div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <div className="w-full justify-end flex">
            <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
          </div>
          <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div className="w-1/2">
          <div className="w-full justify-end flex">
            <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px]"></div>
          </div>
          <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="w-full justify-end flex">
        <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px] mt-3"></div>
      </div>
      <div className="h-10 w-full bg-gray-300 animate-pulse rounded mt-[10px] mb-[10px]"></div>

      {/* Check-In/Out Section */}
      <div className="mb-6">
        {/* Add placeholders if needed */}
      </div>

      {/* Cancellation Policy Section */}
      <div className="mb-6">
        <div className="h-6 w-56 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-6 w-32 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-6 w-12 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="h-20 w-full bg-gray-300 animate-pulse rounded mb-[10px]"></div>
      <div className="w-full justify-end flex">
        <div className="h-6 w-10 bg-[#0000ff7c] animate-pulse rounded mb-[10px] mt-3"></div>
      </div>
      <div className="h-20 w-full bg-gray-300 animate-pulse rounded mb-[10px]"></div>

      <div className="mb-6">
        <div className="h-6 w-[100px] bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="grid grid-cols-10 gap-4">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-[30px] bg-gray-300 animate-pulse rounded"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditHotelSkeleton;