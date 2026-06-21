"use client";

import { useState } from "react";
import AskAgainCard from "./AskAgainCard";

const reasons = [
  {
    emoji: "😊",
    title: "Aapki cute Smile",
    text: "It can brighten even my worst day."
  },
  {
    emoji: "🐼",
    title: "Aapki maturity with Bachpana.. ",
    text: "Your panda obsession is adorable."
  },
  {
    emoji: "🌸",
    title: "Aapki Kindness and Caring Nature",
    text: "You make ordinary moments beautiful."
  },
  {
    emoji: "✨",
    title: "Sbse Important.. Aap",
    text: "Simply because you're you."
  }
];

export default function ReasonsCarousel() {

  const [index, setIndex] = useState(0);

  if (index === reasons.length) {
    return <AskAgainCard />;
  }

  const item = reasons[index];

  return (

    <div className="flex items-center justify-center px-4">
      <div
        className="max-w-md rounded-[40px]
        bg-white/60 backdrop-blur-3xl
        border border-white/60
        p-10 text-center
        shadow-[0_20px_60px_rgba(255,180,210,.2)]
        ">

      <div className="text-6xl">
        {item.emoji}
      </div>

      <h2 className="heading text-4xl mt-5 text-[#5D4753]">
        {index+1}. {item.title}
      </h2>

      <p className="mt-8 text-2xl text-[#A88694] leading-relaxed">
        {item.text}
      </p>

      <button
        className="mt-8
          rounded-full
          bg-pink-300
          px-8
          py-3
          text-white
          hover:bg-pink-400
          transition-all
        "
        onClick={() => setIndex(prev => prev + 1)}
      >
        Aur... 🌼
      </button>
    </div>
  </div>
  );
}