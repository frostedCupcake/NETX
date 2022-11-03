import Image from "next/image";
import React from "react";

const ResearchCard = ({ heading, disc, imageUrl }) => {
  return (
    <div className="mx-auto">
      <div className="text-[1.2rem]  md:text-[1.3rem] lg:text-[1.5rem] text-center my-3 font-medium">
        {heading}
      </div>
      <div className="flex flex-col  items-center justify-center gap-10 mt-[3rem]">
        <div>
          <Image src={imageUrl} height="320" width="320" alt="heading-image" />
        </div>
        <div className="bg-zinc-300 rounded-md w-[90%] sm:w-[60%] md:w-[45%] p-3">
          <div className="text-[#333333] text-[.9rem]  md:text-[1rem]">
            {disc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
