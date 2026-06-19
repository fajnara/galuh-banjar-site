export default function About() {
  return (
    <section className="about section" id="tentang" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="ph ph--tall has-photo">
            <img
              className="ph__photo"
              src="/treatment.jpg"
              alt="Suasana klinik dan perawatan"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow" data-reveal>
            Sosok di balik klinik
          </p>
          <h2 className="section__title" id="about-title" data-reveal>
            Kamu ditemani dr. Amalia langsung — bukan diserahkan ke alat.
          </h2>
          <p data-reveal>
            Buat dr. Amalia, kulit bagus bukan soal hasil kilat. Ia kenali
            kulitmu dulu, baru menyarankan.
          </p>
          <p data-reveal>
            Ia menyebut diri <em>FaceDesigner</em>: tiap wajah beda, jadi tak ada
            satu resep untuk semua.
          </p>

          <ul className="creds" aria-label="Kredensial dr. Amalia" data-reveal>
            <li>
              <span>Dipl. CIBTAC</span>
              <small>Sertifikasi estetika internasional</small>
            </li>
            <li>
              <span>M.Kes &amp; M.Biomed (AAM)</span>
              <small>Latar pendidikan medis lanjutan</small>
            </li>
            <li>
              <span>FaceDesigner</span>
              <small>Pendekatan personal per wajah</small>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
