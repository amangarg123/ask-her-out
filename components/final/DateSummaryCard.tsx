type Props = {
  date: string;
  time: string;
  food: string[];
};



export default function DateSummaryCard({
  date,
  time,
  food,
}: Props) {
  const isAnything = food.length === 1 && food[0] === "Panda's Pick";
  return (
    <div
      className="
      mt-8
      rounded-[30px]
      bg-white
      p-8
      border border-pink-100
      "
    >
      <div className="uppercase tracking-[0.25em] text-sm text-[#b38d99]">
        When
      </div>

      <div className="mt-3 text-3xl text-[#5D4753]">
        {date}
      </div>

      <div className="mt-2 text-xl text-[#8d6d78]">
        {time}
      </div>

      <hr className="my-6 border-pink-100" />

      <div className="uppercase tracking-[0.25em] text-sm text-[#b38d99]">
        What We're Having
      </div>
      {isAnything ? (
        <div className="mt-4 rounded-3xl bg-pink-50 p-5">
          <div className="text-lg">✨ A Surprise Date ✨</div>
          <div className="mt-3 text-2xl italic text-[#8d6d78]">
            {food}
          </div>
        </div>
      ) : (<div className="mt-5 flex flex-wrap gap-3">
        {food.map((item) => (
          <div key={item} className="rounded-full bg-pink-100
              px-5 py-2 text-[#5D4753]">{item}</div>
        )
        )}
      </div>
      )}
    </div>
  );
}