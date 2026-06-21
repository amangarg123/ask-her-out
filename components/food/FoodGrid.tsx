"use client";

import { useState } from "react";
import { foods } from "./FoodData";
import { useRouter } from "next/navigation";
import { useFoodStore } from "@/store/useFoodStore";

export default function FoodGrid() {
  const router = useRouter();
  const { setSelectedFoods } = useFoodStore();

  const [selected, setSelected] = useState<string[]>([]);

  function toggleFood(food: string) {
    if (food === "Panda's Pick") {
      setSelected([food]);
      return;
    }

    setSelected((prev) => {
      const withoutAnything = prev.filter(
        (f) => f !== "Panda's Pick"
      );

      return withoutAnything.includes(food)
        ? withoutAnything.filter((f) => f !== food)
        : [...withoutAnything, food];
    });
  }

  function continueNext() {
    setSelectedFoods(selected);
    router.push("/letter");
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-3">

        {foods.map((food) => (
          <button
            key={food.title}
            onClick={() => toggleFood(food.title)}
            className={`
              group
              rounded-3xl
              border
              p-4
              transition-all
              duration-300
              hover:scale-105

              ${
                selected.includes(food.title)
                  ? "bg-pink-200 border-pink-300 shadow-xl"
                  : "bg-white/80 border-pink-100"
              }
            `}
          >
            <div className="text-3xl">
              {food.emoji}
            </div>

            <div className="mt-2 text-lg font-medium text-[#5D4753]">
              {food.title}
            </div>

            <div className="mt-1 text-xs text-[#B18C99]">
              {food.subtitle}
            </div>
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <button
          onClick={continueNext}
          className="
            mt-8
            w-full
            rounded-full
            bg-pink-300
            py-4
            text-xl
            text-white
            transition-all
            hover:bg-pink-400
            hover:scale-105
            shadow-xl
          "
        >
          Continue ❤️
        </button>
      )}
    </>
  );
}