import Image from "next/image";
import React from "react";
import data from "../../data/research";

const research1 = () => {
  return (
    <div className="mx-auto">
      <div className="text-[1rem]  md:text-[1.3rem] lg:text-[1.5rem] text-center my-3 font-medium">
        {data[0].heading}
      </div>
      <div className="flex flex-col  items-center justify-center gap-10 mt-[3rem]">
        <div>
          <Image
            src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            height="320"
            width="320"
            alt="heading-image"
          />
        </div>
        <div className="bg-zinc-300 rounded-md w-[80%] sm:w-[60%] md:w-[45%] p-3">
          <div className="text-[#333333] text-[.9rem]  md:text-[1rem]">
            {data[0].disc}
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default research1;
