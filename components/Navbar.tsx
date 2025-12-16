import Link from "next/link";

export default function Navbar() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(818) 555-1234";
  const phoneHref = `tel:${phone.replace(/[^\d]/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="border-b border-emerald-50 bg-emerald-950/95 text-emerald-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-xs tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold uppercase">Serving Greater Los Angeles for 30+ Years</p>
          <p className="text-emerald-100">
            Luxury maintenance, enhancements, and irrigation with national-brand systems.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="no-underline text-xl font-semibold text-emerald-950">
            Cedillo Landscaping
          </Link>
          <a href={phoneHref} className="rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-900 md:hidden">
            Call {phone}
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-emerald-800 md:flex-nowrap">
          <Link href="/services" className="hover:text-emerald-950">
            Services
          </Link>
          <Link href="/service-areas" className="hover:text-emerald-950">
            Service Areas
          </Link>
          <Link href="/gallery" className="hover:text-emerald-950">
            Gallery
          </Link>
          <Link href="/reviews" className="hover:text-emerald-950">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-emerald-950">
            Contact
          </Link>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <a href={phoneHref} className="hidden rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-900 md:inline-flex">
            Call {phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200 hover:bg-emerald-800"
          >
            Request an estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
