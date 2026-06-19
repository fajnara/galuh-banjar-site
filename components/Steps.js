const steps = [
  {
    no: "1",
    title: "Konsultasi",
    desc: "Cerita keluhanmu. Dokter menilai kulitmu dulu, tanpa tekanan.",
  },
  {
    no: "2",
    title: "Rencana perawatan",
    desc: "Langkah yang masuk akal untuk kulitmu — bukan paket dipaksakan.",
  },
  {
    no: "3",
    title: "Perawatan",
    desc: "Dikerjakan & diawasi langsung dokter, dengan alat terjaga.",
  },
  {
    no: "4",
    title: "Pendampingan",
    desc: "Kami temani perkembangannya, termasuk perawatan di rumah.",
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
