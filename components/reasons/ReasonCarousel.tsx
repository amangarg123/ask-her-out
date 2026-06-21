"use client";

import { useState } from "react";
import { reasons } from "./ReasonData";
import { useRouter } from "next/navigation";

export default function ReasonCarousel() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const current = reasons[index];

  function next() {
    if (index === reasons.length - 1) {
      router.push("/letter");
      return;
    }

    setIndex(index + 1);
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        max-w-md
        rounded-[40px]
        bg-white/60
        backdrop-blur-3xl
        border border-white/60
        p-10
        text-center
        shadow-[0_20px_60px_rgba(255,180,210,.2)]
        "
      >

        <div className="text-6xl">
          {current.emoji}
        </div>

        <h1 className="heading text-4xl mt-5 text-[#5D4753]">
          A few little reasons 💕
        </h1>

        <p className="mt-8 text-2xl text-[#A88694] leading-relaxed">
          {current.text}
        </p>

        <div className="mt-8 text-[#B18C99]">
          {index + 1} / {reasons.length}
        </div>

        <button
          onClick={next}
          className="
          mt-8
          rounded-full
          bg-pink-300
          px-8
          py-3
          text-white
          hover:bg-pink-400
          transition-all
          "
        >
          Tell me another 🌸
        </button>

      </div>

    </div>
  );
}