import { create } from "zustand";

type TimeStore = {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
};

export const useTimeStore = create<TimeStore>((set) => ({
  selectedTime: "",
  setSelectedTime: (time) =>
    set({
      selectedTime: time,
    }),
}));