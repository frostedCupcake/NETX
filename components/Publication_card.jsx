import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import Link from 'next/link';

const Publication_card = ({ name, people, link, pdf, talk, location }) => {
  return (
    <div className="flex flex-col md:items-start items-center md:ml-[20%]">
      <div className="flex flex-col md:flex-row md:my-[1.2rem] my-[1rem] gap-5 ">
        <div className="image md:block hidden text-netx-black-1 font-thin text-[8rem]">
          <AiOutlineBook />
        </div>
        <div className="content flex flex-col lg:md:w-[45rem] md:w-[35rem] w-[20rem] mx-auto">
          <h5 className="text-[.8rem] md:text-[1rem] text-netx-dark  py-1 leading-6 tracking-wide font-bold">
            {name}
          </h5>
          <p className="text-[#333333]  text-[.8rem] pt-1 md:text-[.9rem]">
            {people}
          </p>
          <p className="text-[#333333] text-[.8rem] md:text-[.9rem]">
            <Link href={link[1]}>
              <a className="border-b-[1px] md:text-[.9rem] border-netx-dark leading-6 tracking-wide font-bold">
                {link[0]}
              </a>
            </Link>{' '}
            {location}{' '}
            <Link href={pdf}>
              <a className=" leading-6 tracking-wide font-bold md:text-[.9rem]">
                [pdf]
              </a>
            </Link>{' '}
            <Link href={talk}>
              <a className=" leading-6 tracking-wide font-bold md:text-[.9rem]">
                [talk]
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication_card;
