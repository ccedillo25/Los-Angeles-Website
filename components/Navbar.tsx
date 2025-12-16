import Link from "next/link";

export default function Navbar() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(818) 555-1234";

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="no-underline font-semibold text-lg">
          LA Family Landscaping
        </Link>

        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-2">
          <a
            href={`tel:${phone.replace(/[^\d]/g, "")}`}
            className="hidden md:block border px-3 py-2 rounded-lg text-sm"
          >
            Call {phone}
          </a>
          <Link
            href="/contact"
            className="bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
