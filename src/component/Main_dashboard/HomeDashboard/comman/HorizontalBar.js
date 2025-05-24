import { motion } from "framer-motion";

export default function HorizontalBar({ barLabel, StatPage }) {
  const rating = 3.2;
  const maxRating = 5;
  const percentage = (rating / maxRating) * 100;

  return (
    <div
      className={`w-full ${
        StatPage ? "flex mt-[-10px] items-center gap-6" : ""
      } font-usedFont justify-between max-w-sm space-y-2 mb-[20px]`}
    >
      {!StatPage ? (
        <div className="flex justify-between  mb-[-10px] text-sm font-medium text-gray-700">
          <span className="text-[13px]">{barLabel}</span>
          <span className="text-[13px]">{rating}</span>
        </div>
      ) : null}
      {StatPage ? (
        <span className="text-[13px] w-[100px]">{barLabel}</span>
      ) : null}
      <div className="flex items-center">
        <div className="w-[150px] h-[7px] rounded-full bg-gray-200 overflow-hidden">
          <motion.div
            className="h-full bg-[blue]"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        {StatPage ? (
          <span className="text-[13px] ml-[6px] ">{rating}</span>
        ) : null}
      </div>
    </div>
  );
}
