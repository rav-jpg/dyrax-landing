"use client";

export default function Home() {
  return (
    <div className="main">
      {/* NAVIGATION BAR */}
      <header className="nav">
        <div className="logo">Dyrax</div>
        <nav>
          <a href="#book" className="btn small">Book Demo</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="headline">
          Real Estate Buyer Leads <br />
          <span className="highlight">Direct WhatsApp Par</span>
        </h1>
        <p className="sub">₹499 में 7 दिन का demo — सिर्फ serious builders/agents के लिए</p>

        <a href="#book" className="btn">Start ₹499 Demo</a>
      </section>

      {/* TRUST SECTION */}
      <section className="trust">
        <h2>Trusted by 100+ Builders & Agents</h2>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-item">✔ 7 Days Live Ads</div>
        <div className="feature-item">✔ Targeted Buyer Leads</div>
        <div className="feature-item">✔ Direct WhatsApp Inquiry</div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>
        <div className="grid">
          <div className="step">
            <h3>1. Fill Form</h3>
            <p>Project details submit करें</p>
          </div>
          <div className="step">
            <h3>2. ₹499 Payment</h3>
            <p>Demo slot confirm करें</p>
          </div>
          <div className="step">
            <h3>3. Get Leads</h3>
            <p>WhatsApp पर direct buyers</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Client Results</h2>
        <div className="cards">
          <div className="card">“3 दिन में 40+ leads आए”</div>
          <div className="card">“Cost per lead आधा हो गया”</div>
          <div className="card">“Direct WhatsApp buyers मिल रहे हैं”</div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="offer">
        <h2>₹499 Demo Includes</h2>
        <ul>
          <li>✔ 7 दिन Meta Ads Setup</li>
          <li>✔ Targeted Audience</li>
          <li>✔ WhatsApp Lead Flow</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <h2>Common Questions</h2>
        <div className="faq-item">
          <p><b>Leads Genuine होंगे?</b><br /> हाँ, targeted buyers पर ads चलेंगे</p>
        </div>
        <div className="faq-item">
          <p><b>₹499 क्यों?</b><br /> Demo test करने के लिए low-risk entry</p>
        </div>
        <div className="faq-item">
          <p><b>Result कब मिलेगा?</b><br /> 2-3 दिन में leads शुरू होंगे</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="book" className="cta">
        <h2>Limited Slots – Book Now</h2>
        <a
          href="https://forms.zoho.in/dyraxmarketing/form/LeadEntry/builder"
          className="btn big"
        >
          Fill Form & Continue
        </a>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/918115302970?text=Hi%20I%20want%20demo"
        className="whatsapp"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        .main {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a, #020617);
          color: white;
          line-height: 1.6;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo {
          font-weight: bold;
          font-size: 24px;
        }

        .hero {
          text-align: center;
          padding: 100px 20px;
        }

        .headline {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .highlight {
          color: #facc15;
        }

        .sub {
          color: #ccc;
          margin: 20px 0;
          font-size: 18px;
        }

        .btn {
          display: inline-block;
          margin-top: 30px;
          padding: 16px 32px;
          background: #facc15;
          color: black;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn.small {
          padding: 10px 20px;
          font-size: 14px;
        }

        .trust {
          text-align: center;
          padding: 40px 20px;
          font-size: 20px;
          color: #facc15;
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 60px 20px;
          flex-wrap: wrap;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px 30px;
          border-radius: 10px;
          width: 220px;
          text-align: center;
          transition: transform 0.3s;
        }

        .feature-item:hover {
          transform: scale(1.05);
        }

        .steps {
          padding: 80px 20px;
          text-align: center;
        }

        .steps h2 {
          margin-bottom: 40px;
          font-size: 32px;
        }

        .grid {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .step {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px 25px;
          border-radius: 10px;
          width: 260px;
        }

        .testimonials {
          text-align: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.05);
        }

        .testimonials h2 {
          margin-bottom: 40px;
          font-size: 32px;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          color: black;
          padding: 25px;
          border-radius: 10px;
          width: 280px;
        }

        .offer {
          text-align: center;
          padding: 60px 20px;
        }

        .offer h2 {
          margin-bottom: 20px;
          font-size: 32px;
        }

        .offer ul {
          list-style: none;
          padding: 0;
        }

        .offer li {
          margin: 10px 0;
        }

        .faq {
          padding: 60px 20px;
          text-align: center;
        }

        .faq h2 {
          margin-bottom: 40px;
          font-size: 32px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
          margin: 15px auto;
          width: 500px;
          text-align: left;
        }

        .cta {
          text-align: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.05);
        }

        .cta h2 {
          margin-bottom: 20px;
          font-size: 32px;
        }

        .whatsapp {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #25d366;
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s;
        }

        .whatsapp:hover {
          transform: scale(1.1);
        }

        footer {
          text-align: center;
          padding: 20px;
          color: #aaa;
          background: rgba(255, 255, 255, 0.05);
        }

        footer a {
          margin: 0 15px;
          color: #aaa;
          text-decoration: none;
        }

      `}</style>
    </div>
  );
}
