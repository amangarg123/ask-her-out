"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RunAwayNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  function move() {
    setPosition({
      x: Math.random() * 180 - 90,
      y: Math.random() * 100 - 50,
    });
  }

  const router = useRouter();
  return (
    
    <button
      ref={buttonRef}
      onClick={() => router.push("/reason")}
      className="
      rounded-full
      border
      border-pink-200
      bg-white
      px-10
      py-3
      transition-all
      
      duration-300
      hover:scale-105
      hover:bg-gray-400
      "
    >
      No 🙈  
    </button>
  );
}