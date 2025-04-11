import Background from "@/components/background";
import Signup from "@/components/form/authform/signup";
import Headers from "@/components/header-component/headers";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col mb-24 space-y-2">
      <Headers />
      <Background />
      <div className="flex flex-col items-center">
        <Signup />
      </div>
    </div>
  );
};

export default SignUp;
