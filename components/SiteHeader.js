"use client";

import { useEffect, useState } from "react";

const WA = "https://wa.me/628115111315";

export default function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever a link inside it is tapped
  const handleListClick = (e) => {
    if (e.target.closest("a")) setOpen(false);
  };

  return (
    <header className={`site-header${stuck ? " is-stuck" : ""}`} id="top">
      <div className="container header__inner">
        <a
          className="brand"
          href="#beranda"
          aria-label="Galuh Banjar Aesthetic Klinik — beranda"
        >
          <span className="brand__mark" aria-hidden="true">
            {/* decorative rose mark */}
            <svg
              viewBox="0 0 32 32"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M16 27c6-3 9-7 9-12a6 6 0 0 0-9-5 6 6 0 0 0-9 5c0 5 3 9 9 12Z" />
              <path d="M16 10c0 4-2 7-5 9M16 10c0 4 2 7 5 9" />
            </svg>
          </span>
          <span className="brand__text">
            Galuh&nbsp;Banjar<small>Aesthetic Klinik</small>
          </span>
        </a>

        <nav className="nav" aria-label="Navigasi utama">
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Buka menu</span>
            <span className="nav__bars" aria-hidden="true"></span>
          </button>
          <ul
            className={`nav__list${open ? " is-open" : ""}`}
            id="nav-list"
            onClick={handleListClick}
          >
            <li>
              <a href="#tentang">Dokter</a>
            </li>
            <li>
              <a href="#perawatan">Perawatan</a>
            </li>
            <li>
              <a href="#bukti">Bukti</a>
            </li>
            <li>
              <a href="#kunjungi">Kunjungi</a>
            </li>
            <li>
              <a
                className="btn btn--ghost nav__cta"
                href={WA}
                target="_blank"
                rel="noopener"
              >
                Konsultasi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
