import React from "react";

const LineBackground = () => {
  return (
    <div className="absolute h-full w-full bg-transparent overflow-x-clip">
      <hr className="absolute border-red-500 top-10 left-15 border h-32 rotate-45"/>
      <hr className="absolute border-blue-500 top-40 left-15 border h-48 rotate-45"/>
      <hr className="absolute border-yellow-500 -bottom-40 left-2/5 -translate-x-1/2 border h-48 rotate-45"/>
      <hr className="absolute border-[#FF2F87] top-1/2 -translate-y-1/2 right-15 border h-48 rotate-45"/>
      <hr className="absolute border-[#2FF3FF] -top-15 right-60 border h-50 rotate-45"/>
      <hr className="absolute border-[#34FF2F] bottom-0 right-72 border h-26 rotate-45"/>
    </div>
  );
};

export default LineBackground;
