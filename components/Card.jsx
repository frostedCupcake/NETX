import Image from "next/image";
import React from "react";

const Card = ({ heading, small_disc, imageUrl, disc, ref }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row md:my-[3rem] my-[1rem] gap-5 ">
        <div className="image md:block hidden">
          <Image
            src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            height="250"
            width="250"
            alt="heading-image"
          />
        </div>
        <div className="content flex flex-col md:w-[45rem] w-[90%] mx-auto">
          <h5 className="text-sky-900 text-xl  py-3">{heading}</h5>
          <p className="text-[#333333] text-[.9rem] ">{small_disc}</p>
          <button className="text-sky-700 text-left py-5 text-[1rem]">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
