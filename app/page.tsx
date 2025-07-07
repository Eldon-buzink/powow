"use client";

import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import WhoAmI from "@/components/WhoAmI";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import confetti from "canvas-confetti";
import { ColourfulText } from "@/components/ui/ColourfulText";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";

const projects = [
  {
    title: "Giftr",
    description: "Send the perfect GIF, every time. Even to your boss.",
    image: "/images/project1.jpg",
  },
  {
    title: "SignEasy",
    description: "Sign stuff online. No printer, no problem.",
    image: "/images/project2.jpg",
  },
  {
    title: "Weird Side Project",
    description: "A project so weird, even I don't know what it does.",
    image: "/images/project3.jpg",
  },
  {
    title: "Coming Soon",
    description: "A new project is brewing... Stay tuned!",
    image: "/images/project1.jpg",
    comingSoon: true,
  },
];

const bentoCards = [
  {
    title: "Product Management",
    emoji: "🧠",
    color: "from-pink-100 to-pink-50",
    size: "row-span-2 col-span-2",
    desc: "Turning chaos into features people love."
  },
  {
    title: "CRO",
    emoji: "📈",
    color: "from-purple-100 to-purple-50",
    size: "row-span-1 col-span-1",
    desc: "Making more people click the button."
  },
  {
    title: "Online Marketing",
    emoji: "💻",
    color: "from-blue-100 to-blue-50",
    size: "row-span-1 col-span-1",
    desc: "Getting the word out, one meme at a time."
  },
  {
    title: "Breaking & fixing things",
    emoji: "🔧",
    color: "from-yellow-100 to-yellow-50",
    size: "row-span-1 col-span-2",
    desc: "If it ain't broke, I probably haven't touched it yet."
  },
];

export default function Home() {
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const whoAmIRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConfettiAndScroll = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    scrollToSection(whoAmIRef);
  };

  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden bg-white">
      {/* HERO SECTION */}
      <BackgroundGradientAnimation fadeToWhite>
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-transparent">
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-6">
            <img src="/images/1604824879858.jpeg" alt="Your avatar" className="w-32 h-32 rounded-full border-4 border-pink-200 shadow-lg object-cover mb-2" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Hey, I'm <ColourfulText text="Eldon" />!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              I build digital things for fun, for work, and sometimes just to see what happens. If you want to collaborate, chat, or send me a meme, hit me up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <button
                onClick={handleConfettiAndScroll}
                className="px-8 py-3 rounded-full border-2 border-pink-400 bg-white hover:bg-pink-100 hover:border-pink-500 text-pink-600 font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                Get to know me
              </button>
              <a
                href="mailto:you@example.com"
                className="px-8 py-3 rounded-full border-2 border-blue-400 bg-white hover:bg-blue-100 hover:border-blue-500 text-blue-600 font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Let's talk
              </a>
            </div>
          </div>
        </section>
      </BackgroundGradientAnimation>

      {/* WHO AM I SECTION */}
      <div ref={whoAmIRef} className="w-full flex justify-center">
        <div className="w-full max-w-5xl mx-auto my-6 sm:my-12 rounded-3xl px-4">
          <WhoAmI />
        </div>
      </div>

      {/* WHAT I DO SECTION */}
      <div ref={whatIDoRef} className="w-full flex justify-center">
        <div className="w-full max-w-5xl mx-auto my-6 sm:my-12 rounded-3xl px-4">
          <section className="w-full py-10 sm:py-16 px-0 sm:px-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
              What I Do
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 bento-grid">
              {bentoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col justify-center items-center p-6 sm:p-8 rounded-3xl shadow-lg bg-gradient-to-br ${card.color} ${card.size} min-h-[140px] md:min-h-[180px]`}
                >
                  <span className="text-4xl sm:text-5xl mb-2">{card.emoji}</span>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section className="w-full max-w-5xl mx-auto py-10 sm:py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Stuff I Built So Far
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${project.comingSoon ? 'opacity-70 grayscale pointer-events-none' : ''}`}
            >
              {/* Left: Title + description */}
              <div className="flex-1 p-8 flex flex-col items-start justify-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center">
                  {project.title}
                  {project.comingSoon && (
                    <span className="ml-3 px-3 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full animate-pulse">Coming Soon</span>
                  )}
                </h3>
                <p className="text-gray-600 text-lg mb-2">{project.description}</p>
              </div>
              {/* Right: Image placeholder */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 p-4 w-full h-40 sm:h-48 relative">
                <img src={project.image} alt={project.title + ' demo'} className="rounded-xl w-full h-full object-cover shadow" />
                {project.comingSoon ? (
                  <span className="absolute top-2 left-2 bg-yellow-200 text-yellow-700 text-xs px-2 py-0.5 rounded-full shadow animate-pulse">Soon</span>
                ) : (
                  <span className="absolute top-2 left-2 bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full shadow">GIF</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 