"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

const Headers = () => {
  const pathName = usePathname();
  const isLogin = pathName === "/api/auth/login";
  const isSignUp = pathName === "/api/auth/signup";
  const isContact = pathName === "/api/contact";
  return (
    <div className="flex justify-between items-center px-24 py-5">
      <div className="flex w-full justify-between items-center border-b px-16 border-b-white/10">
        <div className="flex space-x-10 items-center text-white text-sm">
          <Link
            href="/landingPage"
            className="flex relative items-center w-32 h-10"
          >
            <Image src="/images/logo.svg" alt="" fill className="absolute" />
          </Link>
          <Dropdown />
        </div>
        <div className="flex space-x-10 items-center text-white text-sm">
          <Link
            rel="stylesheet"
            href=""
            className={`${
              isContact ? "bg-[#5E6AD2] rounded-4xl py-1 px-2" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            rel="stylesheet"
            href="/api/auth/login"
            className={`${isLogin ? "bg-[#5E6AD2] rounded-4xl py-1 px-4" : ""}`}
          >
            Log In
          </Link>
          <Link
            rel="stylesheet"
            href="/api/auth/signup"
            className={`${
              isSignUp ? "bg-[#5E6AD2] rounded-4xl py-1 px-3" : ""
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;
