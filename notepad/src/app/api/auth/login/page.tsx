import Background from "@/components/background";
import Login from "@/components/form/authform/login";
import Headers from "@/components/header-component/headers";
// import { redirect } from "next/navigation";
import React from "react";

const LogIn = async () => {
  return (
    <div className="relative flex flex-col mb-24 space-y-2 overflow-x-clip">
      <Headers />
      <Background />
      <div className="flex flex-col items-center">
        <Login />
      </div>
    </div>
  );
};

export default LogIn;
