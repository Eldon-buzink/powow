import React from "react";
import Image from "next/image";

const whoAmICards = [
  {
    title: "Personal",
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa215M2c3NWc3cGI2ODVucGZ1dzd3amNjZTIxaXY1eGhobmszZ2E5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xZsLh7B3KMMyUptD9D/giphy.gif",
    desc: "Moved from Amsterdam to Breda this year and bought my first house, learned a lot by renovating it.",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Work",
    image: "/images/IMG_5632.JPG",
    desc: "Worked for big and small companies, from startups to large corporations. I've built products, teams, and digital experiences.",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Team",
    image: "https://tenor.com/view/cloudvmink-college-basketball-dancing-gif-25411138.gif",
    desc: "Nothing beats working with a great team. I've been lucky to work with some amazing people.",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Out of office",
    image: "/images/0989e28e-3b71-4d7f-9dc2-59905c73bcb1.jpg",
    desc: "When I am not at work, I like to drive anything with wheels or anything without.",
    size: "col-span-2 row-span-1",
  },
];

export default function WhoAmI() {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 sm:py-20 px-0 sm:px-4">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
        <span className="text-2xl sm:text-4xl md:text-5xl">Who am I?</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
        I'm a product builder with a love for fun side projects, digital experiments, and a good story. Here's a bit more about me, the human.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {whoAmICards.map((card, i) => {
          let smSpan = '';
          if (card.size === 'col-span-2 row-span-1') smSpan = 'sm:col-span-2 sm:row-span-1';
          if (card.size === 'col-span-1 row-span-1') smSpan = 'sm:col-span-1 sm:row-span-1';
          // Set image height based on card size
          const imgHeight = card.size === 'col-span-2 row-span-1'
            ? 'h-40 sm:h-56 md:h-64'
            : 'h-32 sm:h-40 md:h-48';
          // Set card min-height
          const cardMinH = card.size === 'col-span-2 row-span-1'
            ? 'min-h-[260px] sm:min-h-[320px] md:min-h-[380px]'
            : 'min-h-[220px] sm:min-h-[260px] md:min-h-[320px]';
          // Set object position for Beyond card
          const objectPos = card.title === 'Beyond' ? 'object-center' : 'object-center';
          const customStyle = card.title === 'Beyond'
            ? { filter: "brightness(0.95)", objectPosition: 'center 10%' }
            : { filter: "brightness(0.95)" };
          return (
            <div
              key={card.title}
              className={`w-full relative rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col border border-gray-100 ${smSpan} ${cardMinH}`}
            >
              <div className={`relative w-full ${imgHeight} border-b border-gray-100`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`object-cover ${objectPos}`}
                  style={customStyle}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                  unoptimized={card.image.includes('giphy.com') || card.image.includes('tenor.com')}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-2 p-4 sm:p-6 pt-6 pb-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 