import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const contact = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-20 items-center justify-center py-10">
      <div className="map m-10 cursor-pointer">
        <Link href={"https://g.page/iith-c-block?share"}>
          <Image
            src={
              "https://res.cloudinary.com/dbmw0xoar/image/upload/v1669441582/ecell/NetX/Screenshot_from_2022-11-26_11-14-43_wgbqan.png"
            }
            height="450"
            width="450"
            alt="heading-image "
            className=" hover:scale-125 transition"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-row gap-3">
          <div className="mt-[.1rem]">
            <FontAwesomeIcon icon={faLocation} />
          </div>
          <ul className="details md:tracking-wider leading-6 font-poppins">
            <li>Indian Institute of technology Hyderabad</li>
            <li>Near NH-65, Sangareddy, kandi,</li>
            <li>Telangana 502285</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 mt-8">
          <div className="mt-[.1rem]">
            <FontAwesomeIcon icon={faPhone} />
          </div>

          <ul className="details md:tracking-wider leading-6 font-poppins">
            <li>(+91) 9946876778</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 mt-8">
          <div className="mt-[.1rem]">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <ul className="details md:tracking-wider leading-6 font-poppins">
            <li>next@iith.ac.in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
