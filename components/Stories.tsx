export default function Stories() {
  return (
    <section className="w-full max-w-3xl py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Things I Wrote at 1AM</h2>
      <ul className="space-y-4 text-left text-lg">
        <li><a href="/stories/the-time-i-broke-prod" className="underline">That time I broke production and blamed it on the intern</a></li>
        <li><a href="/stories/why-i-hate-forms" className="underline">Why I hate forms and how I keep building them</a></li>
        <li><a href="/stories/gift-tools-and-chaos" className="underline">Gift tools and digital chaos — a love story</a></li>
      </ul>
    </section>
  );
} 