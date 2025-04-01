import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown";

const Headers = () => {
  return (
    <div className="flex justify-between items-center px-24 py-5">
      <div className="flex w-full justify-between items-center border-b px-16 border-b-white/10">
        <div className="flex space-x-10 items-center text-white text-sm">
          <div className="flex relative items-center w-32 h-10">
            <Image src="/images/logo.svg" alt="" fill className="absolute" />
          </div>
          <Dropdown />
        </div>
        <div className="flex space-x-10 items-center text-white text-sm">
          <Link rel="stylesheet" href="">
            Contact
          </Link>
          <Link rel="stylesheet" href="">
            Log In
          </Link>
          <Link rel="stylesheet" href="">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;
