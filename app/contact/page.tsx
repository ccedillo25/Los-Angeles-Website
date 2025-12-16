import EstimateForm from "@/components/EstimateForm";

export default function ContactPage() {
  return (
    <div className="bg-[#f7f4ec] text-emerald-950">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-16">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Contact</p>
          <h1 className="text-4xl font-semibold text-emerald-950">Request a walkthrough or maintenance bid.</h1>
          <p className="text-lg text-emerald-800">
            Tell us about your property, timeline, and service mix. We respond within one business day with the next steps.
          </p>
        </header>

        <section className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-10 lg:grid-cols-2">
          <div className="space-y-4 text-sm text-emerald-800">
            <h2 className="text-2xl font-semibold text-emerald-950">Our office</h2>
            <p>1910 Highland Ave, Suite 400<br />Los Angeles, CA 90068</p>
            <p>
              <span className="font-semibold">Phone:</span> <a href="tel:13235550114" className="text-emerald-700">(323) 555-0114</a>
            </p>
            <p>
              <span className="font-semibold">Email:</span> <a href="mailto:hello@lalandscaping.co" className="text-emerald-700">hello@lalandscaping.co</a>
            </p>
            <p>Business hours: Monday–Friday, 7am–5pm</p>
            <p className="text-xs text-emerald-600">Licensed, bonded, and insured. CSLB #1043211</p>
          </div>
          <EstimateForm />
        </section>
      </div>
    </div>
  );
}
