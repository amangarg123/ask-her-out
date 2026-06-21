import Image from "next/image";

export default function PandaHero() {
  return (
    <div className="flex justify-center">

      <Image
        src="/panda-hug.png"
        width={180}
        height={180}
        alt="panda"
        className="
        drop-shadow-xl
        select-none
        h-auto
        w-auto
        "
      />

    </div>
  );
}