import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <Hero />
      <WhatIDo />
      <Projects />
      <Stories />
    </main>
  );
} 