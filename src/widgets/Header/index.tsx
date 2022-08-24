import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import discord from "../../assets/discord.svg";
import { NavLink, UserMenu } from "../../components";
import logo from "../../assets/logo.png";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 shadow-sm">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center lg:max-h-20">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold dark:text-white lg:text-3xl  select-none hover:cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
            <Link href="/">
              {/* <span>
                <span className="text-[#467BA5]">Utopia</span> Roleplay
              </span> */}
              <Image src={logo} width={140} height={40} />
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
                  fillRule="evenodd"
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
          <a
            href="https://discord.gg/exQF9SAB9C"
            target="_blank"
            rel="noreferrer">
            <span className="transition-colors duration-200 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-[#467BA5] select-none hover:cursor-pointer">
              Discord
            </span>
          </a>
        </div>
        {session ? (
          <UserMenu />
        ) : (
          <button
            onClick={() => signIn()}
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-[#5865F2] rounded-[5px] lg:mt-0 hover:bg-[#525ee4] lg:w-auto transition-all duration-150`}>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Image src={discord} alt="discord" />
              <span>Prijava</span>
            </div>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
