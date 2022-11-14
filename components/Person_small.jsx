import React from "react";
import Image from "next/image";

const Person_small = ({ name, designation, i_link }) => {
  return (
    <div className="inline">
      <div className="flex flex-row gap-5 text-left m-10 border p-2 rounding-md shadow-md">
        {" "}
        <div className="h-20 w-20 relative m-auto">
          <Image
            src={
              i_link
                ? i_link
                : "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            }
            alt={`${name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col w-[10rem] sm:w-[8rem]">
          <h3 className="font-medium text-[1.1rem] mt-3">
            {name ? name : "name"}
          </h3>
          <p className="text-[.8rem] text-[#555] block w-[5rem]">
            {designation ? designation : "designation"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person_small;
