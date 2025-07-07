"use client";

import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { motion } from "framer-motion";

export default function WhatIDo() {
  const cards = [
    {
      title: "Frontend Developer",
      desc: "I build user interfaces that don't make people want to throw their computers out the window.",
      emoji: "💻",
      bg: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)"
    },
    {
      title: "Problem Solver",
      desc: "I turn complex problems into simple solutions. Sometimes they even work.",
      emoji: "🔧",
      bg: "linear-gradient(135deg, #fff5e1 0%, #fff1dd 100%)"
    },
    {
      title: "Coffee Consumer",
      desc: "I drink coffee and write code. Sometimes in that order, sometimes not.",
      emoji: "☕",
      bg: "linear-gradient(135deg, #fff5e1 0%, #fff1dd 100%)"
    },
    {
      title: "Bug Creator",
      desc: "I create bugs, then fix them. It's like a never-ending cycle of chaos and order.",
      emoji: "🐛",
      bg: "linear-gradient(135deg, #fff5e1 0%, #fff1dd 100%)"
    }
  ];

  return (
    <section id="what-i-do" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6">
      <BackgroundBeams />
      <div className="z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-left">
          What I Actually Do
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="w-full flex bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-4 sm:mr-6 text-xl sm:text-2xl font-bold"
                style={{ background: card.bg || 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)' }}>
                {card.emoji}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 text-left">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-left">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 