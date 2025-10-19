// components/Navbar/MobileNav.jsx
"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import LiquidGlass from "./LiquidGlass";
import { navLinks } from "@/public/assets";
import Image from "next/image";

export default function MobileNav({ isOpen, toggleMenu }) {
  return (
    <div
      className={`md:hidden relative w-full flex justify-between h-[7vh] text-center items-center text-2xl py-9 bg-[var(--bg-light)]`}
    >
      {!isOpen && (
        <Link href="/">
          <p className="flex flex-col text-[18px] font-extrabold leading-tight py-3 px-4 ">
            <span className="text-[var(--deep-red)]">Soup</span>
            <span className="text-[var(--deep-orange)] text-[12px] translate-x-4">
              Kitchen
            </span>
          </p>
        </Link>
      )}
      {!isOpen && (
        <div
          className="px-4 py-3 z-50 cursor-pointer absolute right-4 self-center"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="text-3xl font-extrabold text-[var(--deep-red)] hover:animate-pulse hover:scale-105 transition-transform ease-in-out border border-[var(--deep-red)] hover:bg-[var(--deep-orange)] hover:text-[var(--bg-light)]" />
        </div>
      )}

      {isOpen && (
        <button
          className="absolute right-8 z-50  bg-[var(--bg-light)] hover:bg-gray-300 px-3 py-1 border border-black hover:rotate-45  text-sm transition-all ease-in"
          onClick={toggleMenu}
        >
          X
        </button>
      )}
    </div>
  );
}
