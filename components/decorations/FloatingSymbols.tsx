"use client";

import { motion } from "framer-motion";

const symbols = ["♡", "♥", "✿", "❀", "🤍"];

export default function FloatingSymbols() {
  return (
    <>
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl text-pink-300 opacity-20"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + i * 12}%`
          }}
          animate={{
            y: [-15, 15, -15]
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </>
  );
}