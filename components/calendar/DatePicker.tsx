"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDateStore } from "@/store/useDateStore";
import { useRouter } from "next/navigation";


export default function DatePicker() {
  const router = useRouter();
  

  const { selectedDate, setSelectedDate } = useDateStore();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function handleSelect(date: Date | undefined) {
    if (!date) return;

    setSelectedDate(date);

    setTimeout(() => {
      router.push("/time");
    }, 150);
  }

  return (
    <div className="mt-4">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleSelect}
        disabled={{ before: today }}
        showOutsideDays
        className="calendar"
        formatters={{
            formatDay: (date) => date.getDate().toString()
        }}
      />
    </div>
  );
}