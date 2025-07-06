"use client";

import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("what-i-do");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6">
      <BackgroundGradientAnimation>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold">
            I build things that solve problems, waste time, or both.
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            Here's some of it. Scroll down if you're curious. Or bored. Either works.
          </p>
          <button
            onClick={scrollToSection}
            className="mt-6 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Show me what you do
          </button>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
} 