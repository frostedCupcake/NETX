import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[1rem] border-t-2  py-[2rem] bg-[#171E27] pb-20">
      <div className="block text-center font-bold text-white mt-5 text-xl">
        NETX
      </div>
      <div className="flex flex-row justify-around items-center mt-10">
        <div className="flex flex-col md:flex-row md:gap-[10rem] lg:gap-[12rem] gap-[2rem] text-center md:text-left pt-[1rem]">
          <div className="">
            <h1 className="text-white text-[.8rem] py-1uppercase font-bold">
              Located at
            </h1>
            <ul className="text-white text-[.7rem]">
              <li>Location :</li>
              <li>Indian Institute of technology Hyderabad</li>
              <li>Near NH-65, Sangareddy, kandi,</li>
              <li>Telangana 502285</li>
            </ul>
          </div>

          <div className="">
            <h1 className="text-white text-[.8rem] py-1uppercase font-bold">
              Contact us
            </h1>
            <ul className="text-white text-[.7rem]">
              <li>LPhone:</li>
              <li>(+91) 9946876778</li>
              <li>Email us at:</li>
              <li>next@iith.ac.in</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-white text-[.8rem] py-1uppercase font-bold">
              Follow us
            </h1>
            <div className="text-white">
              <a href={"/"} className="m-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={"/"} className="m-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={"/"} className="m-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
