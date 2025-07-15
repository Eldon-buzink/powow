import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 px-6 py-12 flex flex-col items-center">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG94cjFlNGw2c3A1djJhanIzemFpdXB1Z3A3MTNiaW52MDF4YWN1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif"
          alt="Contact avatar"
          className="w-28 h-28 rounded-full border-4 border-pink-200 shadow-lg object-cover mb-4"
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Say Hi <span className="inline-block">👋</span></h2>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-xl">
          Whether you want to build something, chat, or just send a meme, my inbox is open!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="mailto:e.buzink@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100 text-pink-700 font-semibold shadow hover:bg-pink-200 transition border border-pink-200 w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-xl" /> Email
          </a>
          <a
            href="https://wa.me/31681156915"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold shadow hover:bg-green-200 transition border border-green-200 w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/eldonbuzink/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200 transition border border-blue-200 w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 