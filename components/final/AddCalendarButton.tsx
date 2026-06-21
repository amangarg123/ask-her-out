"use client";

export default function AddCalendarButton() {

  function addToCalendar() {

    const start = "20260627T193000";
    const end = "20260627T220000";

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=Date Night ❤️` +
      `&dates=${start}/${end}` +
      `&details=Can't wait to see you 🌸`;

    window.open(url);
  }

  return (
    <button
      onClick={addToCalendar}
      className="
      mt-8
      w-full
      rounded-full
      bg-pink-300
      py-4
      text-xl
      text-white
      hover:scale-105
      transition-all
      shadow-xl
      "
    >
      Add To Calendar 🌸
    </button>
  );
}