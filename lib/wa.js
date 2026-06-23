// Satu sumber nomor WhatsApp + helper prefill pesan.
// Pakai di semua CTA: wa("Halo ...") → membuka chat dengan teks terisi.
export const WA_PHONE = "628115111315";

export const wa = (msg) =>
  `https://wa.me/${WA_PHONE}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
