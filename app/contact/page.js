"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "animate.css";
import Hero from "@/components/Hero";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import NavBar from "@/components/Navbar";

export default function HeroImage() {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    soupName: "",
    category: "",
    ingredients: "",
    preparation: "",
    swallows: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submotted", formData);

    setFormData({
      name: "",
      email: "",
      soupName: "",
      category: "",
      ingredients: "",
      preparation: "",
      swallows: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="justify-center ">
      <Hero
        className="bg-[url('/images/ingg.jpg')] 
bg-center bg-no-repeat bg-cover mb-20"
      ></Hero>

      <h2 className="text-5xl font-semibold  text-center text-[var(--text-dark)] uppercase">
        contact us
      </h2>
      <div className="min-h-screen w-[91vw] mx-auto flex items-center justify-center sm:px-6 lg:px-8 mt-20">
        <Fade triggerOnce duration={500}>
          <Zoom
            className="transition-all duration-[1200ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
            scale={0.92}
            duration={800}
            delay={150}
            triggerOnce
            fraction={0.001}
            style={{ transformOrigin: "center center" }}
          >
            <div className=" w-[90vw] space-y-10 mx-auto bg-white p-8 rounded-4xl shadow-md">
              <div>
                <h2 className="text-3xl font-extrabold  text-[var(--text-dark)] text-center">
                  Share Your Nigerian Soup Recipe
                </h2>
                <p className="mt-2 text-center text-[18px] text-[var(--dark-orange)]">
                  <span>Got a delicious recipe? </span>
                  <br className="hidden sm:inline md:hidden" />
                  <span>We&apos;d love to hear from you!</span>
                </p>

                <p className="mt-3 text-center text-[16px] text-[var(--sunset-orange)]">
                  Fill out the form below to share your recipe.
                </p>
              </div>
              <form className="mt-8 space-y-6  " onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)]  sm:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#370617] focus:border-[var(--sunset-orange)]  sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="soupName"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Soup Name
                    </label>
                    <input
                      id="soupName"
                      name="soupName"
                      type="text"
                      value={formData.soupName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)]  sm:text-sm"
                      placeholder="e.g., Egusi Soup"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Soup Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)]  sm:text-sm"
                    >
                      <option value="">Select a category</option>
                      <option value="Nut/Seed-Based">Nut/Seed-Based</option>
                      <option value="Draw Soup">Draw Soup</option>
                      <option value="Vegetable Soup">Vegetable Soup</option>
                      <option value="Cocoyam-Thickened">
                        Cocoyam-Thickened
                      </option>
                      <option value="Bean-Based">Bean-Based</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="ingredients"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Ingredients (include amounts)
                    </label>
                    <textarea
                      id="ingredients"
                      name="ingredients"
                      rows="4"
                      value={formData.ingredients}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)] sm:text-sm"
                      placeholder="e.g., 4 cups ground melon seeds, 1 cup palm oil, ..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="preparation"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Preparation Steps
                    </label>
                    <textarea
                      id="preparation"
                      name="preparation"
                      rows="4"
                      value={formData.preparation}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)]  sm:text-sm"
                      placeholder="e.g., Heat palm oil, add ground egusi, ..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="swallows"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Best Swallows to Pair With
                    </label>
                    <input
                      id="swallows"
                      name="swallows"
                      type="text"
                      value={formData.swallows}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)]   sm:text-sm"
                      placeholder="e.g., Pounded Yam, Eba, Amala"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--text-dark)]"
                    >
                      Additional Comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[var(--sunset-orange)] sm:text-sm"
                      placeholder="Any additional details or notes about your recipe"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mx-auto flex justify-center py-3 px-4 border border-transparent rounded-2xl shadow-md text-[18px] font-bold text-white bg-[var(--sunset-orange)] 
             hover:bg-[var(--light-orange)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase mt-10 mb-7"
                  >
                    Submit Recipe
                  </button>
                </div>
              </form>
            </div>
          </Zoom>
        </Fade>
      </div>
    </div>
  );
}
