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
            Di sini kamu tidak diserahkan ke alat. Kamu ditemani dr. Amalia
            langsung.
          </h2>
          <p data-reveal>
            Buat dr. Amalia, kulit yang bagus bukan soal hasil kilat. Ia kenalan
            dulu dengan kulitmu — baru menyarankan, bukan buru-buru menyuntik.
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
