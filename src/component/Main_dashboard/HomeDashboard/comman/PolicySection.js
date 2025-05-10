import React, { memo } from "react";

const PolicySection = ({ title, content }) => (
  <div className="mb-[10px]">
    <b>{title}</b>
    <p className="mt-[-2px] text-[12px]">{content}</p>
  </div>
);

export default memo(PolicySection);