"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function FallingConfetti() {

  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width || 0}
      height={height || 0}
      recycle={false}
      numberOfPieces={250}
      gravity={0.15}
    />
  );
}