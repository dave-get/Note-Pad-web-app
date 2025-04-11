import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignedinHeader = () => {
  return (
    <div className="flex px-20">
      <div className="flex justify-between px-10 py-5 border-b border-b-white/10 w-full">
        <div className="flex space-x-10 items-center text-white text-sm">
          <Link
            href="/landingPage"
            className="flex relative items-center w-36 h-20"
          >
            <Image src="/images/logo.svg" alt="" fill className="absolute" />
          </Link>
          <Link href="/homePage" className="hover:text-blue-400">
            Home
          </Link>
        </div>
        <div className="flex space-x-2 items-center justify-center px-4">
          <p className="text-white">John Doe</p>
          <Link href="" className="relative items-center w-10 h-10">
            <Image
              src="/icons/profile.svg"
              alt=""
              fill
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignedinHeader;
