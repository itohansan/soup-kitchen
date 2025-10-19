"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import LiquidGlass from "@/components/LiquidGlass";
import Hero from "@/components/Hero";
import FlipCard from "@/components/FlipCard";
import { Zoom } from "react-awesome-reveal";

export default function AboutPage() {
  const [flipped, setFlipped] = useState(false);
  const flipOnHover = false;
  const [isShrunk, setIsShrunk] = useState(false);

  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentImg = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          } else {
            setInView(false); // remove this line if you want it to trigger only once
          }
        });
      },
      { threshold: 0.4 } // trigger when 40% of image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (currentImg) observer.unobserve(currentImg);
    };
  }, []);

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

  const front = (
    <div className="px-10 md:px-20  rounded-4xl grid grid-cols-2 gap-6 ">
      <p className=" leading-relaxed text-[var(--text-dark)]">
        Welcome to Soups, your heartfelt home for authentic Nigerian soups and
        recipes. Born from generations of family kitchens, our mission is to
        preserve, celebrate, and share the vibrant soul of Nigerian cuisine with
        food lovers everywhere. From the nutty warmth of
        <span className="italic font-bold"> Egusi</span> that wraps you like a
        hug, to the bold, leafy spice of
        <span className="italic font-bold"> Afang</span>, echoing coastal tales,
        every spoonful weaves stories of culture, family gatherings, and
        unbreakable bonds.
      </p>
      <div
        className="w-full bg-[url('/images/spics.jpeg')] 
            bg-contain 
            bg-center
            bg-no-repeat "
      ></div>
    </div>
  );

  const back = (
    <div className="flex items-center justify-center w-full h-full bg-[url('/images/ingch.png')]  text-white rounded-4xl bg-cover bg-center bg-no-repeat"></div>
  );

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center ">
      {/* <div
        className={`${
          isShrunk
            ? "w-[97vw] h-[95vh] translate-y-[-10px] scale-95"
            : "w-full h-screen scale-100"
        } 
 
            justify-center 
            items-center 
            mx-auto 
            transition-all 
            duration-[1200ms] 
            rounded-4xl
            ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
            bg-[url('/images/hero.jpg')] 
            bg-cover
            bg-center
            bg-no-repeat`}
      ></div> */}
      <Hero
        className=" justify-center 
            items-center 
            mx-auto 
            transition-all 
            duration-[1200ms] 
            rounded-4xl
            ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
            bg-[url('/images/hero.jpg')] 
            bg-cover
            bg-center
            bg-no-repeat mb-20"
      />
      <h1 className="text-center uppercase ] text-5xl text-[var(--text-dark)] font-bold mb-20">
        About us
      </h1>
      <section className="mb-20 h-screen  ">
        <FlipCard
          className="w-[93vw] h-full  cursor-pointer ease-in-out mx-auto "
          front={front}
          back={back}
          delay={2000} // optional
          flipOnClick={true}
        />
      </section>

      {/* Our Vision */}
      <section>
        <h2 className="text-5xl text-center font-bold text-[var(--text-dark)]   ">
          Our Vision
        </h2>

        <div
          ref={imgRef}
          className={`shadow-md rounded-4xl px-6 mt-20 py-10 w-[93vw] bg-[var(--bg-light)] text-[var(--text-dark)] mx-auto scale-up ${
            inView ? "in-view" : ""
          } transition-all ease-in-out`}
        >
          <p className="text-[var(--text-dark)]leading-relaxed">
            We believe that food is more than just nourishment—it’s a bridge to
            culture and identity. By curating detailed recipes, cooking
            techniques, and the stories behind each dish, we aim to make it easy
            for anyone to recreate these traditional flavors at home.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white  p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold  text-[var(--deep-red)]">
                Authenticity
              </h3>
              <p className="text-sm  mt-2">
                Every recipe stays true to its Nigerian roots with carefully
                documented ingredients and preparation steps.
              </p>
            </div>
            <div className=" p-6 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold text-[var(--deep-red)] ">
                Community
              </h3>
              <p className="text-sm  mt-2">
                We’re building a community of food lovers who cherish Nigerian
                culture and flavors.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold ">Accessibility</h3>
              <p className="text-sm  mt-2">
                From Lagos to London, our recipes are written for both beginners
                and seasoned cooks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
}
