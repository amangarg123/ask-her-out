import { create } from "zustand";

type DateStore = {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  selectedDate: undefined,

  setSelectedDate: (date) =>
    set({
      selectedDate: date,
    }),
}));