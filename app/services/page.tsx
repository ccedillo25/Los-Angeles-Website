import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const serviceAreas = [
  "Los Angeles",
  "San Fernando Valley",
  "Conejo Valley",
  "Orange County",
  "Ventura County",
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Services</p>
          <h1 className="text-4xl font-semibold text-emerald-950">All-in-one landscaping built like the region’s most trusted firms.</h1>
          <p className="text-lg text-emerald-800">
            Whether you need a single service or turnkey delivery, our teams follow the playbooks of BrightView, Pacific
            Outdoor Living, and other industry leaders to keep communication clear.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <Image src={service.icon} alt="" width={48} height={48} className="h-12 w-12" />
              <h2 className="mt-4 text-2xl font-semibold text-emerald-950">{service.title}</h2>
              <p className="mt-2 text-sm text-emerald-800">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-950">Service areas</h2>
            <p className="text-lg text-emerald-800">
              Crews dispatch daily across LA County with weekly routes through Ventura and Orange County.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm text-emerald-800">
              {serviceAreas.map((area) => (
                <li key={area} className="rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-2">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-950">Need pricing?</h3>
            <p className="text-sm text-emerald-800">
              Send us your plans, scopes, or property address and we’ll build a service menu that keeps maintenance simple.
            </p>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white">
              Request pricing
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
