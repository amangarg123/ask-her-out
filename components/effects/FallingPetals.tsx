"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FallingPetals() {

  const petals = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 5,
        delay: Math.random() * 8,
        rotate: Math.random() * 360,
      })),
    []
  );

  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0 z-0"
          style={{
            left: `${petal.left}%`,
          }}
          initial={{
            y: -100,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            rotate: petal.rotate,
          }}
          transition={{
            repeat: Infinity,
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <Image
            src="/mogra.png"
            width={20}
            height={20}
            alt=""
            className="opacity-50"
          />
        </motion.div>
      ))}
    </>
  );
}