"use client";

import { NIGERIAN_SOUPS } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SoupList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);

  const filteredSoups =
    selectedCategory === "All"
      ? NIGERIAN_SOUPS
      : NIGERIAN_SOUPS.filter((soup) => soup.category === selectedCategory);

  const categories = [
    "All",
    "Draw Soup",
    "Vegetable Soup",
    "Nut/Seed-Based",
    "Bean-Based",
    "Yam/Cocoyam-Thickened",
  ];

  return (
    <section
      id="recipes"
      ref={sectionRef}
      className="mt-20 transition-all ease-[cubic-bezier(0.68, -0.55, 0.265,1.55)] transition-all  animate__animated animate__fadeInSlightTopLeft "
    >
      <h1 className="text-5xl font-semibold  text-center text-[var(--text-dark)] ">
        Explore Recipes
      </h1>
      <div className="w-[91vw] flex flex-col  mx-auto p-5 rounded-4xl bg-[#f5d7bd] text-[var(--text-dark)] mt-20 ">
        <ul className="flex flex-wrap  gap-3 mb-6 justify-center py-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={` cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300  ${
                selectedCategory === category
                  ? "bg-[var(--deep-red)] text-white"
                  : "bg-white border border-[var(--deep-red)] hover:border-[var(--sunset-orange)] hover:scale-105 "
              }`}
            >
              {/* -accent-red: #ef4444; /* Rich red  --highlight-yellow */}
              {category}
            </li>
          ))}
        </ul>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-6  mx-auto w-full  items-center  px-4 justify-center">
          {filteredSoups.map((soup) => (
            <Link
              key={soup.slug}
              href={`/soups/${soup.slug} `}
              className="flex flex-col  animate__animated animate__fadeInUp animate__delay-0.02s py-5 "
            >
              <div
                className=" rounded-4xl shadow-md  hover:shadow-lg transition-all duration-500 ease-in-out h-full p-2 mx-auto w-52 lg:w-56 xl:w-60 2xl:w-72 hover:scale-105 bg-[var(--bg-light)] text-[var(--deep-red)]
                backdrop-blur-md flexborder border-[var(--foreground)]  hover:scale-[1.03] hover:-translate-y-1 "
              >
                <div
                  className="absolute inset-0 pointer-events-none rounded-4xl 
                     bg-gradient-to-tr from-white/10 via-white/5 to-transparent 
                     opacity-40 hover:opacity-70 transition-opacity duration-500"
                ></div>

                {soup.images?.[0] && (
                  <div
                    className="relative mb-2 rounded-4xl bg-center bg-cover bg-no-repeat h-[200px]  "
                    style={{
                      backgroundImage: `url(${soup.images[0]})`,
                    }}
                  ></div>
                )}
                <div className="gap-1 flex-grow rounded-4xl text-center p-2 h-[200px] ">
                  <h3 className="text-[24px] font-extrabold mt-1">
                    {soup.name}
                  </h3>
                  <span className="text-sm text-[#f48c06] font-medium pb-2">
                    {soup.category}
                  </span>
                  <p className="text-[15px] font-bold line-clamp-  ">
                    {soup.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
