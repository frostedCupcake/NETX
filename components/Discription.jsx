'use client';

import { motion } from 'framer-motion';

import { TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Discription = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row-reverse flex-col-reverse gap-8 md:my-20 my-5 justify-center items-center `}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="lg:w-[22rem] h-[30rem] md:w-[15rem] glassmorphism p-5 rounded-sm bg-[#F9F6F7] "
      >
        <TypingText title="LATEST NEWS" textStyles={'text-center'} />
        <div className="text-[.8rem] flex flex-col md:text-[.9rem] lg:text-[1rem] font-poppins ">
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
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col glassmorphism p-5 rounded-sm bg-[#F9F6F7] h-[30rem]"
      >
        <TypingText title="ABOUT NETX" textStyles={'text-center'} />
        <p className="font-normal sm:text-[18px] text-[16px] text-left text-netx-black-1 mt-[1.5rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.llam facilis
          debitis ea iste aperiam!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          facilis debitis ea iste aperiam! Saepe ratione at consectetur ipsa.
          Eveniet deleniti perspiciatis voluptatem corporis quae possimus? Nisi
          veniam consequatur sit! facilis debitis ea iste aperiam! Saepe ratione
          at consectetur ipsa Nisi veniam consequatur sit!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi
          cumque atque amet fugiat optio impedit an sed totam adipisicing elit.
          Ipsum animi cumque atque amet fugiat optio impedit a sed totam
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Discription;
