import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import FoodCard from "@/components/food/FoodCard";

export default function FoodPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <FoodCard />
    </main>
  );
}