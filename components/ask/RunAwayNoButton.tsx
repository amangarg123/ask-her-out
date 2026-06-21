"use client";

import { useRef, useState, useEffect } from "react";

export default function RunAwayNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  function move() {
    setPosition({
      x: Math.random() * 180 - 90,
      y: Math.random() * 100 - 50,
    });
  }

  useEffect(() => {
    function handleTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      const btn = buttonRef.current;
      if (!touch || !btn) return;

      const rect = btn.getBoundingClientRect();
      const dx = touch.clientX - (rect.left + rect.width / 2);
      const dy = touch.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      // move the button away once a finger gets close
      if (distance < 70) {
        move();
      }
    }

    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={move}
      onTouchStart={move} // safety net for a direct first tap
      style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
      className="
      rounded-full
      border
      border-pink-200
      bg-white
      px-10
      py-3
      transition-all
      "
    >
      No 🙈
    </button>
  );
}