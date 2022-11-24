import Image from "next/image";
import React from "react";

const Discription = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 p-5 shadow-lg w-[90%] bg-gray-50">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="hidden md:block">
          <Image
            src={
              "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            }
            height="200"
            width="200"
            alt="heading-image"
          />
        </div>
        <p className="md:w-[45rem] w-[100%] md:p-5 p-1 text-[.9rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid id
          animi magni suscipit, reprehenderit optio dolores corrupti porro
          dignissimos iste recusandae iure officiis eius alias autem eos,
          asperiores laborum beatae?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores, maxime! Minima, consectetur qui eaque id
          suscipit ratione quas adipisci impedit sapiente, quam velit
          reprehenderit facere. Totam laborum ducimus ullam necessitatibus?
        </p>
      </div>
      <div className="flex flex-row-reverse justify-center items-center gap-10 mt-10">
        <div className="hidden md:block">
          <Image
            src={
              "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            }
            height="200"
            width="200"
            alt="heading-image"
          />
        </div>
        <p className="md:w-[45rem] w-[100%] md:p-5 p-1 text-[.9rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid id
          animi magni suscipit, reprehenderit optio dolores corrupti porro
          dignissimos iste recusandae iure officiis eius alias autem eos,
          asperiores laborum beatae?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores, maxime! Minima, consectetur qui eaque id
          suscipit ratione quas adipisci impedit sapiente, quam velit
          reprehenderit facere. Totam laborum ducimus ullam necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default Discription;
