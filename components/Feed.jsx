'use client';

import { motion } from 'framer-motion';

import { TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import React from 'react';

const Feed = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row-reverse flex-col gap-8 md:my-20 my-5 justify-center items-center `}
    >
      <div className="flex flex-col md:flex-row justify-center items-center mb-[8rem] mt-[4rem] gap-10">
        {' '}
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 flex justify-center items-center`}
        >
          <div className="w-[80%] h-[80%] md:w-[60%] md:h-[60%]  hidden md:block">
            <img
              src={
                'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
              }
              layout="fill"
              alt="get-started"
              className=" object-contain rounded-sm shadow-md"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="lg:w-[22rem] md:w-[15rem] w-[80%] glassmorphism p-5 rounded-sm bg-[#F9F6F7]"
        >
          <TypingText title="LATEST TWEETS" textStyles={'text-center'} />
          <div className="text-[.8rem] flex flex-col md:text-[.9rem] lg:text-[1rem] font-poppins">
            <ul className="mt-2 font-poppins">
              <li className="border-b border-gray-200 py-2 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quam!
                <p className="block py-1 text-gray-500 text-[.7rem]">
                  11 Nov 2022
                </p>
              </li>
              <li className="border-b border-gray-200 py-2 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quam!
                <p className="block py-1 text-gray-500 text-[.7rem]">
                  11 Nov 2022
                </p>
              </li>
              <li className="border-b border-gray-200 py-2 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quam!
                <p className="block py-1 text-gray-500 text-[.7rem]">
                  11 Nov 2022
                </p>
              </li>
              <li className=" py-2 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quam!
                <p className="block py-1 text-gray-500 text-[.7rem]">
                  11 Nov 2022
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feed;
