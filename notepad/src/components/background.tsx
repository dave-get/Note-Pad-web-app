"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Background = () => {
  const pathName = usePathname();
  const isLogin = pathName === "/api/auth/login";
  const isSignUp = pathName === "/api/auth/signup";
  // const isContact = pathName === "/api/contact";
  const isLandingPage = pathName === "/landingPage" || pathName === "/";
  console.log(pathName);
  return (
    <div
      className={`absolute bg-gradient-to-b from-[#4D54FF] to-[#8460A8] blur-3xl bg-transparent shadow-2xl rounded-full h-[500px] w-[500px] ${
        isLandingPage
          ? "top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : isSignUp
          ? "-left-50 top-20"
          : isLogin
          ? "-right-50 top-20"
          : ""
      } -z-50`}
    ></div>
  );
};

export default Background;
