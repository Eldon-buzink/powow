"use client";

import React from "react";

const bentoCards = [
  {
    title: "Product Management",
    emoji: "🧠",
    headline: "Turning chaos into features people love (or hate less)."
  },
  {
    title: "CRO",
    emoji: "📈",
    headline: "Making more people click sh*t."
  },
  {
    title: "Online Marketing",
    emoji: "💻",
    headline: "Getting the word out, one meme at a time."
  },
  {
    title: "Breaking & Fixing",
    emoji: "🔧",
    headline: "If it ain't broke, give me a sec."
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative w-full flex flex-col items-center justify-center px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">What I Do</h2>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        {bentoCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl shadow-lg bg-white min-h-[140px] border border-gray-100"
          >
            <span className="text-4xl sm:text-5xl mb-4 drop-shadow-lg">{card.emoji}</span>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center font-medium">
              {card.headline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 