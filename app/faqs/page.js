"use client";

import Hero from "@/components/Hero";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the difference between Nigerian soup and stew?",
      answer:
        "In Nigerian cooking, soups are usually thicker, rich, and eaten with 'swallows' like pounded yam, fufu, or eba. Stews are lighter sauces, often tomato-based, and paired with rice, beans, or yam. Soups like Egusi or Ogbono are distinct from stews like Nigerian tomato stew.",
    },
    {
      question: "What are the most popular Nigerian soups?",
      answer:
        "Some of the most common Nigerian soups include Egusi (melon seed soup), Ogbono (draw soup), Okra soup, Efo Riro, Afang, Edikang Ikong, Nsala (white soup), and Ewedu soup. Each has its own regional origin and unique flavor profile.",
    },
    {
      question: "What ingredients are essential in Nigerian soups?",
      answer:
        "Palm oil, assorted meats, fish, crayfish, stockfish, leafy greens (like ugu or spinach), and thickeners like ground melon seeds (egusi) or ogbono are common. Seasonings like locust beans (iru/ogiri) and hot peppers add signature depth and heat.",
    },
    {
      question: "How do I get the right thickness for my soup?",
      answer:
        "Start with less water and add gradually. Use thickeners like egusi, ogbono, or cocoyam paste. Stir well so the seeds don’t clump, and cook on moderate heat to prevent burning at the bottom.",
    },
    {
      question: "When should I add vegetables to Nigerian soup?",
      answer:
        "Leafy vegetables like ugu, spinach, or waterleaf should be added towards the end of cooking. This keeps them fresh, vibrant, and nutrient-rich instead of dull and overcooked.",
    },
    {
      question: "What swallows can I eat Nigerian soups with?",
      answer:
        "Soups are commonly enjoyed with swallows such as pounded yam, eba (garri), fufu (cassava), semovita, amala, or wheat swallow. Each region has favorites, but any can pair well with Nigerian soups.",
    },
    {
      question: "How do I store leftover Nigerian soup?",
      answer:
        "Allow the soup to cool, then transfer into airtight containers. Refrigerate for up to 3–4 days or freeze for longer storage. Always reheat thoroughly before serving.",
    },
    {
      question: "Can I make Nigerian soups without meat?",
      answer:
        "Yes! Many soups can be prepared vegetarian or pescatarian. Replace meats with fish, dried fish, mushrooms, or simply more vegetables. Egusi and vegetable soups adapt well to meat-free cooking.",
    },
    {
      question: "Where can I buy Nigerian ingredients abroad?",
      answer:
        "African grocery stores in diaspora hubs like London, Houston, or Toronto often stock staples like egusi seeds, dried fish, and yam flour. Online retailers like AfricanFoodSupermarket.com and Amazon are also reliable options.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // wrap with useCall back for better performance

  const toggleFAQ = useCallback(
    (index) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-all">
      <Hero
        className="  bg-[url('/images/eg.jpg')] 
bg-center bg-no-repeat  bg-cover mb-20"
      >
        {/* <Zoom>faq</Zoom> */}
      </Hero>

      <h2 className="text-5xl font-semibold  text-center text-[var(--text-dark)] mb-20     ">
        Frequently Asked Questions
      </h2>
      {/* Main Content */}
      <main className=" py-12 mt- sm:px-6 lg:px-8 bg-[var(--bg-light)] w-full ">
        <div className="max-w-7xl mx-auto ">
          <div className="space-y-8  ">
            {faqs.map((faq, index) => (
              <Fade
                key={index}
                delay={index * 60}
                duration={600}
                fraction={0}
                triggerOnce
              >
                <Slide
                  damping={0.2}
                  direction="down"
                  delay={index * 60}
                  duration={600}
                  fraction={0}
                  triggerOnce
                >
                  <div
                    // key={index}
                    className="border border-[var(--deep-red)] rounded-md"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 flex justify-between items-center hover:bg-[var(--deep-red)] text-[var(--text-dark)]  hover:text-[var(--bg-light)] transition-all ease-out duration-500 focus:outline-none focus:ring-2 focus:ring-red-500/50
                           focus:ring-offset-2 shadow-sm hover:shadow-xl
                        active:transform
                           [&:active]:scale-[0.98]"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-lg font-medium ">
                        {faq.question}
                      </span>
                      <span
                        className={`transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="p-4 text-base text-[var(--text-dark)] leading-relaxed bg-[var(--accent-red)]/70">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Slide>
              </Fade>
            ))}
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-[var(--text-dark)] text-[var(--background)] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* <p>&copy; 2025 Soups. All rights reserved.</p> */}
        </div>
      </footer>
    </div>
  );
}
