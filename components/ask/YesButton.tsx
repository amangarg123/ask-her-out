"use client";

import { useRouter } from "next/navigation";

export default function YesButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/calendar")}
      className="
      rounded-full
      bg-pink-300
      px-10
      py-3
      text-white
      font-medium
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-pink-400
      "
    >
      Yes ❤️
    </button>
  );
}