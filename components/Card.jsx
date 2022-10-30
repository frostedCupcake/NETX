import Image from "next/image";
import React from "react";

const Card = () => {
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
          <h5 className="text-sky-900 text-xl  py-3">Heading</h5>
          <p className="text-[#333333] text-[.9rem] ">
            Computer networks are hard to manage. Given a set of high-level
            requirements (e.g., connectivity, security, reliability), networks
            operators have to specify and coordinate the individual behavior of
            potentially hundreds of devices running complex distributed
            protocols so that they, collectively, compute a compliant forwarding
            state. If this was not hard enough, operators have to specify the
            behavior of each device using low-level (and quite arcane)
            configuration languages which vary across vendors, models, and
            software version. Not surprisingly, this complexity leads to many
            mistakes. Nowadays the majority of the network downtimes are caused
            by humans, not equipment failures.
          </p>
          <button className="text-sky-700 text-left py-5 text-[1rem]">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
