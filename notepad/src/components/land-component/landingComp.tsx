import React from "react";
import DescriptionCards from "./descriptionCards";
import Background from "../background";
import LineBackground from "../lineBackground";

const LandingComp = () => {
  return (
    <div className="relative flex flex-col justify-center mt-16">
      <Background />
      <LineBackground />
      <div className="flex flex-col items-center justify-center">
        <p className="text-[79.4px] font-[700] bg-gradient-to-r from-[#FF4D00] to-[#991C32] bg-clip-text text-transparent ">
          Hello
        </p>
        <p className="text-[#D0D6E0] text-[18.4px]">
          Smart Notes for Smarter Work – Capture & Organize with Ease.
        </p>
      </div>
      <div className="flex items-center w-full h-[500px] justify-center">
        <DescriptionCards />
      </div>
    </div>
  );
};

export default LandingComp;
