"use client";

import { useRouter } from "next/navigation";

export default function AskAgainCard() {

  const router = useRouter();

  return (

    <div className="flex items-center justify-center px-4">
        <div
        className="max-w-md rounded-[40px]
        bg-white/60 backdrop-blur-3xl
        border border-white/60
        p-10 text-center
        shadow-[0_20px_60px_rgba(255,180,210,.2)]
        ">
      <div className="text-4xl">
        ❤️
      </div>

      <h1 className="mt-5 text-4xl text-[#5D4753] text-center">
        One More Time 🥺
      </h1>

      <p className="mt-5 text-center text-[#8d6d78]">
        I'm grateful to have you in my life 🌸
      </p>

      <div className="mt-10 space-y-4">
        <button
          onClick={() => router.push("/")}
          className="
          w-full
          rounded-full
          bg-pink-300
          py-4
          text-xl
          text-white
          shadow-xl 
      transition-all
      duration-300
      hover:scale-105
      hover:bg-pink-400
          "
        >
           Maybe This Time? 🌼
        </button>

        {/* <button
          onClick={() => router.push("/goodbye")}
          className="
          w-full
          rounded-full
          bg-gray-200
          py-4
          text-xl
          text-[#5D4753]    
          transition-all
          duration-300
          hover:scale-105
          hover:bg-gray-400"
        >
          Maybe Another Time 🐼
        </button> */}

      </div>
     </div>
    </div>

  );
}