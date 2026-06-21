import Image from "next/image";

export default function PandaCalendar() {
  return (
    <div className="flex justify-center mb-3">
      <Image
        src="/panda-hug.png"
        width={90}
        height={90}
        alt=""
        className="h-auto w-auto"
      />
    </div>
  );
}