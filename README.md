# Galuh Banjar Aesthetic Klinik — Website Pilot

Situs **pilot** hand-code (HTML/CSS/JS vanilla + GSAP) untuk Galuh Banjar Aesthetic Klinik (Amuntai & Banjarbaru). Dibangun mengikuti `Design_Brief_Website_Klinik.md` (Brief A).

**Status konten:** sekarang sudah diisi konten **contoh (sample)** agar terlihat seperti situs jadi untuk pratinjau ke calon klien. Foto, harga, dan testimoni **bersifat ilustrasi** dan harus diganti data asli klinik sebelum tayang. Data yang sudah benar/terverifikasi: nama & kredensial dr. Amalia, alamat, nomor WA, akun sosial.

> ⚠️ **FOTO = STOK untuk DEMO.** Empat foto di `assets/` (`dr-amalia.jpg`, `treatment.jpg`, `before.jpg`, `after.jpg`) adalah **foto stok placeholder** yang disetujui hanya untuk demo — **bukan** dr. Amalia, bukan pasien Galuh Banjar yang sebenarnya. **WAJIB diganti** foto asli klinik sebelum live.
> **Khusus before/after:** jangan pernah dipajang sebagai "hasil nyata" klinik sebelum diganti foto pasien asli **dengan izin tertulis**. Memajang foto stok sebagai hasil treatment bisa menyesatkan & melanggar etika iklan.

### Penempatan foto (mapping)
| File | Section | Isi |
|---|---|---|
| `assets/dr-amalia.jpg` | Hero (potret melengkung) | Dokter perempuan jas putih, latar klinik |
| `assets/treatment.jpg` | Tentang ("suasana klinik & perawatan") | Dokter menangani pasien yang berbaring |
| `assets/before.jpg` | Bukti — slot **Sebelum** slider | Wajah berjerawat |
| `assets/after.jpg` | Bukti — slot **Sesudah** slider | Wajah bersih (orang & angle sama) |

Slot foto yang **masih placeholder** (belum ada fotonya): logo brand (sekarang wordmark + ikon mawar SVG), dan foto interior tambahan bila diinginkan.

## Cara membuka
Buka `index.html` langsung di browser (double-click). Tidak perlu build/server. GSAP & font dimuat dari CDN, jadi butuh koneksi internet saat pertama kali. Untuk produksi sebaiknya self-host font & GSAP.

## Struktur folder
```
galuh-banjar-site/
├─ index.html        # markup semantik, satu halaman (one-page scroll)
├─ css/styles.css    # seluruh styling + responsif + reduced-motion
├─ js/main.js        # GSAP scroll-reveal, parallax, nav mobile, before/after slider
├─ assets/           # (kosong) taruh logo & foto asli di sini
└─ README.md
```

## Section yang dibangun
1. **Header** — sticky, transparan lalu solid saat scroll; nav + tombol Konsultasi (bukan WA-bubble melayang).
2. **Hero** — headline serif reveal baris-per-baris, garis emas yang menggambar sendiri, potret dr. Amalia (parallax). Positioning lokal + otoritas.
3. **Tentang dr. Amalia** — kredensial sebagai cerita (bukan grid ikon "kenapa pilih kami").
4. **Perawatan unggulan** — 4 kartu dikurasi ("untuk siapa & hasilnya"), bukan daftar 20 layanan.
5. **Bukti & cerita** — before/after interaktif (drag/klik/keyboard) + 3 kartu testimoni (contoh).
6. **Pengalaman/proses** — 4 langkah kunjungan.
7. **Kunjungi** — 2 lokasi (Amuntai & Banjarbaru) + jam + **peta Google Maps tersemat** (embed, area Amuntai).
8. **Footer CTA** — ajakan WA + sosial (IG/TikTok) + copyright.

## ⚠️ Konten contoh yang HARUS diganti sebelum tayang
Semua di bawah ini **ilustrasi** untuk pratinjau — ganti dengan milik klinik:

| Item | Lokasi | Ganti dengan |
|---|---|---|
| Area foto (monogram "GB") | Hero & Tentang | Foto asli dr. Amalia & suasana klinik (resolusi tinggi) |
| Harga `Mulai Rp ...` (×4) | Perawatan | Harga asli tiap treatment (ada catatan "harga ilustrasi" di bawah grid) |
| Panel before/after | Bukti | Foto before/after asli **dengan izin pasien** |
| 3 testimoni (Rina/Maya/Sari) | Bukti | Testimoni asli + nama/inisial (dengan izin) |
| Pull-quote "Filosofi Galuh Banjar" | Tentang | Boleh dipakai/diganti sesuai suara brand asli |
| Peta Amuntai (embed) | Kunjungi | Embed Google Maps yang tepat di titik klinik (Amuntai & Banjarbaru) |
| Jam buka | Kunjungi | Konfirmasi jam buka terbaru tiap cabang |
| Nomor WA | Semua CTA | Verifikasi 0811-5111-315 sebelum tayang |

Catatan: nomor WA, alamat, kredensial dr. Amalia, dan akun sosial **bukan** contoh — itu data terverifikasi dari sumber publik (tetap konfirmasi ulang sebelum tayang).

## Data yang dipakai (terverifikasi dari sumber publik)
- Dokter: **dr. Amalia A, M.Kes, M.Biomed (AAM), Dipl. CIBTAC** ("FaceDesigner").
- Lokasi: **Amuntai** (Jl. H. Saberan Effendi, Palampitan Hilir, dekat Pasar Sajumput) & **Banjarbaru** (Jl. Kaca Piring No. 07, Komet).
- WhatsApp: **0811-5111-315** (booking) → dipakai di semua tombol (`wa.me/628115111315`). Nomor konsultasi dokter 0811-5571-987 juga terverifikasi.
- Sosial: IG **@galuhbanjarklinik_amuntai**, TikTok **@galuhbanjarklinik**.
- Treatment (kategori terverifikasi): whitening (kapsul/infus), injeksi vitamin kulit, perawatan jerawat, peremajaan.

> Walau terverifikasi dari sumber publik, **konfirmasikan ulang** nomor & jam ke klinik sebelum tayang.

## ⚠️ Keputusan desain yang masih [ASUMSI] — perlu konfirmasi
- **Palet warna** (maroon/rose tua + krem + emas) adalah hipotesis dari motif mawar 🌹 brand. **Bukan** warna brand resmi yang terkonfirmasi. Ganti via CSS variables di `:root` (`css/styles.css`) bila warna asli berbeda.
- **Tipografi** (Fraunces + Jost) adalah pilihan desain, bukan font brand resmi.
- **Logo**: belum ada — saat ini wordmark teks + ikon mawar SVG. Ganti dengan logo asli di header & footer.
- **Tone copywriting**: hangat/ramah-muslimah Banua — asumsi positioning, silakan sesuaikan.

## Aset yang dibutuhkan dari user
1. Logo (SVG/PNG transparan).
2. Foto asli resolusi tinggi: potret dr. Amalia, ruang klinik, proses treatment, before/after (dengan izin).
3. Konfirmasi warna brand & font (atau biarkan memakai arah desain ini).
4. Daftar treatment unggulan + harga yang boleh ditampilkan.
5. Nomor WA & jam buka resmi terbaru per cabang.
6. Embed Google Maps tiap lokasi.

## Catatan teknis
- **Aksesibilitas:** HTML semantik, skip-link, `:focus-visible`, alt/aria pada placeholder, before/after bisa dioperasikan keyboard (panah), kontras teks dijaga.
- **Reduced motion:** jika `prefers-reduced-motion: reduce`, semua animasi dimatikan & konten tampil penuh.
- **Progressive enhancement:** bila JS/GSAP gagal dimuat, seluruh konten tetap terlihat (tidak ada yang terkunci di balik animasi).
- **Anti-pattern lokal:** sengaja menghindari ke-10 pola generik (hero "klinik terdekat", grid treatment raksasa, WA bubble melayang, ikon "kenapa pilih kami", counter 0+, carousel promo Canva, slider testimoni klise, dinding FAQ-SEO, Poppins+pink pastel, zero motion).
- **Foto:** tidak ada foto orang/klinik lain yang dipakai. Semua media adalah placeholder berlabel.

## Untuk produksi (rekomendasi langkah lanjut)
- Self-host GSAP & font (hindari ketergantungan CDN).
- Kompres foto (WebP), tambahkan `loading="lazy"`.
- Tambahkan favicon, OpenGraph image, dan `sitemap`/meta sesuai domain final.
- Uji Lighthouse (performa/aksesibilitas) setelah foto asli masuk.
