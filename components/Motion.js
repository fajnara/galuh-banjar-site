"use client";

import { useEffect } from "react";

/* GSAP scroll-reveal + parallax — ported from the original main.js.
   - Loads GSAP/ScrollTrigger from npm (no CDN).
   - Respects prefers-reduced-motion.
   - Initial hidden state comes from `.js [data-reveal]` in globals.css,
     so content stays visible if this never runs. */
export default function Motion() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealAllStatic = () => {
      document.querySelectorAll("[data-reveal],[data-line]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    if (prefersReduced) {
      revealAllStatic();
      return;
    }

    let cancelled = false;
    let ctx;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      const gsap = gsapMod.gsap || gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* hero intro timeline — JS owns the initial hidden state here so it
           plays regardless of the .js class. */
        const heroLines = gsap.utils.toArray("[data-line]");
        const heroReveals = gsap.utils.toArray(".hero [data-reveal]");
        gsap.set(heroLines, { opacity: 0, y: 40 });
        gsap.set(heroReveals, { opacity: 0, y: 24 });
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(heroLines, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }).to(
          heroReveals,
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          "-=0.5"
        );

        /* the gold underline draws itself */
        const accentLine = document.querySelector(".accent__line path");
        if (accentLine && accentLine.getTotalLength) {
          const len = accentLine.getTotalLength();
          gsap.set(accentLine, {
            strokeDasharray: len,
            strokeDashoffset: len,
          });
          gsap.to(accentLine, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.inOut",
            delay: 0.9,
          });
        }

        /* generic scroll reveals (skip hero + cards — handled separately) */
        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          if (el.closest(".hero")) return;
          if (el.classList.contains("card")) return;
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        });

        /* soft parallax on hero portrait */
        const media = document.querySelector("[data-parallax]");
        if (media) {
          gsap.to(media, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        /* treatment cards: staggered reveal when the grid enters */
        const cards = gsap.utils.toArray(".card");
        if (cards.length) {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".treat__grid",
              start: "top 82%",
              once: true,
            },
          });
        }
      });
    })();

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}
