'use client';

import { motion } from 'framer-motion';

import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../utils/motion';
import Head from 'next/head';
import Person from '../components/Person';
import data from '../data/person';

const heroSText =
  'font-thin  xl:text-[45px] md:text-[35px] sm:text-[30px] text-[25px]  uppercase text-netx-black-1 block tracking-[.3em]';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NETX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row-reverse flex-col gap-8 md:my-20 my-5 justify-center items-center `}
      >
        <div className="sm:w-[30rem]  md:w-[50rem] mx-auto py-10 text-center">
          <motion.div variants={textVariant(1.1)} className={heroSText}>
            our TEAM
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex justify-center items-center mx-auto"
          >
            <Person
              name={'Praveen Tammana'}
              designation={'Assistant Proffessor'}
              i_link={''}
              p_link={''}
              info={'Department of CSE, IIT Hyderbad, India'}
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {data.map((item) => (
              <Person
                name={item.name}
                designation={item.designation}
                i_link={item.i_link}
                p_link={item.p_link}
                info={item.info}
                key={item.name}
                role={item.role}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
