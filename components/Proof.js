import BeforeAfter from "@/components/BeforeAfter";

const quotes = [
  {
    text: "“Awalnya cuma mau coba facial, tapi malah dijelaskan pelan-pelan soal kondisi kulitku. Sekarang sudah rutin dan beneran kelihatan bedanya.”",
    cite: "Rina · Amuntai",
  },
  {
    text: "“Yang bikin nyaman, dokternya nggak langsung menyuruh treatment mahal. Dikasih tahu mana yang perlu duluan.”",
    cite: "Maya · Banjarbaru",
  },
  {
    text: "“Tempatnya bersih, adminnya ramah, dan hasilnya sesuai yang dijelaskan di awal. Recommended.”",
    cite: "Sari · Amuntai",
  },
];

export default function Proof() {
  return (
    <section className="proof section" id="bukti" aria-labelledby="proof-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow" data-reveal>
            Bukti &amp; cerita
          </p>
          <h2 className="section__title" id="proof-title" data-reveal>
            Hasil yang jujur, dari pasien yang nyata.
          </h2>
          <p className="section__sub" data-reveal>
            Geser pembanding untuk melihat perubahan sebelum dan sesudah
            perawatan.
          </p>
        </div>

        {/* Before / After (drag). Panel = placeholder; ganti dengan foto asli (izin pasien). */}
        <BeforeAfter />

        {/* Testimoni: CONTOH untuk pratinjau. Ganti dengan testimoni asli (izin pasien). */}
        <div className="quotes">
          {quotes.map((q) => (
            <blockquote className="quote" data-reveal key={q.cite}>
              <p>{q.text}</p>
              <cite>{q.cite}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
