import Image from "next/image";
import Link from "next/link";

const serviceHighlights = [
  {
    title: "Weekly Maintenance",
    description: "Detail crews keep estates, HOAs, and boutique hotels pristine with photo logs and irrigation checks.",
  },
  {
    title: "Enhancement Projects",
    description: "Outdoor living, lighting, and planting upgrades delivered with the polish of national firms.",
  },
  {
    title: "Irrigation & Water",
    description: "Smart controllers, retrofits, and emergency repairs that protect landscapes during extreme weather.",
  },
];

const stats = [
  { label: "Years family-owned", value: "30+" },
  { label: "Weekly properties", value: "180" },
  { label: "Average rating", value: "4.9/5" },
];

export default function Home() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Los Angeles Landscaping</p>
            <h1 className="text-4xl font-semibold leading-tight text-emerald-950">
              Family-owned crews delivering national-brand polish—from Brentwood estates to Silver Lake slopes.
            </h1>
            <p className="text-lg text-emerald-800">
              We pair old-school craftsmanship with the systems used by BrightView and Gothic: account managers, proactive
              schedules, and transparent reporting on every visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white">
                Book a consultation
              </Link>
              <Link href="/gallery" className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-900">
                View recent work
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-center">
                  <p className="text-2xl font-semibold text-emerald-900">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-emerald-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
              alt="Los Angeles backyard with pool and planting"
              width={640}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 p-4 text-sm text-emerald-900 shadow-lg">
              <p className="font-semibold">Pasadena courtyard refresh</p>
              <p>Permitting, construction, and maintenance hand-off completed in 8 weeks.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Services</p>
            <h2 className="text-3xl font-semibold text-emerald-950">Everything your property needs under one roof.</h2>
            <p className="text-lg text-emerald-800">
              From quick cleanups to multi-phased estate work, our licensed teams coordinate design, construction, and
              weekly care.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{service.title}</p>
                <p className="mt-3 text-sm text-emerald-800">{service.description}</p>
                <Link href="/services" className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-900">
                  Explore services →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Client praise</p>
            <h3 className="text-3xl font-semibold text-emerald-950">“They operate like a national firm but answer the phone like neighbors.”</h3>
            <p className="text-sm text-emerald-800">
              Kathryn M., Malibu Bluff Property &mdash; enhancement build + weekly maintenance
            </p>
            <Link href="/reviews" className="inline-flex items-center text-sm font-semibold text-emerald-900">
              Read more reviews →
            </Link>
          </div>
          <div className="space-y-4 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 text-sm text-emerald-800">
            <p className="font-semibold text-emerald-950">What to expect</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Dedicated account manager with weekly check-ins and proactive proposals.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Photo updates, irrigation logs, and timeline tracking just like the big firms.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Seamless hand-offs between design/build and maintenance teams.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-[32px] border border-emerald-100 bg-emerald-900/95 p-10 text-white">
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Ready to start?</p>
              <h4 className="text-3xl font-semibold">Share your site photos, wishlist, or existing plans.</h4>
              <p className="text-sm text-emerald-100">
                We’ll schedule a walkthrough, outline budget ranges, and build a phased roadmap that works for your family or board.
              </p>
            </div>
            <div className="space-y-4 text-sm font-semibold">
              <Link href="/contact" className="block rounded-full bg-white px-6 py-3 text-center text-emerald-900">
                Request a proposal
              </Link>
              <a href="tel:13235550114" className="block rounded-full border border-white px-6 py-3 text-center">
                Call (323) 555-0114
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
