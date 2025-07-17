"use client";

import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ColourfulText } from "@/components/ui/ColourfulText";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import WhatIDo from "@/components/WhatIDo";
import Contact from "@/components/Contact";
import LogoCarousel from "@/components/LogoCarousel";
import { Button } from "@/components/ui/stateful-button";
import Head from 'next/head';
import WhoAmI from "@/components/WhoAmI";
import Image from "next/image";

const projects = [
  {
    title: "Giftr",
    description: "Find the perfect gift, just by asking. Anonymously.",
    image: "https://media.giphy.com/media/fUQ4rhUZJYiQsas6WD/giphy.gif",
  },
  {
    title: "SignEasy",
    description: "Simple PDF signing tool, for personal use.",
    image: "https://media.giphy.com/media/3o6wrhoMAKKfdVKQF2/giphy.gif",
  },
  {
    title: "Coming Soon",
    description: "A new way to find out what makes people happy.",
    image: "https://media.giphy.com/media/S9i8jJxTvAKVHVMvvW/giphy.gif",
    comingSoon: true,
  },
];

const grayscaleLogos = [
  "/images/adidas.png",
  "/images/coolblue.png",
  "/images/dpg_media.png",
  "/images/uber.png",
  "/images/vanmoof.png",
];

export default function Home() {
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const whoAmIRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

  // New handler for Let's talk button
  const handleContactScroll = () => {
    scrollToSection(contactRef);
  };

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Powow - Eldon Buzink</title>
        <meta name="description" content="Digital product builder, side project lover, and anything to make people happy!" />
        <meta property="og:title" content="Powow - Eldon Buzink" />
        <meta property="og:description" content="Digital product builder, side project lover, and anything to make people happy!" />
        <meta property="og:image" content="/images/1604824879858.jpeg" />
        <meta property="og:url" content="https://powow.nl" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Powow - Eldon Buzink" />
        <meta name="twitter:description" content="Digital product builder, side project lover, and anything to make people happy!" />
        <meta name="twitter:image" content="/images/1604824879858.jpeg" />
        <meta name="twitter:site" content="@eldonbuzink" />
        <link rel="canonical" href="https://powow.nl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Eldon Buzink",
              "url": "https://powow.nl",
              "email": "e.buzink@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/eldonbuzink/",
                "https://github.com/Eldon-buzink"
              ],
              "description": "Digital product builder, side project lover, and anything to make people happy!"
            })
          }}
        />
      </Head>
      {/* HERO SECTION */}
      <BackgroundGradientAnimation fadeToWhite>
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-transparent">
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-6">
            <Image
              src="/images/1604824879858.jpeg"
              alt="Your avatar"
              className="w-32 h-32 rounded-full border-4 border-pink-200 shadow-lg object-cover mb-2"
              width={128}
              height={128}
              priority
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Hey, I&apos;m <ColourfulText text="Eldon" />!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              I build digital things for fun, for work, and sometimes just to see what happens. If you want to collaborate, chat, or send me a meme, hit me up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button
                onClick={handleConfettiAndScroll}
                className="border-2 border-pink-400 bg-white hover:bg-pink-100 hover:border-pink-500 text-pink-600 font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-pink-300"
                type="button"
              >
                Get to know me
              </Button>
              <Button
                onClick={handleContactScroll}
                className="border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="button"
              >
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </section>
      </BackgroundGradientAnimation>

      {/* WHO AM I SECTION */}
      <div ref={whoAmIRef} className="w-full flex justify-center my-12 px-4">
        <div className="w-full max-w-5xl mx-auto rounded-3xl">
          <WhoAmI />
        </div>
      </div>

      {/* WHAT I DO SECTION */}
      <div ref={whatIDoRef} className="w-full flex justify-center mb-0 px-4">
        <div className="w-full max-w-5xl mx-auto rounded-3xl">
          <WhatIDo />
        </div>
      </div>
      <div className="mt-0 mb-12 w-full">
        <LogoCarousel logos={grayscaleLogos.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Company logo ${i + 1}`}
            className="max-h-12 w-auto object-contain"
            width={120}
            height={48}
            loading="lazy"
            unoptimized={src.startsWith('http')}
          />
        ))} />
      </div>

      {/* PROJECTS SECTION */}
      <section className="w-full max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-900">
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
              className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 w-full ${project.comingSoon ? 'md:col-span-2 opacity-70 grayscale pointer-events-none' : ''}`}
              style={{ minHeight: '260px' }}
            >
              {/* Left: Title + description */}
              <div className="flex-1 p-8 flex flex-col items-start justify-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-2">{project.description}</p>
              </div>
              {/* Right: Image placeholder */}
              <div className="flex-1 flex items-center justify-center w-full h-full relative min-h-[180px]">
                <Image
                  src={project.image}
                  alt={
                    project.title === 'Giftr' ? 'Elmo celebrating for Giftr project' :
                    project.title === 'SignEasy' ? 'Andy Murray throwing tennis racquet for SignEasy project' :
                    project.title === 'Coming Soon' ? 'Coming Soon placeholder' :
                    `${project.title} demo`
                  }
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                  unoptimized={project.image.startsWith('http')}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div ref={contactRef} className="w-full flex justify-center my-12 px-4">
        <Contact />
      </div>
    </div>
  );
} 