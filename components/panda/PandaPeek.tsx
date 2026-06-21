import Image from "next/image";

export default function PandaPeek() {
  return (
    <Image
      src="/panda-peek.png"
      width={80}
      height={80}
      alt=""
      className="pointer-events-none
      "
    />
  );
}