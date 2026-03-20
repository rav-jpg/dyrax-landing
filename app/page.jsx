"use client";
import { motion } from "framer-motion";

export default function DyraxLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Dyrax</h1>
            <p className="text-sm text-slate-400">Meta Ads Lead Generation for Real Estate</p>
          </div>
          <a
            href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads"
            className="rounded-xl bg-green-500 px-4 py-2 font-semibold transition hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-900 opacity-90" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
                Real Estate Buyer Lead System
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-4xl font-black leading-tight sm:text-5xl"
              >
                Get Qualified Property Buyers Directly on Your Phone
              </motion.h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Dyrax helps property dealers, builders, and real estate agents run Facebook and Instagram Ads that bring buyer enquiries directly to WhatsApp. The goal is simple: better leads, more serious conversations, and more chances of site visits.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://rzp.io/rzp/XI8LYlK"
                  className="rounded-2xl bg-blue-600 px-6 py-4 font-bold shadow-lg transition hover:scale-105"
                >
                  Book Slot ₹499
                </a>

                <a
                  href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads"
                  className="rounded-2xl border border-white/30 px-6 py-4 font-bold transition hover:bg-white/10"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">24 Hrs</p>
                  <p className="mt-1 text-sm text-slate-300">Fast setup support</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">WhatsApp</p>
                  <p className="mt-1 text-sm text-slate-300">Direct lead delivery</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">₹499</p>
                  <p className="mt-1 text-sm text-slate-300">Booking amount</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why This Works</p>
                <h3 className="mt-4 text-3xl font-black">A More Professional Way to Capture Property Buyers</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  Instead of depending only on random calls or weak enquiries, you can use a focused Meta Ads system that attracts people interested in plots, flats, villas, and houses in your target market.
                </p>
                <ul className="mt-6 space-y-3 text-slate-200">
                  <li>• Better buyer intent than random traffic</li>
                  <li>• Faster response through WhatsApp</li>
                  <li>• Cleaner ad flow for real estate offers</li>
                  <li>• Useful for local property promotion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">What You Get</p>
            <h3 className="mt-3 text-3xl font-black">Clear Offer. Better Positioning. Stronger Trust.</h3>
            <p className="mt-4 text-slate-300">
              A client should immediately understand what you do, who it is for, and why they should contact you. This section builds that trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Qualified Buyer Leads",
                text: "Campaign direction focused on attracting people who are actually interested in property purchase, not just empty clicks.",
              },
              {
                title: "More Site Visit Enquiries",
                text: "With better targeting and better positioning, you improve the chances of real conversations and visit-related enquiries.",
              },
              {
                title: "Direct WhatsApp Responses",
                text: "Interested people can reach you directly on WhatsApp, making follow-up easier and faster.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:scale-105"
              >
                <p className="text-xl font-bold">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Who It Is For</p>
              <h3 className="mt-3 text-2xl font-black">Built for Real Estate Businesses</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Property dealers</li>
                <li>• Builders and developers</li>
                <li>• Real estate agents</li>
                <li>• Plot, flat, villa, and house sellers</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Common Problems</p>
              <h3 className="mt-3 text-2xl font-black">Why Most Real Estate Promotion Fails</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Low quality leads</li>
                <li>• No proper buyer filtering</li>
                <li>• Slow follow-up response</li>
                <li>• Money spent without a clear system</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Limited Offer</p>
            <h3 className="mt-3 text-3xl font-black">Book Your Slot – ₹499</h3>
            <p className="mt-4 text-base leading-8 text-white/90">
              This booking is for service onboarding and initial setup guidance. Ideal if you want to start building a more serious buyer lead system for your real estate business.
            </p>
            <div className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90">
              <p>Best for local property promotion and Meta Ads support.</p>
              <p className="mt-2">Ad spend is paid separately by the client. Booking fee is non-refundable.</p>
            </div>
            <a
              href="https://rzp.io/rzp/XI8LYlK"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              Pay Now
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">How It Works</p>
            <h3 className="mt-3 text-3xl font-black">Simple 4-Step Flow</h3>
          </div>
          <div className="grid gap-6 text-center md:grid-cols-4">
            {[
              {
                title: "1. Book",
                text: "Pay the booking fee and secure your setup slot.",
              },
              {
                title: "2. Setup",
                text: "We guide the Meta Ads structure for your property offer.",
              },
              {
                title: "3. Leads",
                text: "Buyer enquiries start reaching you directly on WhatsApp.",
              },
              {
                title: "4. Close",
                text: "You handle follow-up, site visits, and deal conversations.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xl font-bold">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-black py-20 text-center">
          <div className="mx-auto max-w-4xl px-4">
            <h3 className="text-4xl font-black">Start Getting Better Property Buyer Leads Today</h3>
            <p className="mt-4 text-base leading-8 text-slate-200">
              If you want a cleaner, stronger, and more professional way to attract local property buyers through Facebook and Instagram Ads, book your slot now or chat first on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://rzp.io/rzp/XI8LYlK"
                className="rounded-2xl bg-white px-6 py-4 font-bold text-black"
              >
                Book ₹499
              </a>
              <a
                href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads"
                className="rounded-2xl border border-white px-6 py-4"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm leading-7 text-slate-400">
        Dyrax | 8115302970
        <br />
        Meta Ads lead generation service for real estate businesses.
        <br />
        ₹499 non-refundable booking fee. No guarantee of sales. Ad spend is paid separately by the client.
      </footer>

      <a
        href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads"
        className="fixed bottom-5 right-5 rounded-full bg-green-500 px-5 py-3 font-bold shadow-xl"
      >
        Chat
      </a>
    </div>
  );
}
