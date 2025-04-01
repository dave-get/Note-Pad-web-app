import Headers from "@/components/header/headers";
import LandingComp from "@/components/land-component/landingComp";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col mb-24 space-y-2">
      <Headers />
      <LandingComp />
    </div>
  );
};

export default LandingPage;
