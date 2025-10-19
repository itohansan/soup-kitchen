"use client";
import Link from "next/link";
import { navLinks } from "@/public/assets";

export default function DesktopNav() {
  const desktopLinks = navLinks.filter(
    (link) => link.label !== "Home" && link.label !== "Subscribe"
  );

  return (
    <div className="hidden md:flex justify-between items-center w-full px-6 h-[7vh] cursor-pointer bg-[var(--bg-light)]">
      <Link href="/">
        <p className="flex flex-col text-[18px] font-extrabold leading-tight py-3 px-4 ">
          <span className="text-[var(--deep-red)]">Soup</span>
          <span className="text-[var(--deep-orange)] text-[12px] translate-x-4">
            Kitchen
          </span>
        </p>
      </Link>

      <ul className="flex items-center text-[18px] gap-6 font-bold text-[var(--text-dark)]">
        {desktopLinks.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer hover:text-[var(--deep-orange)] transition-colors"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
