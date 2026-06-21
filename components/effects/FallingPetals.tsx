"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FallingPetals() {
  // Petals that fall continuously, looping from top to bottom
  const fallingPetals = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 5, // slower = gentler, less "snowstorm"
        delay: Math.random() * 5,
        rotate: Math.random() * 360,
        sway: Math.random() * 30 - 15, // slight left-right drift while falling
        size: 16 + Math.random() * 10, // 16–26px, varied for depth
      })),
    []
  );

  // Petals "settled" along the bottom edge — static, gives the
  // impression of collection without real stacking/collision logic
  const settledPetals = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        bottom: Math.random() * 14, // sits within ~14px of the very bottom
        rotate: Math.random() * 360,
        size: 14 + Math.random() * 8,
        delay: 2 + Math.random() * 6, // fades in gradually, not all at once
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Falling layer */}
      {fallingPetals.map((petal) => (
        <motion.div
          key={`fall-${petal.id}`}
          className="absolute top-0"
          style={{ left: `${petal.left}%` }}
          initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "108vh",
            x: [0, petal.sway, 0],
            rotate: petal.rotate,
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            opacity: {
              repeat: Infinity,
              duration: petal.duration,
              delay: petal.delay,
              times: [0, 0.1, 0.85, 1],
            },
          }}
        >
          <Image
            src="/mogra.png"
            width={petal.size}
            height={petal.size}
            alt=""
          />
        </motion.div>
      ))}

      {/* Settled layer — gives the look of petals collecting at the bottom */}
      {settledPetals.map((petal) => (
        <motion.div
          key={`settle-${petal.id}`}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            bottom: `${petal.bottom}px`,
            rotate: `${petal.rotate}deg`,
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{
            duration: 1.5,
            delay: petal.delay,
            ease: "easeOut",
          }}
        >
          <Image
            src="/mogra.png"
            width={petal.size}
            height={petal.size}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  );
}