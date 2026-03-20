import { motion } from "framer-motion";

export default function DyraxLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Dyrax</h1>
          <a href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads" className="bg-green-500 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">WhatsApp</a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-900 opacity-90" />

          <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12">
            <div>
              <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-black leading-tight">
                Get Property Buyers Directly on Your Phone
              </motion.h2>
              <p className="mt-6 text-lg text-slate-300">
                Facebook & Instagram Ads se qualified buyers directly WhatsApp par.
              </p>

              <div className="mt-8 flex gap-4 flex-col sm:flex-row">
                <a href="https://rzp.io/rzp/XI8LYlK" className="bg-blue-600 px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition">Book Slot ₹499</a>
                <a href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads" className="border border-white/30 px-6 py-4 rounded-2xl font-bold hover:bg-white/10">Chat on WhatsApp</a>
              </div>

              <p className="mt-4 text-sm text-slate-400">Limited offer • Setup in 24 hours</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl">
                <p className="text-blue-300 text-sm">Performance</p>
                <h3 className="text-3xl font-bold mt-2">50+ Leads in 7 Days</h3>
                <p className="text-slate-300 mt-2">High quality buyers for your property</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Qualified Buyers Only',
              'More Site Visits',
              'Direct WhatsApp Leads'
            ].map((item)=> (
              <div key={item} className="bg-white/5 p-6 rounded-2xl backdrop-blur border border-white/10 hover:scale-105 transition">
                <p className="text-xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OFFER */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 rounded-3xl text-center shadow-xl">
            <h3 className="text-3xl font-black">Book Your Slot – ₹499</h3>
            <p className="mt-2">Free Ads Setup Included • Limited Offer</p>
            <a href="https://rzp.io/rzp/XI8LYlK" className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">Pay Now</a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {['Book','Setup','Leads','Close'].map(step => (
              <div key={step} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-xl font-bold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-black">
          <h3 className="text-4xl font-black">Start Getting Buyers Today</h3>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="https://rzp.io/rzp/XI8LYlK" className="bg-white text-black px-6 py-4 rounded-2xl font-bold">Book ₹499</a>
            <a href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads" className="border border-white px-6 py-4 rounded-2xl">WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm">
        Dyrax | 8115302970 <br/>
        ₹499 non-refundable • No guarantee of sales
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/918115302970?text=Hi%20I%20want%20property%20leads" className="fixed bottom-5 right-5 bg-green-500 px-5 py-3 rounded-full shadow-xl font-bold">Chat</a>
    </div>
  );
}
