import Image from "next/image";
import Link from "next/link";

const residentialPackages = [
  {
    title: "Design + Build",
    description: "From concept sketches to permits, our licensed team shapes patios, pools, and planting beds for everyday living.",
    bullets: ["Concept boards & 3D walk-throughs", "Material + lighting schedules", "Dedicated project manager"],
  },
  {
    title: "Enhancement Projects",
    description: "Upgrade older landscapes with new lighting, irrigation retrofits, or focal planting without starting from scratch.",
    bullets: ["Water-saving irrigation upgrades", "Outdoor kitchen + fire feature installs", "Front yard curb appeal refresh"],
  },
  {
    title: "Seasonal Styling",
    description: "Container rotations, mulch, and accent lighting to keep gatherings fresh every quarter.",
    bullets: ["Holiday + event styling", "Color program planning", "Soil health & fertilization"],
  },
  { 
    title: "Consultations",
    description: "Hear from our expert team",
    bullets: [] // Added empty array to prevent .map() error
  },
];

const gallery = [
  {
    title: "Los Angeles",
    description: "Native meadow, stepped pathways, and accent boulders inspired by Pacific Outdoor Living projects.",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cerritos",
    description: "Turf alternatives, citrus espalier, and evening lighting similar to BrightView showcase gardens.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Redondo Beach",
    description: "Formal hedges with discreet irrigation upgrades modeled after The Grounds Guys' estate work.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ResidentialPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Residential Services</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Comfortable outdoor spaces designed for daily life.</h1>
          <p className="text-lg text-emerald-800">
            We borrow the best practices we admire from popular firms—clear proposals, visual mood boards, and proactive
            schedules—then tailor each plan to how your family uses the property.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {residentialPackages.map((pkg) => (
            <article key={pkg.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-emerald-950">{pkg.title}</h2>
              <p className="mt-2 text-sm text-emerald-800">{pkg.description}</p>
              {/* Added optional chaining ?. to be extra safe */}
              <ul className="mt-4 space-y-2 text-sm text-emerald-700">
                {pkg.bullets?.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="space-y-6 rounded-[32px] border border-emerald-100 bg-white p-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-950">What homeowners can expect</h2>
            <p className="text-lg text-emerald-800">
              Dedicated account managers, weekly photo updates during construction, and maintenance hand-offs that match
              the structure used by national landscape brands.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-emerald-100">
                <Image src={project.image} alt={project.title} width={420} height={280} className="h-48 w-full object-cover" />
                <div className="space-y-1 px-5 py-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-emerald-800">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-emerald-100 bg-white p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Step-by-step</p>
              <h2 className="text-3xl font-semibold text-emerald-950">Our residential process</h2>
              <ol className="space-y-3 text-sm text-emerald-800">
                <li>1. Site visit, utility check, and wishlist session.</li>
                <li>2. Concept package with budget range and inspiration boards.</li>
                <li>3. Construction documentation, permits, and scheduling.</li>
                <li>4. Build phase with daily photo log and milestone walkthroughs.</li>
                <li>5. Maintenance onboarding with care calendar and irrigation map.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
              <h3 className="text-2xl font-semibold text-emerald-950">Ready to plan your yard?</h3>
              <p className="mt-2 text-sm text-emerald-800">
                Share inspiration links, drawings, or simply the way you want to use the space. We’ll map out a plan that
                balances budget, maintenance, and long-term growth.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="/contact" className="rounded-full bg-emerald-700 px-5 py-2 text-white">
                  Book a consultation
                </Link>
                <a href="tel:13235550114" className="rounded-full border border-emerald-200 px-5 py-2 text-emerald-800">
                  Call (323) 555-0114
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}