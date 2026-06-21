"use client";

import PandaCalendar from "../panda/PandaCalendar";
import TimeOptions from "./TimeOptions";

export default function TimeCard() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        group
        relative
        w-full
        overflow-hidden
        max-w-lg
        rounded-[28px]
        border border-pink-100
        bg-white/80
        px-6 py-5
        transition-all
        duration-300
        hover: -translate-y-1
        hover: scale-[1.02]
        hover: bg-pink-50
        hover: shadow-[0_10px_40px_rgba(255,182,193,.25)]
        "
      >
        <PandaCalendar />

        <h1
          className="
          heading
          text-center
          text-5xl
          text-[#5d4753]
          "
        >
          What time?
        </h1>

        <p className="mt-2 text-center text-2xl text-[#B18C99]">
          Choose our little moment 💗
        </p>

        <TimeOptions />

      </div>
    </div>
  );
}