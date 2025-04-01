import Image from "next/image";
import React from "react";

const Card = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col space-y-10 p-8 border border-white/50 w-72 rounded-3xl bg-gradient-to-b from-[#2E2E34] to-[#262E70]">
      <div className="flex flex-col space-y-2">
        <p className="text-left text-[#8A8F98]">{data.Moto}</p>
        <div className="space-y-6">
          <p className="text-[#F7F8F8] text-left">{data.description}</p>
          <div className="flex items-center space-x-2">
            <Image src={data.purpose[0].icon} alt="" width={15} height={15} />
            <p className="text-white">{data.purpose[0].text}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Image src={data.cardName[0].icon} alt="" width={30} height={15} />
        <div className="flex items-center space-x-2">
          <p className="text-white font-bold">{data.cardName[0].text}</p>
          <Image src="/images/logo.svg" alt="" width={50} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Card;
