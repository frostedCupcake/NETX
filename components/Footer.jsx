import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="my-[1rem] border-t-2  py-[2rem]">
      <div className="block text-center font-bold ">NETX</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-[.8rem] text-zinc-500 py-1">
          Copyright © 2022 NETX
        </div>
        <div className="links">
          <Link href="/Contact ">
            <a className="block text-[.9rem]  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 ">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
