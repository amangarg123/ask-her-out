"use client";

import { motion } from "framer-motion";

export default function Sparkles() {
  return (
    <>
      <motion.div
        className="absolute left-[20%] top-[30%]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
      >
        ✧
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[60%]"
        animate={{
          scale: [1, 1.5, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
      >
        ✨
      </motion.div>
    </>
  );
}