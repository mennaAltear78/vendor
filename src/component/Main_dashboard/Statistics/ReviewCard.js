

function ReviewCard({reviewer,
    timeAgo,
    comment,
    avatar,}) {
  return (
    <div className="font-usedFont">
      <div className="flex items-center gap-3">
        <div>
          <img src={avatar} className="w-14 h-14 rounded-[50%] " />
        </div>
        <div>
      <div className="flex justify-between"><p className="text-[10px]">{reviewer}</p>
      <p className="text-[10px] text-[#8080808c] ">{timeAgo}</p>
        </div>    
          <div className="bg-[pink] p-1 rounded-md text-[10px] mt-[-6px] h-3 w-[60px] flex justify-center text-[#fa274b]">
            receptionist
          </div>
          <p className="text-[13px] truncate max-w-[200px] mt-1 text-[gray]">
          {comment}
          </p>
        </div>
      </div>

      <hr className="h-[1px] bg-[#80808075] border-none my-4" />
    </div>
  );
}

export default ReviewCard;
