"use client";

import { useRouter } from "next/navigation";
import { useTimeStore } from "@/store/useTimeStore";
import { times } from "./TimeData";

export default function TimeOptions() {
  const router = useRouter();
  const { setSelectedTime } = useTimeStore();

  function selectTime(time: string) {
    setSelectedTime(time);

    setTimeout(() => {
      router.push("/food");
    }, 600);
  }

  return (
    <div className="mt-8 space-y-4">

      {times.map((time) => (
        <button
          key={time.value}
          onClick={() => selectTime(time.value)}
          className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-3xl
          border border-pink-100
          bg-white/80
          px-6
          py-5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-pink-50
          hover:shadow-xl
          "
        >
            <div className="
                absolute
                right-5
                top-4
                opacity-0
                transition-all
                group-hover:opacity-100
                "
                >
                ✨
                </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">
              {time.emoji}
            </span>

            <span className="text-xl text-[#5d4753]">
              {time.title}
            </span>
          </div>

          <span className="font-medium text-[#B18C99]">
            {time.value}
          </span>

        </button>
      ))}
    </div>
  );
}