'use client';

import { motion } from 'framer-motion';

import { staggerContainer, textVariant } from '../utils/motion';

const heroHeading =
  'font-medium  xl:text-[100px] md:text-[60px] sm:text-[40px] text-[30px]  uppercase text-netx-black-1 tracking-wide lg:-mb-[1rem] mb-[.5rem]';
const heroSText =
  'font-thin  xl:text-[45px] md:text-[35px] sm:text-[30px] text-[20px]  uppercase text-netx-black-1 block tracking-[.3em]';

const Hero = () => (
  <section className={`sm:pl-16 pl-6 my-[5rem]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={heroHeading}>
          NETX
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col justify-center items-center"
        >
          <h1 className={heroSText}>Network systems </h1>
          <h1 className={`${heroSText} lg:mb-5`}>and security </h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
