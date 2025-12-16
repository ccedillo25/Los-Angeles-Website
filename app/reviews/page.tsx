const testimonials = [
  {
    name: "Janelle R.",
    location: "Pasadena",
    highlight: "Design-build",
    quote:
      "They treated our 1930s courtyard like a full estate—tight coordination with our architect, clean documentation, and perfectly staged hand-off to our maintenance crew.",
  },
  {
    name: "Marcus & Alicia W.",
    location: "Encino",
    highlight: "Weekly maintenance",
    quote:
      "Every Friday we get photos, irrigation logs, and a short punch list. Issues get fixed before we even notice. It feels like working with a national firm, just friendlier.",
  },
  {
    name: "Kathryn M.",
    location: "Malibu",
    highlight: "Enhancement projects",
    quote:
      "They pulled permits, coordinated lighting, and handled HOA approvals for our bluff property. Communication stayed proactive even when we were traveling abroad.",
  },
];

const reviewStats = [
  { score: "4.9 / 5.0", label: "Average rating across Google, Yelp, and Houzz" },
  { score: "310+", label: "Documented testimonials & thank-you emails" },
  { score: "72", label: "HOA boards and commercial clients under contract" },
];

const partnerBadges = ["Angi Super Service", "Houzz 5-Star", "NALP Member"];

export default function ReviewsPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Reviews</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Kind words from families, boards, and facilities teams.</h1>
          <p className="text-lg text-emerald-800">
            We apply the same systems as large landscape firms—QA walks, photo logs, and transparent billing—so every client
            knows the work is handled.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="flex flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{review.highlight}</p>
              <p className="mt-4 flex-1 text-sm text-emerald-800">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-6 text-sm">
                <p className="font-semibold text-emerald-950">{review.name}</p>
                <p className="text-emerald-700">{review.location}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-950">Proof in the numbers</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {reviewStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-4 text-center">
                  <p className="text-2xl font-semibold text-emerald-900">{stat.score}</p>
                  <p className="mt-1 text-xs text-emerald-700">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-emerald-800">
              We send quarterly satisfaction surveys and publish every rating internally. Crew bonuses tie directly to
              client feedback and response-time goals.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-950">Badges & affiliations</h3>
            <div className="flex flex-wrap gap-3">
              {partnerBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800">
                  {badge}
                </span>
              ))}
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-5 text-sm text-emerald-800">
              <p className="font-semibold text-emerald-950">Want to leave a review?</p>
              <p className="mt-1">
                Email <a className="font-semibold text-emerald-700" href="mailto:hello@lafamilylandscape.com">hello@lafamilylandscape.com</a> or text photos to{" "}
                <a className="font-semibold text-emerald-700" href="tel:13235550114">(323) 555-0114</a>. We share highlights with the crew at Friday stand-up.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
