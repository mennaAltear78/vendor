export default function HotelDetailsSkeleton() {
  
    return (
      <div className="sm:w-[730px] w-[360px] mx-auto p-4 space-y-8 animate-pulse ">
        
        {/* Header */}
        <div className="h-6 bg-gray-300 rounded w-48"></div>
  
        {/* Main Hotel Card */}
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
          <div className="flex gap-6">
            <div className="w-60 h-40 bg-gray-300 rounded"></div>
            <div className="flex-1 space-y-3">
              <div className="w-40 h-4 bg-gray-300 rounded"></div>
              <div className="w-28 h-3 bg-yellow-200 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
              <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
              <div className="flex gap-2 mt-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-16 h-12 bg-gray-200 rounded-md"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Facilities Section */}
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-24 h-6 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
  
        {/* Rooms */}
        <div className="space-y-3">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-3 space-y-2">
                <div className="w-full h-28 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                <div className="flex justify-between items-center">
                  <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  <div className="w-10 h-4 bg-pink-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Top Reviews */}
        <div className="space-y-3">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-3 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="w-24 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Policies */}
        <div className="space-y-2">
          <div className="w-40 h-4 bg-gray-300 rounded"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-3 bg-gray-200 rounded"></div>
          ))}
        </div>
  
        {/* Payment Section */}
        <div className="space-y-2">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-12 h-8 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  