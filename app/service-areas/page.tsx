const serviceZones = [
  {
    title: "Central Los Angeles",
    summary: "From Hancock Park estates to Silver Lake slopes, daily crews handle detailed gardening and irrigation repairs.",
    neighborhoods: ["Los Feliz", "Silver Lake", "Hancock Park", "Beverly Grove", "Hollywood Hills"],
    response: "Same-week site visits",
  },
  {
    title: "San Fernando Valley",
    summary: "Fleet yards in Van Nuys and Woodland Hills keep large residential lots and gated communities on tidy rotations.",
    neighborhoods: ["Studio City", "Sherman Oaks", "Encino", "Tarzana", "Calabasas"],
    response: "2–3 day dispatch",
  },
  {
    title: "Coastal & Conejo",
    summary: "Salt-tolerant planting, drainage fixes, and HOA compliance programs for Malibu through Thousand Oaks.",
    neighborhoods: ["Pacific Palisades", "Malibu", "Topanga", "Agoura Hills", "Thousand Oaks"],
    response: "Weekly route schedules",
  },
];

const serviceHighlights = [
  {
    title: "Dedicated account managers",
    detail: "One point of contact for larger estates, HOAs, and commercial sites with weekly reporting.",
  },
  {
    title: "Rapid response teams",
    detail: "On-call crews for irrigation leaks, wind cleanup, and last-minute event prep across every zone.",
  },
  {
    title: "Vendor coordination",
    detail: "We coordinate with pool, lighting, and pest-control vendors so your maintenance calendar stays aligned.",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Service Areas</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Daily coverage across Los Angeles, Ventura, and Orange County.</h1>
          <p className="text-lg text-emerald-800">
            Our routing mirrors national providers we admire—BrightView, Gothic, and Stay Green—while staying nimble enough
            for family estates, boutique hotels, and multi-site portfolios.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {serviceZones.map((zone) => (
            <article key={zone.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <span>{zone.title}</span>
                <span className="rounded-full border border-emerald-200 px-3 py-1 text-xs text-emerald-800">{zone.response}</span>
              </div>
              <p className="mt-4 text-sm text-emerald-800">{zone.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-700">
                {zone.neighborhoods.map((hood) => (
                  <li key={hood} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{hood}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-950">How we schedule crews</h2>
            <p className="text-sm text-emerald-800">
              Morning dispatch runs north and east routes, with afternoon teams covering the Westside and coast. Seasonal
              color crews float wherever installs are needed, while enhancement teams travel with trailers for larger work.
            </p>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-800">
              <p className="font-semibold text-emerald-950">Need rush service?</p>
              <p className="mt-1">
                Text or call our coordination line at <a className="font-semibold text-emerald-700" href="tel:13235550114">(323) 555-0114</a>{" "}
                for storm cleanup or irrigation leaks. We keep a floating crew on standby for emergencies.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-950">What clients receive</h3>
            <ul className="space-y-4 text-sm text-emerald-800">
              {serviceHighlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-emerald-100 p-4">
                  <p className="font-semibold text-emerald-950">{item.title}</p>
                  <p className="mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
