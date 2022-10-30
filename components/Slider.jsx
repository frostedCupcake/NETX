import React from "react";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div>
      <div className="md:h-[25rem] md:w-[45rem] w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] mt-5">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
