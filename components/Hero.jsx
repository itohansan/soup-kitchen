"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./Navbar";

export default function Hero({ children, className, style = {} }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const sectionRef = useRef(null);

  // 🔹 Intersection animation (spread / converge)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("lab-spread");
          sectionRef.current?.classList.remove("lab-converge");
        } else {
          sectionRef.current?.classList.add("lab-converge");
          sectionRef.current?.classList.remove("lab-spread");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Shrink effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={style}
      className={`relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
        isShrunk
          ? "w-[97vw] h-[95vh] translate-y-[-10px] scale-95"
          : "w-full h-screen scale-100"
      }  bg-[var(--bg-light)] px-4 sm:px-6 rounded-4xl flex flex-col justify-center items-center text-[var(--text-dark)] mx-auto  ${
        className || ""
      }`}
    >
      {/* ✅ Children (e.g., FlipCard) render here */}
      <div className="flex-grow flex items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
