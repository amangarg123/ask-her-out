"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { headingFont, handwritingFont } from "@/app/fonts";
import TypewriterLetter from "./TypewriterLetter";

export default function LetterCard() {

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div
        className="
        relative
        max-w-3xl
        rounded-[24px]
        border border-[#f5e6d3]
        bg-[#fffdf5]
        px-12
        py-12
        shadow-[0_25px_80px_rgba(255,182,193,.25)]
        "
      >

        {/* top vine */}
        <Image
          src="/jasmine-vine.png"
          width={250}
          height={120}
          alt=""
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          opacity-30
          "
        />

        {/* panda */}
        <div className="flex justify-center mb-5">
          <Image
            src="/panda-hug.png"
            width={90}
            height={90}
            alt=""
          />
        </div>

        <h1
          className={`${headingFont.className}
          text-center
          text-3xl
          text-[#5b4753]`}
        > Thank you for accepting.. 💝<br />
        You will always be my Favourite.. 
        </h1>

        <div className="mt-5">
          <TypewriterLetter />
        </div>

        <div
          className={`${handwritingFont.className}
          mt-10
          text-right
          text-5xl
          text-[#8d6f7c]`}
        >
           🌻
        </div>

        {/* wax seal */}
       

        {/* sunflower corner */}
        <Image
          src="/sunflower-corner.png"
          width={180}
          height={180}
          alt=""
          className="
          absolute
          bottom-0
          left-0
          opacity-20
          "
        />

        <button
          onClick={() => router.push("/final")}
          className="
          mt-12
          w-full
          rounded-full
          bg-pink-300
          py-4
          text-xl
          text-white
          transition-all
          hover:scale-105
          hover:bg-pink-400
          shadow-xl
          "
        >
          See Our Date Details ❤️
        </button>

      </div>

    </div>
  );
}