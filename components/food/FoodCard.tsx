"use client";

import PandaCalendar from "../panda/PandaCalendar";
import FoodGrid from "./FoodGrid";

export default function FoodCard() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        max-w-xl
        rounded-[40px]
        border border-white/60
        bg-white/60
        backdrop-blur-3xl
        shadow-[0_20px_60px_rgba(255,180,210,.25)]
        px-8 py-6
        "
      >
        <PandaCalendar />

        <h1
          className="
          heading
          text-center
          text-4xl
          text-[#5D4753]
          "
        >
          What shall we enjoy together?
        </h1>

        <p
          className="
          text-center
          text-lg
          mt-2
          text-[#B18C99]
          "
        >
          Pick your favorite 💕
        </p>

        <FoodGrid />

      </div>

    </div>
  );
}