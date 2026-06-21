"use client";

import { useEffect, useState } from "react";
import { handwritingFont } from "@/app/fonts";

const letter = `I know this is just a tiny little website,
but I wanted to ask you in a way
that's as special as you are.
No matter where we go,
what we eat,
or what time we meet,
I know it'll be wonderful because
I'll be spending it with you.

Thank you for making ordinary days beautiful.
Will you make another lovely memory with me? ❤️`;

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