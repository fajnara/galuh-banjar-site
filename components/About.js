export default function About() {
  return (
    <section className="about section" id="tentang" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div
            className="ph ph--tall"
            role="img"
            aria-label="Suasana klinik &amp; perawatan"
          >
            <span className="ph__monogram" aria-hidden="true">
              GB
            </span>
            <span className="ph__label">
              Suasana klinik &amp; perawatan
              <br />
              <em>area foto</em>
            </span>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow" data-reveal>
            Sosok di balik klinik
          </p>
          <h2 className="section__title" id="about-title" data-reveal>
            Bukan sekadar klinik — ada dokter yang benar-benar mendampingi.
          </h2>
          <p data-reveal>
            Galuh Banjar lahir dari satu keyakinan dr. Amalia: perawatan estetik
            yang baik bukan soal hasil instan, melainkan tentang memahami kulit
            setiap pasien dan merawatnya dengan telaten.
          </p>
          <p data-reveal>
            Ia menyebut dirinya seorang <em>FaceDesigner</em> — karena tiap
            wajah punya cerita, struktur, dan kebutuhan yang berbeda. Tidak ada
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

          <blockquote className="pullquote" data-reveal>
            “Kami tidak memulai dari treatment — kami memulai dari
            mendengarkan.”
            <cite>Filosofi Galuh Banjar</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
