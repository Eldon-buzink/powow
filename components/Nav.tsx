'use client'

import React from "react"
import { Button } from "./ui/stateful-button"
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Nav() {

  // Scroll to contact section
  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => {
                confetti({
                  particleCount: 80,
                  spread: 60,
                  origin: { y: 0.2 },
                });
              }}
            >
              <span className="text-2xl font-bold text-primary-600 select-none px-2 py-1">
                Powow
              </span>
            </motion.div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button className="ml-2 border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={handleLetsTalk} type="button">
              Let&apos;s Talk
            </Button>
          </div>
          {/* Mobile menu button replaced with CTA */}
          <div className="md:hidden flex items-center">
            <Button className="border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={handleLetsTalk} type="button">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 