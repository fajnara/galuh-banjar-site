const WA = "https://wa.me/628115111315";

export default function Hero() {
  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__bloom hero__bloom--1"></span>
        <span className="hero__bloom hero__bloom--2"></span>
        <span className="hero__grain"></span>
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal>
            Klinik Estetika — Amuntai &amp; Banjarbaru
          </p>
          <h1 className="hero__title" id="hero-title">
            <span className="line" data-line>
              Cantik yang dimulai
            </span>
            <span className="line" data-line>
              dari tangan seorang{" "}
              <span className="accent">
                dokter
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
          <p className="hero__lede" data-reveal>
            Dipimpin <strong>dr.&nbsp;Amalia, Dipl.&nbsp;CIBTAC</strong> —
            perawatan estetik yang aman, telaten, dan dekat dengan perempuan
            Banua.
          </p>
          <div className="hero__actions" data-reveal>
            <a
              className="btn btn--solid"
              href={WA}
              target="_blank"
              rel="noopener"
            >
              Konsultasi via WhatsApp
            </a>
            <a className="btn btn--text" href="#perawatan">
              Lihat perawatan <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__media" data-parallax>
          <figure className="portrait portrait--arch">
            <div
              className="ph ph--portrait"
              role="img"
              aria-label="Potret dr. Amalia"
            >
              <span className="ph__monogram" aria-hidden="true">
                GB
              </span>
              <span className="ph__label">
                Potret dr.&nbsp;Amalia
                <br />
                <em>area foto</em>
              </span>
            </div>
            <figcaption className="portrait__cap">
              dr. Amalia A, M.Kes, M.Biomed (AAM), Dipl. CIBTAC
            </figcaption>
          </figure>
        </div>
      </div>

      <a className="hero__scroll" href="#tentang" aria-label="Gulir ke bawah">
        <span className="hero__scroll-dot" aria-hidden="true"></span>
        <span>Telusuri</span>
      </a>
    </section>
  );
}
