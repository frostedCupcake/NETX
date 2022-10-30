import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Person = ({ name, designation, i_link, p_link, l_link, info }) => {
  return (
    <div className="h-100 w-100 inline-block text-center m-10">
      <div className="h-40 w-40 relative m-auto">
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
      <h3 className="font-medium text-[1.1rem] mt-3">{name}</h3>
      <p className="text-[.8rem] text-[#555] block">{designation}</p>
      <p className="text-[.7rem] text-[#555] block mb-[.2rem]">{info}</p>
      <a href={l_link} className="m-2">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={p_link} className="m-2">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
};

export default Person;
