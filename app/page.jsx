"use client";
import { motion } from "framer-motion";

export default function DyraxLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-extrabold tracking-tight">Dyrax</h1>
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
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-black leading-tight"
              >
                Get Property Buyers Directly on Your Phone
              </motion.h2>

              <p className="mt-6 text-lg text-slate-300">
                Facebook & Instagram Ads se qualified buyers directly WhatsApp par.
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

              <p className="mt-4 text-sm text-slate-400">
                Limited offer • Setup in 24 hours
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <p className="text-sm text-blue-300">Performance</p>
                <h3 className="mt-2 text-3xl font-bold">50+ Leads in 7 Days</h3>
                <p className="mt-2 text-slate-300">
                  High quality buyers for your property
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Qualified Buyers Only",
              "More Site Visits",
              "Direct WhatsApp Leads",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:scale-105"
              >
                <p className="text-xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center shadow-xl">
            <h3 className="text-3xl font-black">Book Your Slot – ₹499</h3>
            <p className="mt-2">Free Ads Setup Included • Limited Offer</p>
            <a
              href="https://rzp.io/rzp/XI8LYlK"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              Pay Now
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 text-center md:grid-cols-4">
            {["Book", "Setup", "Leads", "Close"].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xl font-bold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-black py-20 text-center">
          <h3 className="text-4xl font-black">Start Getting Buyers Today</h3>
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
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-400">
        Dyrax | 8115302970
        <br />
        ₹499 non-refundable • No guarantee of sales
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
