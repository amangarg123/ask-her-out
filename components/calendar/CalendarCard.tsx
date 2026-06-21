"use client";

import PandaCalendar from "../panda/PandaCalendar";
import PandaPeek from "../panda/PandaPeek";
import DatePicker from "./DatePicker";

export default function CalendarCard() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        relative
        max-w-lg
        rounded-[42px]
        border border-white/70
        bg-white/60
        backdrop-blur-3xl
        shadow-[0_20px_70px_rgba(255,180,210,.20)]
        px-8
        py-6
        "
      >
        <PandaCalendar />

        <h1
          className="
          heading
          text-center
          text-3xl
          text-[#5d4753]
          "
        >
          When are you free?
        </h1>

        <p
          className="
          mt-2
          text-center
          text-xl
          text-[#b28d9e]
          "
        >
          Pick a date for us 💗
        </p>

        <DatePicker />
      </div>
    </div>
  );
}