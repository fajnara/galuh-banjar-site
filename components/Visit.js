import { wa } from "@/lib/wa";

export default function Visit() {
  return (
    <section className="visit section" id="kunjungi" aria-labelledby="visit-title">
      <div className="container visit__grid">
        <div className="visit__copy">
          <p className="eyebrow" data-reveal>
            Kunjungi kami
          </p>
          <h2 className="section__title" id="visit-title" data-reveal>
            Dua lokasi, satu standar perawatan.
          </h2>

          <div className="place" data-reveal>
            <h3>Amuntai</h3>
            <p>
              Jl. H. Saberan Effendi, Palampitan Hilir (dekat Pasar Sajumput),
              <br />
              Amuntai, Hulu Sungai Utara, Kalsel.
            </p>
            <p className="place__wa">
              <a
                href={wa(
                  "Halo Galuh Banjar Amuntai, saya mau tanya jadwal & janji temu."
                )}
                target="_blank"
                rel="noopener"
              >
                WhatsApp 0811-5111-315
              </a>
            </p>
            <a
              className="btn btn--outline-sm"
              href="https://maps.google.com/maps?q=Jl+H+Saberan+Effendi+Palampitan+Hilir+Amuntai+Hulu+Sungai+Utara"
              target="_blank"
              rel="noopener"
            >
              Buka di Google Maps ↗
            </a>
          </div>

          <div className="place" data-reveal>
            <h3>Banjarbaru</h3>
            <p>Jl. Kaca Piring No. 07, Kel. Komet, Banjarbaru Utara, Kalsel.</p>
            <p className="place__wa">
              <a
                href={wa(
                  "Halo Galuh Banjar Banjarbaru, saya mau tanya jadwal & janji temu."
                )}
                target="_blank"
                rel="noopener"
              >
                WhatsApp 0811-5111-315
              </a>
            </p>
            <a
              className="btn btn--outline-sm"
              href="https://maps.google.com/maps?q=Jl+Kaca+Piring+No+07+Kel+Komet+Banjarbaru+Utara+Kalsel"
              target="_blank"
              rel="noopener"
            >
              Buka di Google Maps ↗
            </a>
          </div>

          <p className="hours" data-reveal>
            <strong>Jam buka</strong>
            <br />
            Senin–Sabtu 09.00–18.00 · Minggu 09.00–17.00
          </p>
        </div>

        <div className="visit__map" data-reveal>
          <iframe
            className="map-embed"
            title="Peta lokasi Galuh Banjar — Amuntai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Palampitan%20Hilir%2C%20Amuntai%2C%20Hulu%20Sungai%20Utara&z=14&output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
