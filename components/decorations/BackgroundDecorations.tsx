"use client";

import dynamic from "next/dynamic";
import FloatingSparkles from "../effects/FloatingSparkles";
import RisingHearts from "../effects/RisingHearts";

const FallingPetals = dynamic(
  () => import("../effects/FallingPetals"),
  {
    ssr: false,
  }
);

export default function BackgroundDecorations() {
  return (
    <>
      <FallingPetals />
      <RisingHearts />
      <FloatingSparkles />

      {/* jasmine vine */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        🌸🌿🌸🌿🌸🌿🌸
      </div>

      {/* bottom left sunflower */}
      <div className="absolute bottom-0 left-0 opacity-20">
        🌻
      </div>

      {/* bottom right sunflower */}
      <div className="absolute bottom-0 right-0 opacity-20">
        🌻
      </div>
    </>
  );
}