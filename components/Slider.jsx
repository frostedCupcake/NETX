import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <div className="md:h-[65rem] md:w-[55rem] w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] mt-5 shadow-xl lg:h-[27rem]">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image
              src={
                "https://res.cloudinary.com/dbmw0xoar/image/upload/v1667105148/ecell/NetX/IMG_20220801_145653_ls5ewt.jpg"
              }
              layout="fill"
            />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image
              src={
                "https://res.cloudinary.com/dbmw0xoar/image/upload/v1667105149/ecell/NetX/IMG_20220521_134057_joz56r.jpg"
              }
              layout="fill"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
