"use client";

import Image from "next/image";
import { format } from "date-fns";

import { useDateStore } from "@/store/useDateStore";
import { useFoodStore } from "@/store/useFoodStore";
import { useTimeStore } from "@/store/useTimeStore";

import DateSummaryCard from "./DateSummaryCard";
import LoveQuote from "./LoveQuote";
import AddCalendarButton from "./AddCalendarButton";
import FallingConfetti from "../effects/FallingConfetti";

export default function FinalCard() {

  const { selectedDate } = useDateStore();
  const { selectedTime } = useTimeStore();
  const { selectedFoods } = useFoodStore();

  return (
    <>
    <FallingConfetti />
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        relative
        w-full
        max-w-xl
        rounded-[40px]
        bg-white/75
        backdrop-blur-xl
        border border-pink-100
        p-8
        text-center
        shadow-[0_20px_70px_rgba(255,180,210,.2)]
        "
      >

        {/* panda */}
        <div className="flex justify-center">
          <Image
            src="/panda-hug-sunflower.png"
            alt=""
            width={160}
            height={160}
          />
        </div>

        <h1
          className="
          heading
          mt-2
          text-6xl
          text-[#5D4753]
          "
        >
          It's a Date ❤️
        </h1>

        <p className="mt-2 text-[#B28A97] tracking-[0.25em] uppercase">
          Bas ab tumse milne ka intezaar hai ❤️
        </p>

        <DateSummaryCard
          date={
            selectedDate
              ? format(selectedDate, "EEEE, MMMM d")
              : ""
          }
          time={selectedTime}
          food={selectedFoods}
        />

        <LoveQuote />

        <AddCalendarButton />

      </div>

    </div>
    </>
  );
}