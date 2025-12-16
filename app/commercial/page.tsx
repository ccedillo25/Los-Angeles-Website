const industries = [
  {
    title: "Retail & Mixed-Use",
    body: "Weekly porter services, planter refreshes, and after-hours crews so storefronts and parking lots stay tidy.",
  },
  {
    title: "Office & Corporate",
    body: "Lobby plant programs, irrigation management, and quarterly enhancements to keep properties on brand.",
  },
  {
    title: "Hospitality",
    body: "Pool decks, resorts, and boutique hotels with discreet crews trained to work around guests.",
  },
  {
    title: "Public Sector",
    body: "City medians, schools, and civic centers with prevailing wage compliance and safety documentation.",
  },
];

const differentiators = [
  "GPS-tracked crews and check-ins",
  "Irrigation alerts + water use dashboards",
  "Enhancement proposals delivered with photos",
  "Storm response teams on-call",
];

export default function CommercialPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Commercial Grounds</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Polished properties that feel like the national providers, minus the wait time.</h1>
          <p className="text-lg text-emerald-800">
            We mirror the structure of popular companies like BrightView with account managers, safety protocols, and
            reporting—while keeping decisions local so requests move faster.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-emerald-950">{industry.title}</h2>
              <p className="mt-2 text-sm text-emerald-800">{industry.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-950">Facility managers get:</h2>
            <ul className="space-y-3 text-sm text-emerald-800">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-950">Maintenance programs</h3>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
              <p className="text-sm text-emerald-800">
                Weekly service plans include mowing, trimming, porter service, trash removal, and irrigation monitoring.
                Bi-weekly site walks with your manager ensure priorities are logged and scheduled.
              </p>
              <p className="mt-4 text-sm text-emerald-800">
                Need rapid response after wind or storms? Our on-call teams can mobilize within 4 hours across LA County.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
