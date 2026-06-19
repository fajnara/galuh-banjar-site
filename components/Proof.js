import BeforeAfter from "@/components/BeforeAfter";

const quotes = [
  {
    text: "Niat awal cuma facial, malah dijelasin pelan-pelan soal kulitku. Sekarang rutin, dan bedanya kelihatan.",
    name: "Rina",
    loc: "Amuntai",
  },
  {
    text: "Dokternya nggak langsung nawarin yang mahal. Dijelasin mana yang perlu duluan.",
    name: "Maya",
    loc: "Banjarbaru",
  },
  {
    text: "Tempatnya bersih, adminnya ramah, hasilnya sesuai yang dijanjikan.",
    name: "Sari",
    loc: "Amuntai",
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
            Bukan janji kami — cerita mereka.
          </h2>
          <p className="section__sub" data-reveal>
            Geser untuk lihat sebelum &amp; sesudah.
          </p>
        </div>

        <BeforeAfter />

        <div className="quotes">
          {quotes.map((q) => (
            <blockquote className="quote" data-reveal key={q.name + q.loc}>
              <p>{q.text}</p>
              <footer className="quote__by">
                <span className="quote__avatar" aria-hidden="true">
                  {q.name.charAt(0)}
                </span>
                <span className="quote__meta">
                  <strong>{q.name}</strong>
                  <small>{q.loc}</small>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="quotes__note" data-reveal>
          Testimoni &amp; foto di atas masih contoh — akan diganti milik pasien,
          atas izin.
        </p>
      </div>
    </section>
  );
}
