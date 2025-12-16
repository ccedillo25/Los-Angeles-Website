import Image from "next/image";

const projects = [
  {
    title: "San Marino courtyard",
    description: "Box hedges, decomposed granite, and low-voltage uplighting inspired by European gardens.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    tags: ["Formal", "Lighting", "Low-water"],
  },
  {
    title: "Silver Lake hillside",
    description: "Native meadow mix with Corten edging to stabilize the slope and frame the views.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Native", "Slope", "Irrigation retrofit"],
  },
  {
    title: "Brentwood family yard",
    description: "Pool surround resurfaced with limestone, shaded dining, and evergreen privacy hedges.",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
    tags: ["Outdoor living", "Hardscape", "Screening"],
  },
  {
    title: "Pacific Palisades bluff",
    description: "Drought-tolerant planting with subsurface drip and basalt fire lounge for evening gatherings.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    tags: ["Coastal", "Fire feature", "Drip irrigation"],
  },
  {
    title: "Toluca Lake bungalow",
    description: "Front yard reimagined with permeable pavers, specimen olive, and layered lighting scenes.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    tags: ["Permeable", "Lighting", "Specimen trees"],
  },
  {
    title: "Downtown rooftop",
    description: "Commercial patio with lightweight planters, built-in benches, and smart irrigation monitoring.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    tags: ["Commercial", "Containers", "Tech-enabled"],
  },
];

const galleryStats = [
  { label: "Projects completed", value: "1,250+" },
  { label: "Weekly maintenance sites", value: "180" },
  { label: "Average client rating", value: "4.9 / 5.0" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Gallery</p>
          <h1 className="text-4xl font-semibold text-emerald-950">A look at current builds, refreshes, and weekly care.</h1>
          <p className="text-lg text-emerald-800">
            We document every phase with photo updates and drone captures so you can share progress with family, boards, or
            asset managers.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-emerald-100 bg-white">
              <Image src={project.image} alt={project.title} width={420} height={280} className="h-56 w-full object-cover" />
              <div className="space-y-3 px-5 py-4">
                <h2 className="text-xl font-semibold text-emerald-950">{project.title}</h2>
                <p className="text-sm text-emerald-800">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-700">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-[32px] border border-emerald-100 bg-white p-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-950">Why clients love photo updates</h2>
            <p className="text-sm text-emerald-800">
              Whether you are an out-of-state owner or on-site every week, our visual logs explain what happened and what&apos;s next.
            </p>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Drone captures for big transformations and slope work.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Before/after albums for seasonal color rotations.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Maintenance photo logs that align with invoices and proposals.</p>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 text-center sm:grid-cols-3">
            {galleryStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-semibold text-emerald-900">{stat.value}</p>
                <p className="text-sm text-emerald-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
