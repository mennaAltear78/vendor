export default function HotelReviewLoadingSkeleton() {
  return (
    <div className="sm:w-[730px]    mx-auto p-4 space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-300 rounded w-40"></div>
        <div className="h-8 w-16 bg-blue-300 rounded"></div>
      </div>

      {/* Rating Summary Skeleton */}
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
          <div className="w-20 h-3 bg-gray-300 rounded"></div>
        </div>

        <div className="flex-1 space-y-3">
          {Array(7).fill().map((_, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-32 h-3 bg-gray-300 rounded"></div>
              <div className="w-6 h-3 bg-gray-300 rounded"></div>
              <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-blue-300 w-2/3 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Skeleton */}
      <div className="grid grid-cols-4 gap-4">
        {Array(4).fill().map((_, idx) => (
          <div key={idx} className="h-8 bg-gray-200 rounded"></div>
        ))}
      </div>

      {/* Reviews Skeleton */}
      {Array(3).fill().map((_, idx) => (
        <div key={idx} className="border p-4 rounded-lg space-y-3">
          {/* User Info */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-32 h-3 bg-gray-300 rounded"></div>
          </div>

          {/* Room Info */}
          <div className="w-60 h-3 bg-gray-300 rounded"></div>

          {/* Review text */}
          <div className="space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded"></div>
            <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
          </div>

          {/* Rating */}
          <div className="flex justify-between">
            <div className="w-10 h-4 bg-blue-300 rounded"></div>
            <div className="w-12 h-4 bg-pink-300 rounded"></div>
          </div>

          {/* Images */}
          <div className="flex gap-2">
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
            <div className="w-20 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
