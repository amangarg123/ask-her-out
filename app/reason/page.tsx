import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import ReasonCarousel from "@/components/reasons/ReasonCarousel";

export default function ReasonsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <ReasonCarousel />
    </main>
  );
}