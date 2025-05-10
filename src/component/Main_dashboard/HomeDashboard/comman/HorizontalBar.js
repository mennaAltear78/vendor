import { motion } from "framer-motion";

export default function HorizontalBar({barLabel}) {
  const rating = 3.2;
  const maxRating = 5;
  const percentage = (rating / maxRating) * 100;

  return (
    <div className="w-full max-w-sm space-y-2 mb-[20px]">
      <div className="flex justify-between  mb-[-10px] text-sm font-medium text-gray-700">
        <span className="text-[13px]">{barLabel}</span>
        <span className="text-[13px]">{rating}</span>
      </div>
      <div className="w-[150px] h-[5px] rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          className="h-full bg-[blue]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

