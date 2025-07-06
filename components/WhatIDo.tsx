"use client";

import { BackgroundBeams } from "./ui/BackgroundBeams";
import { motion } from "framer-motion";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6">
      <BackgroundBeams />
      <div className="z-10 max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">
          What I Actually Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Frontend Developer</h3>
            <p className="text-gray-600">
              I build user interfaces that don't make people want to throw their computers out the window.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
            <p className="text-gray-600">
              I turn complex problems into simple solutions. Sometimes they even work.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Coffee Consumer</h3>
            <p className="text-gray-600">
              I drink coffee and write code. Sometimes in that order, sometimes not.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Bug Creator</h3>
            <p className="text-gray-600">
              I create bugs, then fix them. It's like a never-ending cycle of chaos and order.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 