"use client";
import React, { useEffect, useRef, useState } from "react";

export default function LiquidGlass({
  color1 = "#e85d04", // Base gradient start
  color2 = "#f48c06", // Base gradient end
  waveFrom = "rgba(52,211,153,0.25)", // shimmer start
  waveTo = "rgba(251,191,36,0.25)", // shimmer end
  blur = 12, // glass blur
  speed = 8, // shimmer animation speed (seconds)
  direction = "to right", // base gradient direction
  radius = 20,
  displace = 10, // mouse movement intensity
  className = "",
  children,
}) {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      setMouse({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMove);
      container.addEventListener("touchmove", handleMove, { passive: true });
      container.addEventListener("mouseleave", () =>
        setMouse({ x: 0.5, y: 0.5 })
      );
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMove);
        container.removeEventListener("touchmove", handleMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: radius,
        background: `linear-gradient(${direction}, ${color1}, ${color2})`,
      }}
    >
      {/* Glass blur overlay */}
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          borderRadius: radius,
          filter: `blur(${blur}px)`,
        }}
      />

      {/* Animated shimmer layer (reacts to mouse) */}
      <div
        className="absolute inset-0 opacity-60 animate-liquidFlow"
        style={{
          backgroundImage: `linear-gradient(120deg, ${waveFrom}, ${waveTo}, transparent, ${waveFrom})`,
          backgroundSize: "300% 300%", // make gradient larger to see the motion
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 50%",
          transition: "background-position 0.5s ease",
          backgroundSize: "200% 200%",
          borderRadius: radius,
          animationDuration: `${speed}s`,
          transform: `translateX(${(mouse.x - 0.5) * displace}px)
                      translateY(${(mouse.y - 0.5) * displace}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes liquidFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-liquidFlow {
          animation: liquidFlow linear infinite;
        }
      `}</style>
    </div>
  );
}
