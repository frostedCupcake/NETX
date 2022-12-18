'use client';

import { motion } from 'framer-motion';

import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../../utils/motion';
import React from 'react';
import Card from '../../components/Card';
import data from '../../data/research';

const heroSText =
  'font-thin  xl:text-[45px] md:text-[35px] sm:text-[30px] text-[25px]  uppercase text-netx-black-1 block tracking-[.3em] text-center my-10';

const research = () => {
  return (
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
        {data.map((item) => (
          <Card
            heading={item.heading}
            small_disc={item.small_disc}
            disc={item.disc}
            key={item.heading}
            reference={item.reference}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default research;
