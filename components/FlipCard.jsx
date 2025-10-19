"use client";
import React, { useState, useEffect } from "react";

export default function FlipCard({
  front,
  back,
  className = "",
  delay = 9000, // flip after 5s on hover
  flipOnClick = true,
}) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (hovered) {
      timer = setTimeout(() => setFlipped(true), delay);
    } else {
      setFlipped(false);
    }
    return () => clearTimeout(timer);
  }, [hovered, delay]);

  const handleClick = () => {
    if (flipOnClick) setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`relative [perspective:1000px] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full  transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-4xl   shadow-md bg-white [backface-visibility:hidden] font-extralight">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center shadow-md  [transform:rotateY(180deg)] rounded-4xl [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}
