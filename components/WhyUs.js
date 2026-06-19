const points = [
  {
    icon: "👩‍⚕️",
    title: "Ditangani langsung dokter",
    desc: "Bukan asisten, bukan alat otomatis. Setiap tindakan didampingi dr. Amalia secara langsung.",
  },
  {
    icon: "🤝",
    title: "Tidak dipaksa treatment",
    desc: "Kami jelaskan dulu, kamu yang putuskan. Tidak ada penjualan paksa atau paket yang tidak perlu.",
  },
  {
    icon: "✨",
    title: "Pendekatan personal",
    desc: "Setiap wajah berbeda. Program perawatan disesuaikan kondisi dan kebutuhan kulitmu — bukan template.",
  },
  {
    icon: "📍",
    title: "Dua cabang aktif",
    desc: "Amuntai & Banjarbaru — pilih yang paling dekat dari rumahmu, standar perawatan tetap sama.",
  },
  {
    icon: "💬",
    title: "Pendampingan setelah treatment",
    desc: "Ada pertanyaan setelah perawatan? Kami tetap bisa dihubungi dan siap membantu.",
  },
];

export default function WhyUs() {
  return (
    <section className="why section" id="kenapa-galuh" aria-labelledby="why-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow" data-reveal>
            Kenapa Galuh Banjar?
          </p>
          <h2 className="section__title" id="why-title" data-reveal>
            Bukan sekadar klinik. Ini tentang kepercayaan.
          </h2>
        </div>
        <div className="why__grid">
          {points.map((p) => (
            <div className="why__card" data-reveal key={p.title}>
              <span className="why__icon" aria-hidden="true">{p.icon}</span>
              <h3 className="why__title">{p.title}</h3>
              <p className="why__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
