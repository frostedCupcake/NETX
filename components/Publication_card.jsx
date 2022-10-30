import React from "react";
import Image from "next/image";
import Link from "next/link";

const Publication_card = ({ name, people, link, pdf, talk, location }) => {
  return (
    <div className="flex flex-col md:items-start items-center md:ml-[20%]">
      <div className="flex flex-col md:flex-row md:my-[1.2rem] my-[1rem] gap-5 ">
        <div className="image md:block hidden">
          <Image
            src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
            height="100"
            width="70"
            alt={name}
          />
        </div>
        <div className="content flex flex-col md:w-[30rem] w-[90%] mx-auto">
          <h5 className=" text-[.8rem]  py-1">{name}</h5>
          <p className="text-[#333333]  text-[.8rem] pt-1">{people}</p>
          <p className="text-[#333333] text-[.8rem] ">
            <Link href={link[1]}>
              <a>{link[0]}</a>
            </Link>{" "}
            {location}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication_card;
