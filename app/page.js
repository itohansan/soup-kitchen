"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NIGERIAN_SOUPS } from "@/public/assets";
import EmailForm from "@/components/EmailForm";
import Socials from "@/components/Socials";
import NavBar from "@/components/Navbar";
import Link from "next/link";
import "animate.css";
import Hero from "@/components/Hero";
import SoupList from "@/components/SoupList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" text-emerald-950 w-full h-full ">
      <Hero>
        <div
          className="flex justify-center items-center flex-col 
      "
        >
          <h1 className="text-emerald-950 text-[16px] font-bold sm:text-3xl   ">
            Soup&nbsp;made&nbsp;simple. Flavor&nbsp;made&nbsp;Nigerian.
          </h1>
          <p className="text-[12px] sm:text-[16px] ">
            Bringing the warmth of homemade soups straight to your doorstep just
            one click away.
          </p>
          {/* click buton */}
        </div>
        <div className=" justify-center items-center ">
          <Image
            src="/images/faqL.jpg"
            alt="Next.js logo"
            width={380}
            height={48}
            priority
          />
        </div>
      </Hero>
      <SoupList />

      {/* subscribe */}
      <section id="subscribe" className="mt-20 scroll-mt-20 h-screen mb-80">
        <h1 className="text-center uppercase ] text-5xl text-[var(--text-dark)] font-bold mb-10">
          subscribe
        </h1>

        <div className="w-[91vw]  rounded-4xl bg-[var(--sunset-orange)] mx-auto mt-20 p-6 ">
          <div className=" w-full  flex flex-col items-center pt-5 ">
            <Image
              src="/images/ingri.jpg"
              alt="logo"
              width={200}
              height={200}
              className="mb-6"
            />
            <div className="w-full px-4">
              <h2 className="text-2xl font-medium tracking-wider mb-6 text-center">
                WANT MORE RECIPES?
              </h2>
              <p className=" text-[16px] sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
                Subscribe here and we&apos;ll send you an email as new recipes
                are published
              </p>
              <p className="text-[16px] lg:text-2xl text-center font-extrabold">
                As a thank you, we&apos;d love to send you our fan favourites
                ebook!
              </p>

              <EmailForm />
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
