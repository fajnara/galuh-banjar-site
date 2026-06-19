const WA = "https://wa.me/628115111315";
const IG = "https://instagram.com/galuhbanjarklinik_amuntai";
const TT = "https://tiktok.com/@galuhbanjarklinik";

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

      <div className="container footer__cols">
        <div className="footer__col footer__col--brand">
          <span className="brand brand--footer">
            <span className="brand__text">
              Galuh Banjar<small>Aesthetic Klinik</small>
            </span>
          </span>
          <p className="footer__tag">
            Estetika yang ditemani dokter, untuk perempuan Banua.
          </p>
          <ul className="footer__social" aria-label="Media sosial">
            <li>
              <a href={IG} target="_blank" rel="noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href={TT} target="_blank" rel="noopener">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__col" aria-label="Navigasi footer">
          <h3 className="footer__h">Jelajah</h3>
          <ul className="footer__links">
            <li>
              <a href="#tentang">Dokter</a>
            </li>
            <li>
              <a href="#perawatan">Perawatan</a>
            </li>
            <li>
              <a href="#bukti">Bukti</a>
            </li>
            <li>
              <a href="#kunjungi">Kunjungi</a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__h">Lokasi</h3>
          <ul className="footer__links footer__links--plain">
            <li>Amuntai, Hulu Sungai Utara</li>
            <li>Banjarbaru Utara</li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">Kontak</h3>
          <ul className="footer__links">
            <li>
              <a href={WA} target="_blank" rel="noopener">
                WhatsApp 0811-5111-315
              </a>
            </li>
            <li className="footer__links--plain">Senin–Sabtu 09.00–18.00</li>
            <li className="footer__links--plain">Minggu 09.00–17.00</li>
          </ul>
        </div>
      </div>

      <div className="container footer__base">
        <p className="footer__meta">
          © {year} Galuh Banjar Aesthetic Klinik · Amuntai &amp; Banjarbaru,
          Kalsel.
        </p>
        <p className="footer__note">Pratinjau desain.</p>
      </div>
    </footer>
  );
}
