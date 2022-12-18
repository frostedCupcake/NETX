import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';

const Navbar = () => {
  let hidden_class = 'hidden w-full md:block md:w-auto';
  let normal_class = ' w-full md:block md:w-auto';
  const router = useRouter();
  let [hidden, setHidden] = useState(true);

  const active_class =
    'block font-bold py-2 pr-4 pl-3 text-white bg-[#F05A25] rounded md:bg-transparent md:text-[#F05A25] md:p-0 transition-all';
  const not_active_class =
    'block font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#F05A25] md:p-0 transition-all';

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className={`sm:px-16 px-6 py-8  top-0 z-50`}
    >
      <div
        className={`2xl:max-w-[1280px] w-full mx-auto flex justify-between flex-wrap relative items-center gap-8`}
      >
        {' '}
        <div className="hidden md:block absolute w-[50%] inset-0 gradient-01" />
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              NETX
            </span>
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          className={hidden ? hidden_class : normal_class}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-[#F9F6F7] rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-[1rem] md:font-medium md:border-0 md:bg-[#F9F6F7] font-poppins tracking-wide leading-6 ">
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == '/' ? active_class : not_active_class
                  }
                  aria-current="page"
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/people">
                <a
                  className={
                    router.pathname == '/people'
                      ? active_class
                      : not_active_class
                  }
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  People
                </a>
              </Link>
            </li>
            <li>
              <Link href="/research">
                <a
                  className={
                    router.pathname == '/research'
                      ? active_class
                      : not_active_class
                  }
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  Research
                </a>
              </Link>
            </li>
            <li>
              <Link href="/publication">
                <a
                  className={
                    router.pathname == '/publication'
                      ? active_class
                      : not_active_class
                  }
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  Publication
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                      ? active_class
                      : not_active_class
                  }
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
