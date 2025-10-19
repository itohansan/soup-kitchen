import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className=" flex flex-1  gap-4 items-center cursor-pointer md:text-2xl xl:text-3xl mr-5">
      <a
        className=""
        href="https://facebook.com"
        target="_blank"
        rel="noopenr noreferrer "
      >
        <FaFacebook className="hover:text-[var(--deep-orange)]  transition " />
      </a>
      <a href="https://x.com" target="_blank" rel="noopenr noreferrer">
        <FaTwitter className="hover:text-[var(--deep-orange)] transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopenr noreferrer">
        <FaInstagram className="hover:text-[var(--deep-orange)]  transition" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopenr noreferrer">
        <FaYoutube className="hover:text-[var(--deep-orange)] transition" />
      </a>
      <a href="https://pintrest.com" target="_blank" rel="noopenr noreferrer">
        <FaPinterest className="hover:text-[var(--deep-orange)]  transition" />
      </a>
    </div>
  );
}
