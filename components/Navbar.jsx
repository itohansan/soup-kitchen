"use client";

import { useEffect, useState, useRef } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import LiquidGlass from "./LiquidGlass";
import { navLinks } from "@/public/assets";
import { usePathname } from "next/navigation";

export default function NavBar({ className = "", animated = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0); // useRef so it doesn't re-render constantly
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ignore small scrolls to prevent flicker
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down → hide navbar
        setIsVisible(false);
      } else {
        // scrolling up → show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // show navbar on load (slide down)
    setTimeout(() => setIsVisible(true), 500);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // reload on route change

  // useEffect(() => {
  //   setIsVisible(false);
  //   const timeout = setTimeout(() => setIsVisible(true), 500);
  //   return () => clearTimeout(timeout);
  // }, [pathname]);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-[7vh] z-40 ${className} ${
          animated
            ? `transition-transform duration-900 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
              }`
            : ""
        }`}
      >
        <DesktopNav />
        <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-[7vh] left-0 w-full h-[calc(100vh-7vh)] z-30">
          <LiquidGlass
            color1="#ffffff10"
            color2="#ffffff10"
            waveFrom="#fffff33"
            waveTo="fffff15"
            speed={0.2}
            className="h-full w-full backdrop-blur-md"
          >
            <div className="flex h-full flex-col pt-[7vh] items-center justify-center gap-8 text-[22px] font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="hover:scale-110 transition-transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </LiquidGlass>
        </div>
      )}
    </>
  );
}
