import { create } from "zustand";

type FoodStore = {
  selectedFoods: string[];
  setSelectedFoods: (foods: string[]) => void;
};

export const useFoodStore = create<FoodStore>((set) => ({
  selectedFoods: [],
  setSelectedFoods: (foods) =>
    set({
      selectedFoods: foods,
    }),
}));