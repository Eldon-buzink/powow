export default function Projects() {
  return (
    <section className="w-full max-w-5xl py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Stuff I Built So Far</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Giftr", "SignEasy", "Weird Tool X"].map((project, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-2">{project}</h3>
            <p className="text-gray-600">A short and sassy description.</p>
          </div>
        ))}
      </div>
    </section>
  );
} 