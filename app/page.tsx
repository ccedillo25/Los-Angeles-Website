import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      <section className="rounded-2xl bg-zinc-50 p-8">
        <h1 className="text-3xl font-semibold">
          Family-Owned Los Angeles Landscaping for 30+ Years
        </h1>
        <p className="mt-3 text-zinc-700">
          Reliable lawn care, cleanups, irrigation, and tree trimming.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-5 bg-zinc-900 text-white px-4 py-2 rounded-lg"
        >
          Get Free Estimate
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Lawn Maintenance", desc: "Weekly or bi-weekly mowing and edging." },
            { name: "Yard Cleanup", desc: "One-time or seasonal yard cleanups." },
            { name: "Tree Trimming", desc: "Safe trimming for health and clearance." },
          ].map((s) => (
            <div key={s.name} className="border p-4 rounded-xl">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-zinc-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
