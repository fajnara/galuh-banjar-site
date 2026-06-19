const WA = "https://wa.me/628115111315";

const treatments = [
  {
    no: "01",
    title: "Pencerahan & Whitening",
    for: "Untuk kulit kusam yang ingin lebih cerah.",
    desc: "Kapsul atau infus, dipilih sesuai kondisi kulit lewat konsultasi dulu.",
  },
  {
    no: "02",
    title: "Injeksi Vitamin Kulit",
    for: "Untuk kulit sehat & segar dari dalam.",
    desc: "Nutrisi terarah untuk kulit lembap dan berkilau. Diawasi langsung dokter.",
  },
  {
    no: "03",
    title: "Perawatan Jerawat",
    for: "Untuk jerawat & bekas yang membandel.",
    desc: "Bertahap sesuai tingkat jerawat — dari facial sampai rencana di rumah.",
  },
  {
    no: "04",
    title: "Peremajaan / Anti-Aging",
    for: "Untuk garis halus & kekencangan.",
    desc: "Program peremajaan yang disusun bersama dokter, sesuai usia dan targetmu.",
  },
];

export default function Treatments() {
  return (
    <section
      className="treat section"
      id="perawatan"
      aria-labelledby="treat-title"
    >
      <div className="container">
        <div className="section__head">
          <p className="eyebrow" data-reveal>
            Perawatan unggulan
          </p>
          <h2 className="section__title" id="treat-title" data-reveal>
            Empat yang paling sering dicari di sini.
          </h2>
          <p className="section__sub" data-reveal>
            Bukan puluhan layanan — cuma yang paling sering kami kerjakan, dengan
            penjelasan jujur untuk tiap kondisi.
          </p>
        </div>

        <div className="treat__grid">
          {treatments.map((t) => (
            <article className="card" data-reveal key={t.no}>
              <span className="card__no">{t.no}</span>
              <h3 className="card__title">{t.title}</h3>
              <p className="card__for">{t.for}</p>
              <p className="card__desc">{t.desc}</p>
            </article>
          ))}
        </div>

        <p className="treat__foot" data-reveal>
          Punya keluhan lain?{" "}
          <a href={WA} target="_blank" rel="noopener">
            Ceritakan dulu ke kami
          </a>
          .
        </p>
      </div>
    </section>
  );
}
