/* =========================================================
   Galuh Banjar Aesthetic Klinik — interactions
   - GSAP + ScrollTrigger (subtle, purposeful motion)
   - Respects prefers-reduced-motion
   - Progressive enhancement: if JS/GSAP fail, content is visible
   ========================================================= */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";

  /* ---------- current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- sticky header state ---------- */
  var header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 24);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- before / after comparison (vanilla, no GSAP needed) ---------- */
  (function beforeAfter() {
    var frame = document.getElementById("ba");
    var before = document.getElementById("ba-before");
    var handle = document.getElementById("ba-handle");
    if (!frame || !before || !handle) return;

    var dragging = false;
    function apply(pct) {
      pct = Math.max(0, Math.min(100, pct));
      var clip = "inset(0 " + (100 - pct) + "% 0 0)";
      before.style.clipPath = clip;
      before.style.webkitClipPath = clip;
      handle.style.left = pct + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
    function setPos(clientX) {
      var rect = frame.getBoundingClientRect();
      apply(((clientX - rect.left) / rect.width) * 100);
    }
    function start() { dragging = true; }
    function end() { dragging = false; }
    function move(e) {
      if (!dragging) return;
      var x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    }
    handle.addEventListener("mousedown", start);
    handle.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    // click anywhere on frame jumps the divider
    frame.addEventListener("click", function (e) {
      if (e.target === handle || handle.contains(e.target)) return;
      setPos(e.clientX);
    });
    // keyboard support
    handle.addEventListener("keydown", function (e) {
      var now = parseFloat(handle.getAttribute("aria-valuenow")) || 50;
      if (e.key === "ArrowLeft") { now -= 4; }
      else if (e.key === "ArrowRight") { now += 4; }
      else { return; }
      e.preventDefault();
      apply(now);
    });
  })();

  /* ---------- motion ---------- */
  // If we can't / shouldn't animate, make sure everything is visible.
  function revealAllStatic() {
    document.querySelectorAll("[data-reveal],[data-line]").forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  if (prefersReduced || !hasGSAP) {
    revealAllStatic();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* hero intro timeline.
     NOTE: elements start at opacity:0 from CSS, so we animate *to* the
     visible state (never use .from() here or they'd stay invisible). */
  var heroLines = gsap.utils.toArray("[data-line]");
  var heroReveals = gsap.utils.toArray(".hero [data-reveal]");
  gsap.set(heroLines, { y: 40 });
  gsap.set(heroReveals, { y: 24 });
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(heroLines, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 })
    .to(heroReveals, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, "-=0.5");

  /* the gold underline draws itself */
  var accentLine = document.querySelector(".accent__line path");
  if (accentLine && accentLine.getTotalLength) {
    var len = accentLine.getTotalLength();
    gsap.set(accentLine, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(accentLine, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut", delay: 0.9 });
  }

  /* generic scroll reveals (skip hero — handled above — and cards — handled below) */
  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    if (el.closest(".hero")) return;
    if (el.classList.contains("card")) return;
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 86%", once: true }
    });
  });

  /* soft parallax on hero portrait */
  var media = document.querySelector("[data-parallax]");
  if (media) {
    gsap.to(media, {
      yPercent: -8, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
  }

  /* treatment cards: gentle staggered reveal when the grid enters */
  var cards = gsap.utils.toArray(".card");
  if (cards.length) {
    gsap.to(cards, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
      scrollTrigger: { trigger: ".treat__grid", start: "top 82%", once: true }
    });
  }
})();
