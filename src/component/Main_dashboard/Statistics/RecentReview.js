import ReviewCard from "./ReviewCard";

function RecentReview() {
const recentReviews = [
  {
    reviewer: "Sarah Johnson",
    timeAgo: "5 minutes ago",
    rating: "cleanliness",
    comment: "Room was super clean and cozy. I loved the atmosphere!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    reviewer: "Ahmed Kamal",
    timeAgo: "10 minutes ago",
    rating: "staff",
    comment: "Very helpful staff. They made my stay comfortable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    reviewer: "Emily Wang",
    timeAgo: "20 minutes ago",
    rating: "location",
    comment: "Great location close to everything I needed.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    reviewer: "Carlos Mendez",
    timeAgo: "30 minutes ago",
    rating: "amenities",
    comment: "Nice gym and pool. The breakfast buffet was also excellent.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];   

  return (
    <div className="lg:w-[300px] md:w-full mr-3   p-4 pt-[1px] font-usedFont overflow-y-scroll custom-scroll rounded-lg bg-white mb-[80px]">
      <div className="flex justify-between items-center cursor-pointer">
        <p>Recent Reviews</p>
        <div className="flex ">
          <b className="text-[blue] mr-[3px]">show all</b>
          <div className="w-5 h-5 bg-[#8080801e] rounded-full flex items-center">
            <span class="material-symbols-outlined text-[blue] text-[15px] ml-[3px]">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      {recentReviews.map((props, idx) => (
        <ReviewCard  key={idx} {...props} />
      ))}
    </div>
  );
}

export default RecentReview;
