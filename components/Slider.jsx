'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import { staggerContainer, textVariant } from '../utils/motion';

const Slider = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={textVariant(1.1)}
        className=" md:w-[55rem] w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] mt-5 lg:h-[27rem] sliderShadow "
      >
        <Carousel>
          <div className="flex h-full items-center justify-center glassmorphism ">
            <Image
              src={
                'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
              }
              layout="fill"
              className=" glassmorphism"
            />
          </div>
          <div className="flex h-full items-center justify-center glassmorphism">
            <Image
              src={
                'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
              }
              layout="fill"
            />
          </div>
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
