'use client';

import { motion } from 'framer-motion';

import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../utils/motion';
import React from 'react';
import Publication_card from '../components/Publication_card';
import { publicationData } from '../constants/index';

const publication = () => {
  const heroSText =
    'font-thin  xl:text-[45px] md:text-[35px] sm:text-[30px] text-[25px]  uppercase text-netx-black-1 block tracking-[.3em] text-center my-10';

  return (
    <div className="pt-[2rem] py-[4rem]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.div variants={textVariant(1.1)} className={heroSText}>
          our research areas
        </motion.div>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          {publicationData.map((item) => (
            <Publication_card
              name={item.name}
              people={item.people}
              link={item.link}
              pdf={item.pdf}
              talk={item.talk}
              slides={item.slides}
              location={item.location}
              key={item.name}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default publication;
