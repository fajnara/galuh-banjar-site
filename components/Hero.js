const WA = "https://wa.me/628115111315";

export default function Hero() {
  return (
    <section
      className="hero hero--full"
      id="beranda"
      aria-labelledby="hero-title"
    >
      <div className="hero__bg" aria-hidden="true">
        <img className="hero__img" src="/hero.jpg" alt="" fetchPriority="high" />
        <span className="hero__scrim"></span>
      </div>

      <div className="container">
        <div className="hero__inner">
          <p className="eyebrow eyebrow--light" data-reveal>
            Estetika yang ditemani dokter · Amuntai &amp; Banjarbaru
          </p>
          <h1 className="hero__title" id="hero-title">
            <span className="line" data-line>
              Wajahmu punya cerita.
            </span>
            <span className="line" data-line>
              Kami rawat{" "}
              <span className="accent">
                pelan-pelan
                <svg
                  className="accent__line"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C40 3 160 2 198 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </h1>
          <div className="hero__stats" data-reveal>
            <div className="stat">
              <strong>1.000+</strong>
              <span>Pasien ditangani</span>
            </div>
            <div className="stat">
              <strong>2</strong>
              <span>Cabang aktif</span>
            </div>
            <div className="stat">
              <strong>CIBTAC</strong>
              <span>Dokter bersertifikasi</span>
            </div>
          </div>
          <div className="hero__actions" data-reveal>
            <a className="btn btn--gold" href={WA} target="_blank" rel="noopener">
              Konsultasi Awal via WhatsApp
            </a>
            <a className="btn btn--text" href="#perawatan">
              Lihat perawatan <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
