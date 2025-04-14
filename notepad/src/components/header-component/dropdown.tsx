"use client";
import Image from "next/image";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center relative">
      <div
        className="flex items-center space-x-5 justify-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p>Features</p>
        <div>
          {isOpen && isOpen === true ? (
            <Image
              src="/icons/dropdown.svg"
              alt=""
              width={16}
              height={16}
              className="rotate-180"
            />
          ) : (
            <Image src="/icons/dropdown.svg" alt="" width={16} height={16} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-8 w-full space-y-2">
          <p className="border border-white/10 px-3">AI</p>
          <p className="border border-white/10 px-3">Chat</p>
          <p className="border border-white/10 px-3">Web3</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
