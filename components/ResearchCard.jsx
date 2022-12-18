'use client';

import { motion } from 'framer-motion';

import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../utils/motion';
import React from 'react';
import Person_small from './Person_small';

const ResearchCard = ({ heading, disc, imageUrl, disc1, disc2 }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto `}
    >
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="">
        <div className="text-[1.2rem]  md:text-[1.3rem] lg:text-[1.5rem] text-center mb-3 py-5 font-medium font-poppins leading-6 tracking-wide">
          {heading}
        </div>
        <div className="flex flex-col  items-center justify-center gap-10 mt-[3rem]">
          <div className="sliderShadow w-[30rem]">
            <img
              src={imageUrl}
              alt="heading-image"
              className="object-contain"
            />
          </div>
          <div className="bg-zinc-300 rounded-md w-[90%] sm:w-[80%] md:w-[70%] xl:w-[45%] p-4">
            <div className="text-[#333333] text-[.9rem]  md:text-[1rem] block font-poppins leading-6 tracking-wide">
              {disc}
            </div>
            <div className="text-[#333333] text-[.9rem] my-4  md:text-[1rem] block font-poppins leading-6 tracking-wide">
              {disc1}
            </div>
            <div className="text-[#333333] text-[.9rem]  md:text-[1rem] block font-poppins leading-6 tracking-wide">
              {disc2}
            </div>
          </div>

          <h2 className="text-center text-2xl lg:text-3xl p-5">People</h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            <Person_small />
            <Person_small />
            <Person_small />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResearchCard;
