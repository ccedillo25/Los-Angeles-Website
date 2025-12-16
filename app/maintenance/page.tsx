const programs = [
  {
    title: "Weekly Groundskeeping",
    details: "Lawn care, pruning, blowing, planter checks, and irrigation monitoring with photo notes after each visit.",
  },
  {
    title: "Bi-weekly Garden Care",
    details: "Perfect for drought-friendly yards with slower growth; includes hand weeding, soil conditioning, and drip inspection.",
  },
  {
    title: "Monthly Estate Walk",
    details: "Property manager + crew lead complete a 40-point checklist including trees, palms, and lighting.",
  },
];

const addOns = [
  "Seasonal color rotations",
  "Mulch & gravel refresh",
  "Smart controller programming",
  "Tree care & arbor services",
  "Low-voltage lighting tune-ups",
  "Storm cleanup",
];

export default function MaintenancePage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Maintenance</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Reliable weekly, bi-weekly, and monthly crews.</h1>
          <p className="text-lg text-emerald-800">
            We modeled our reporting, uniforms, and quality-control after popular landscaping companies so you receive
            the same polish with localized support.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-emerald-950">{program.title}</h2>
              <p className="mt-2 text-sm text-emerald-800">{program.details}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[32px] border border-emerald-100 bg-white p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-emerald-950">Add-on services</h2>
              <p className="mt-2 text-lg text-emerald-800">
                Build a seasonal plan that rivals what you see from BrightView, The Grounds Guys, or Pacific Outdoor Living.
              </p>
            </div>
            <ul className="grid gap-2 text-sm text-emerald-800 sm:grid-cols-2">
              {addOns.map((item) => (
                <li key={item} className="rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
