"use client";

import { useEffect, useRef, useState } from "react";

// Interactive before/after comparison (drag / click / keyboard).
export default function BeforeAfter() {
  const frameRef = useRef(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const applyFromClientX = (clientX) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPos(pct);
  };

  useEffect(() => {
    const move = (e) => {
      if (!draggingRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      applyFromClientX(x);
    };
    const end = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, []);

  const onFrameClick = (e) => {
    // ignore clicks on the handle itself
    if (e.target.closest(".ba__handle")) return;
    applyFromClientX(e.clientX);
  };

  const onHandleKeyDown = (e) => {
    let now = pos;
    if (e.key === "ArrowLeft") now -= 4;
    else if (e.key === "ArrowRight") now += 4;
    else return;
    e.preventDefault();
    setPos(Math.max(0, Math.min(100, now)));
  };

  const start = () => {
    draggingRef.current = true;
  };

  return (
    <div className="ba" data-reveal>
      <div className="ba__frame" id="ba" ref={frameRef} onClick={onFrameClick}>
        <div
          className="ph ba__img ba__img--after"
          role="img"
          aria-label="Foto sesudah perawatan"
        >
          <span className="ph__tag">Sesudah</span>
        </div>
        <div
          className="ph ba__img ba__img--before"
          id="ba-before"
          role="img"
          aria-label="Foto sebelum perawatan"
          style={{ width: `${pos}%` }}
        >
          <span className="ph__tag ph__tag--before">Sebelum</span>
        </div>
        <button
          className="ba__handle"
          id="ba-handle"
          type="button"
          style={{ left: `${pos}%` }}
          aria-label="Geser pembanding sebelum dan sesudah"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          role="slider"
          onMouseDown={start}
          onTouchStart={start}
          onKeyDown={onHandleKeyDown}
        >
          <span aria-hidden="true">‹ ›</span>
        </button>
      </div>
    </div>
  );
}
