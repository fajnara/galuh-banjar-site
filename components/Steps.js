const steps = [
  {
    no: "1",
    title: "Konsultasi",
    desc: "Cerita keluhanmu. Dokter menilai kondisi kulit lebih dulu, gratis tekanan.",
  },
  {
    no: "2",
    title: "Rencana perawatan",
    desc: "Kami susun langkah yang masuk akal untuk kulitmu — bukan paket yang dipaksakan.",
  },
  {
    no: "3",
    title: "Perawatan",
    desc: "Dilakukan dan diawasi langsung oleh dokter, dengan alat & bahan yang terjaga.",
  },
  {
    no: "4",
    title: "Pendampingan",
    desc: "Kami temani perkembangan kulitmu, termasuk perawatan lanjutan di rumah.",
  },
];

export default function Steps() {
  return (
    <section className="steps section" id="proses" aria-labelledby="steps-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow" data-reveal>
            Pengalamanmu di klinik
          </p>
          <h2 className="section__title" id="steps-title" data-reveal>
            Empat langkah, tanpa terburu-buru.
          </h2>
        </div>

        <ol className="steps__list">
          {steps.map((s) => (
            <li className="step" data-reveal key={s.no}>
              <span className="step__no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
