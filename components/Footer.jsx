'use client';

import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => (
  <footer className={`sm:px-16 px-6 py-8 relative`}>
    <div className="md:visible hidden footer-gradient" />
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-netx-black-1 opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-netx-black-1">NETX</h4>
          <p className="font-normal text-[14px] text-netx-black-1 opacity-50">
            Copyright © 2023 - 2024 NETX. All rights reserved.
          </p>

          <div className="flex gap-4">
            <div className="text-netx-black-1">
              <Link href="/">
                <a className="m-2 text-xl object-contain cursor-pointer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Link>
              <Link href="/">
                <a className="m-2 text-xl object-contain cursor-pointer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
              <Link href="/">
                <a className="m-2 text-xl object-contain cursor-pointer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
