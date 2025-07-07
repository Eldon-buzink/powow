import React from "react";
import Image from "next/image";
import { ColourfulText } from "./ui/ColourfulText";

const whoAmICards = [
  {
    title: "Home",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Born in Rotterdam, lived in Amsterdam, now building things everywhere. I love cities, but I also love a good forest walk.",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Work",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    desc: "Product builder, team wrangler, and digital optimist. I make things that (hopefully) help people and make them smile.",
    size: "col-span-1 row-span-1",
  },
  {
    title: "On the side",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    desc: "I love side projects. Some are useful, some are weird, all are fun. If you have an idea, let's build it!",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Beyond",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    desc: "When I'm not at my laptop, I'm exploring, eating, or making a mess in the kitchen. Life's too short for boring weekends.",
    size: "col-span-2 row-span-1",
  },
];

export default function WhoAmI() {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 sm:py-20 px-0 sm:px-4">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
        <span className="text-2xl sm:text-4xl md:text-5xl">Get to know me</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
        I'm a product builder with a love for fun side projects, digital experiments, and a good story. Here's a bit more about me, the human.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px]">
        {whoAmICards.map((card, i) => (
          <div
            key={card.title}
            className={`w-full relative rounded-2xl shadow-lg bg-gradient-to-br from-white to-pink-50 overflow-hidden flex flex-col min-h-[220px] border border-gray-100 ${typeof window !== 'undefined' && window.innerWidth < 640 ? '' : card.size}`}
          >
            <div className="relative w-full h-24 md:h-32 border-b border-gray-100">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center"
                style={{ filter: "brightness(0.95)" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-2 p-4 sm:p-6 pt-6 pb-6">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 