"use client";

import { useEffect, useState } from "react";
import { handwritingFont } from "@/app/fonts";

const letter = `
Ek Pyaari si Shayari hai aapke liye..
Kisne kaha Ishq Ek baar hota hai..
Kisne kaha Ishq Ek baar hota hai..

Mai Aapko jitni baar dekhta hun 
Mujhe utni baar hota hai.. ❤️

You will always be my favourite decision ❤️`;

export default function TypewriterLetter() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(letter.slice(0, i));
      i++;

      if (i > letter.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${handwritingFont.className}
      whitespace-pre-line
      text-[25px]
      leading-relaxed
      text-[#856b77]`}
    >
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
}