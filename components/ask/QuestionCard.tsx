"use client";

import { motion } from "framer-motion";
import PandaHero from "../panda/PandaHero";
import YesButton from "./YesButton";
import RunAwayNoButton from "./RunAwayNoButton";

export default function QuestionCard() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="
        max-w-xl
        rounded-[40px]
        border
        border-white/50
        bg-white/50
        backdrop-blur-2xl
        shadow-2xl
        p-12
        text-center
        "
      >
        <PandaHero />

        <h1 className="heading mt-5 text-6xl text-[#4b3c44]">
          Will you go on a date with me?
        </h1>

        <p className="mt-5 tracking-[6px] uppercase text-[#9f8793]">
          because every sunflower deserves its jasmine
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <YesButton />
          <RunAwayNoButton />
        </div>

      </motion.div>

    </div>
  );
}