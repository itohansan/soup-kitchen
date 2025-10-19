import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";

export default function () {
  return (
    <footer className=" mx-auto w-[90vw] mt-20 ">
      <div className="flex flex-col items-center justify-center lg:flex-row md:gap-8 p-7 max-w-[1600px] mx-auto">
        <div className="flex flex-row  gap-2 px-4 ">
          <h3 className="text-[18px] md:text-3xl font-mono lg:text-4xl xl:text-5xl 2xl:text-6xl flex flex-1 ">
            Find&nbsp;us
          </h3>
          <div className="flex flex-1 items-center">
            <Socials />
          </div>
        </div>

        <Image
          src="/images/logofo.png"
          alt="logo"
          width={150}
          height={200}
          className=""
        />

        <p className=" flex flex-1 pt-5 text-[17px]  xl:text-3xl  font-bold text-center ">
          Soup&nbsp;made&nbsp;simple. Flavor&nbsp;made&nbsp;Nigerian.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-7 gap-6 text-[20px] 2xl:text-5xl font-semibold ">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/#subscribe">Subscribe</Link>
      </div>
      <p className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Soups. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 text-center mt-2">
        Disclaimer: Images used on this site do not belong to me. All rights
        remain with their respective owners.
      </p>
    </footer>
  );
}
