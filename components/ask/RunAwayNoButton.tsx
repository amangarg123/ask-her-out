"use client";

import { useState } from "react";

export default function RunAwayNoButton() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  function move() {
    setPosition({
      x: Math.random() * 180 - 90,
      y: Math.random() * 100 - 50
    });
  }

  return (
    <button
      onMouseEnter={move}
      style={{
        transform: `translate(${position.x}px,${position.y}px)`
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