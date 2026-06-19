const WA = "https://wa.me/628115111315";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="kontak">
      <div className="container footer__cta" data-reveal>
        <p className="eyebrow eyebrow--light">Siap merawat kulitmu?</p>
        <h2 className="footer__title">Mulai dari satu pesan ke dr. Amalia.</h2>
        <a className="btn btn--gold" href={WA} target="_blank" rel="noopener">
          Konsultasi sekarang
        </a>
        <p className="footer__sub">
          WhatsApp 0811-5111-315 · Amuntai &amp; Banjarbaru
        </p>
      </div>

      <div className="container footer__base">
        <div className="brand brand--footer">
          <span className="brand__text">
            Galuh Banjar<small>Aesthetic Klinik</small>
          </span>
        </div>
        <nav className="footer__nav" aria-label="Navigasi footer">
          <ul>
            <li><a href="#tentang">Dokter</a></li>
            <li><a href="#perawatan">Perawatan</a></li>
            <li><a href="#bukti">Hasil &amp; Testimoni</a></li>
            <li><a href="#kunjungi">Kunjungi Kami</a></li>
          </ul>
        </nav>
        <ul className="footer__social" aria-label="Media sosial">
          <li>
            <a
              href="https://instagram.com/galuhbanjarklinik_amuntai"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com/@galuhbanjarklinik"
              target="_blank"
              rel="noopener"
            >
              TikTok
            </a>
          </li>
        </ul>
        <p className="footer__meta">
          © {year} Galuh Banjar Aesthetic Klinik · Amuntai &amp; Banjarbaru,
          Kalsel.
        </p>
      </div>
    </footer>
  );
}
