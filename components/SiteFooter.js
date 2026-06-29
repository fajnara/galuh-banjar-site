import { wa } from "@/lib/wa";

const IG = "https://instagram.com/galuhbanjarklinik_amuntai";
const TT = "https://tiktok.com/@galuhbanjarklinik";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="kontak">
      <div className="container footer__cta" data-reveal>
        <p className="eyebrow eyebrow--light">Siap merawat kulitmu?</p>
        <h2 className="footer__title">Mulai dari satu pesan ke dr. Amalia.</h2>
        <a
          className="btn btn--gold"
          href={wa("Halo Galuh Banjar, saya mau konsultasi.")}
          target="_blank"
          rel="noopener"
        >
          Konsultasi sekarang
        </a>
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
              <a href={IG} target="_blank" rel="noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href={TT} target="_blank" rel="noopener">
                TikTok
              </a>
            </li>
            <li>
              <a href={wa()} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__base">
        <p className="footer__meta">
          © {year} Galuh Banjar Aesthetic Klinik · Amuntai &amp; Banjarbaru,
          Kalsel.
        </p>
      </div>
    </footer>
  );
}
