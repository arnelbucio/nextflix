"use client";

import { useEffect, useState } from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import defaultAvatar from "../public/default-avatar.jpg";
import NetflixLogo from "./NetflixLogo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? "bg-[#141414]" : ""}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <NetflixLogo height={25} fill={`rgb(229, 9, 20)`} />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New &amp; Popular</li>
          <li className='headerLink'>My List</li>
          <li className='headerLink'>Browse by Languages</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <MagnifyingGlassIcon className='hidden h-6 w-6 sm:inline' />
        <BellIcon className='hidden h-6 w-6 sm:inline' />
        <Link href='#'>
          <Image
            src={defaultAvatar}
            alt='avatar'
            height={32}
            className='rounded-[4px]'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
