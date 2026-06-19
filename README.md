# Galuh Banjar Aesthetic Klinik — Website Pilot

Situs **pilot** untuk Galuh Banjar Aesthetic Klinik (Amuntai & Banjarbaru), dibangun dengan **Next.js (App Router) + JavaScript + Tailwind CSS v4**, siap di-deploy ke **Vercel**. Desain mengikuti `Design_Brief_Website_Klinik.md` (Brief A).

> Versi sebelumnya (HTML/CSS/JS vanilla + GSAP via CDN) dipindah ke folder [`legacy/`](legacy/) sebagai arsip. Aman untuk dihapus kalau migrasi ini sudah final.

**Status konten:** diisi konten **contoh (sample)** agar terlihat seperti situs jadi untuk pratinjau. Foto, harga, dan testimoni **bersifat ilustrasi** dan harus diganti data asli klinik sebelum tayang. Data yang sudah benar/terverifikasi: nama & kredensial dr. Amalia, alamat, nomor WA, akun sosial.

## Stack

- **Next.js 15** — App Router, React Server Components (komponen interaktif pakai `"use client"`).
- **JavaScript** (bukan TypeScript).
- **Tailwind CSS v4** — token brand (warna, font) didefinisikan di `app/globals.css` via `@theme`, sehingga utility seperti `bg-maroon-800` / `text-gold-500` / `font-serif` tersedia. Styling komponen yang lebih kompleks (slider before/after, dekorasi hero, animasi) ditulis sebagai CSS di dalam Tailwind layer (`@layer base`/`@layer components`).
- **next/font** — Fraunces + Jost di-_self-host_ otomatis (tidak lagi memuat dari Google Fonts CDN).
- **GSAP** (npm) — scroll-reveal & parallax di `components/Motion.js`, menghormati `prefers-reduced-motion`.

## Menjalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Push repo ini ke GitHub/GitLab/Bitbucket (proyek belum di-`git init` — jalankan `git init` lalu commit dulu).
2. Di [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. Vercel mendeteksi Next.js otomatis — tidak perlu konfigurasi build. Klik **Deploy**.

Alternatif via CLI: `npm i -g vercel` lalu `vercel` (preview) / `vercel --prod` (produksi).

## Struktur folder

```
galuh-banjar-site/
├─ app/
│  ├─ layout.js        # <html>, font next/font, metadata, no-js→js switch
│  ├─ page.js          # menyusun seluruh section
│  └─ globals.css      # Tailwind + @theme (token brand) + styling komponen
├─ components/
│  ├─ SiteHeader.js    # client: sticky header + nav mobile
│  ├─ Hero.js
│  ├─ About.js
│  ├─ Treatments.js
│  ├─ Proof.js         # bukti + testimoni
│  ├─ BeforeAfter.js   # client: slider before/after (drag/klik/keyboard)
│  ├─ Steps.js
│  ├─ Visit.js
│  ├─ SiteFooter.js
│  └─ Motion.js        # client: GSAP scroll-reveal + parallax
├─ public/assets/      # taruh logo & foto asli di sini (akses via /assets/...)
├─ legacy/             # arsip versi statis lama
├─ next.config.mjs
├─ postcss.config.mjs
├─ jsconfig.json       # alias "@/..."
└─ package.json
```

## Section yang dibangun

1. **Header** — sticky, transparan lalu solid saat scroll; nav + tombol Konsultasi (bukan WA-bubble melayang).
2. **Hero** — headline serif reveal baris-per-baris, garis emas yang menggambar sendiri, potret dr. Amalia (parallax).
3. **Tentang dr. Amalia** — kredensial sebagai cerita (bukan grid ikon "kenapa pilih kami").
4. **Perawatan unggulan** — 4 kartu dikurasi ("untuk siapa & hasilnya"), bukan daftar 20 layanan.
5. **Bukti & cerita** — before/after interaktif (drag/klik/keyboard) + 3 kartu testimoni (contoh).
6. **Pengalaman/proses** — 4 langkah kunjungan.
7. **Kunjungi** — 2 lokasi (Amuntai & Banjarbaru) + jam + peta Google Maps tersemat.
8. **Footer CTA** — ajakan WA + sosial (IG/TikTok) + copyright.

## ⚠️ Konten contoh yang HARUS diganti sebelum tayang

Semua di bawah ini **ilustrasi** untuk pratinjau — ganti dengan milik klinik:

| Item | Lokasi (komponen) | Ganti dengan |
|---|---|---|
| Area foto (monogram "GB") | `Hero.js`, `About.js` | Foto asli dr. Amalia & suasana klinik (resolusi tinggi) |
| Harga `Mulai Rp ...` (×4) | `Treatments.js` | Harga asli tiap treatment |
| Panel before/after | `BeforeAfter.js` | Foto before/after asli **dengan izin pasien** |
| 3 testimoni (Rina/Maya/Sari) | `Proof.js` | Testimoni asli + nama/inisial (dengan izin) |
| Pull-quote "Filosofi Galuh Banjar" | `About.js` | Boleh dipakai/diganti sesuai suara brand asli |
| Peta Amuntai (embed) | `Visit.js` | Embed Google Maps yang tepat (Amuntai & Banjarbaru) |
| Jam buka | `Visit.js` | Konfirmasi jam buka terbaru tiap cabang |
| Nomor WA | konstanta `WA` di tiap komponen | Verifikasi 0811-5111-315 sebelum tayang |

Catatan: nomor WA, alamat, kredensial dr. Amalia, dan akun sosial **bukan** contoh — itu data terverifikasi dari sumber publik (tetap konfirmasi ulang sebelum tayang).

## Data yang dipakai (terverifikasi dari sumber publik)

- Dokter: **dr. Amalia A, M.Kes, M.Biomed (AAM), Dipl. CIBTAC** ("FaceDesigner").
- Lokasi: **Amuntai** (Jl. H. Saberan Effendi, Palampitan Hilir, dekat Pasar Sajumput) & **Banjarbaru** (Jl. Kaca Piring No. 07, Komet).
- WhatsApp: **0811-5111-315** (booking) → dipakai di semua tombol (`wa.me/628115111315`).
- Sosial: IG **@galuhbanjarklinik_amuntai**, TikTok **@galuhbanjarklinik**.
- Treatment (kategori terverifikasi): whitening (kapsul/infus), injeksi vitamin kulit, perawatan jerawat, peremajaan.

> Walau terverifikasi dari sumber publik, **konfirmasikan ulang** nomor & jam ke klinik sebelum tayang.

## ⚠️ Keputusan desain yang masih [ASUMSI] — perlu konfirmasi

- **Palet warna** (maroon/rose tua + krem + emas) adalah hipotesis dari motif mawar 🌹 brand. Ganti via token di `@theme` (`app/globals.css`) bila warna asli berbeda.
- **Tipografi** (Fraunces + Jost) adalah pilihan desain, bukan font brand resmi.
- **Logo**: belum ada — saat ini wordmark teks + ikon mawar SVG. Ganti dengan logo asli di header & footer.
- **Tone copywriting**: hangat/ramah-muslimah Banua — asumsi positioning.

## Catatan teknis

- **Aksesibilitas:** HTML semantik, skip-link, `:focus-visible`, alt/aria pada placeholder, before/after bisa dioperasikan keyboard (panah), kontras teks dijaga.
- **Reduced motion:** jika `prefers-reduced-motion: reduce`, semua animasi dimatikan & konten tampil penuh.
- **Progressive enhancement:** kelas `no-js` → `js` di-swap inline; bila JS gagal, seluruh konten tetap terlihat.
- **Foto:** tidak ada foto orang/klinik lain yang dipakai. Semua media adalah placeholder berlabel.

## Untuk produksi (langkah lanjut)

- Masukkan foto asli (WebP) ke `public/assets/` dan pakai `next/image`.
- Tambahkan favicon, OpenGraph image (via Metadata API di `app/layout.js`), dan domain final.
- Uji Lighthouse (performa/aksesibilitas) setelah foto asli masuk.
