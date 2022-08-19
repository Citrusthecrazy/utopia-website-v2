import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { FC, useState } from "react";
import discord from "../../assets/discord.svg";
import { NavLink } from "../../components";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 ">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center lg:max-h-20">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold dark:text-white lg:text-3xl  select-none hover:cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
            <Link href="/">
              <span>
                <span className="text-[#467BA5]">Utopia</span> Roleplay
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={toggleMobileMenu}>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0 lg:gap-4`}>
          <NavLink href="/" text="Početna" />
          <NavLink href="/donacije" text="Donacije" />
          <NavLink href="/discord" text="Discord" />
        </div>

        <a
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-[#5865F2] rounded-[5px] lg:mt-0 hover:bg-[#525ee4] lg:w-auto`}
          href="#">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src={discord} alt="discord" />
            <span>Prijava</span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
