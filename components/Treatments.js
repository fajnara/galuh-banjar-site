const WA = "https://wa.me/628115111315";

const treatments = [
  {
    no: "01",
    title: "Pencerahan & Whitening",
    for: "Untuk kulit kusam, ingin tampak lebih cerah merata.",
    desc: "Pilihan kapsul & infus whitening. Kami bantu pilih yang sesuai kondisi kulit lewat konsultasi dulu — bukan langsung suntik.",
    price: "Rp 250.000",
  },
  {
    no: "02",
    title: "Injeksi Vitamin Kulit",
    for: "Untuk yang ingin kulit lebih sehat & segar dari dalam.",
    desc: "Nutrisi terarah untuk kelembapan dan kilau alami. Dilakukan dan diawasi langsung oleh dokter.",
    price: "Rp 200.000",
  },
  {
    no: "03",
    title: "Perawatan Jerawat",
    for: "Untuk kulit berjerawat & bekasnya yang membandel.",
    desc: "Pendekatan bertahap sesuai tingkat jerawat — facial, perawatan, hingga rencana di rumah. Sabar, bukan dipaksa.",
    price: "Rp 150.000",
  },
  {
    no: "04",
    title: "Peremajaan / Anti-Aging",
    for: "Untuk yang mulai merawat garis halus & kekencangan.",
    desc: "Program peremajaan yang direncanakan bersama dokter, menyesuaikan usia dan target kulitmu.",
    price: "Rp 350.000",
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
            Empat hal yang paling sering perempuan Banua cari di sini.
          </h2>
          <p className="section__sub" data-reveal>
            Kami sengaja tidak memajang puluhan layanan. Ini yang kami kerjakan
            paling sering — dengan penjelasan jujur: untuk siapa, dan apa yang
            bisa diharapkan.
          </p>
        </div>

        <div className="treat__grid">
          {treatments.map((t) => (
            <article className="card" data-reveal key={t.no}>
              <span className="card__no">{t.no}</span>
              <h3 className="card__title">{t.title}</h3>
              <p className="card__for">{t.for}</p>
              <p className="card__desc">{t.desc}</p>
              <p className="card__price">
                Mulai <strong>{t.price}</strong>
              </p>
            </article>
          ))}
        </div>

        <p className="treat__foot" data-reveal>
          Punya keluhan lain?{" "}
          <a href={WA} target="_blank" rel="noopener">
            Ceritakan ke kami dulu
          </a>{" "}
          — konsultasi sebelum memutuskan.
        </p>
      </div>
    </section>
  );
}
