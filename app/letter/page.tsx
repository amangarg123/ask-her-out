import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import LetterCard from "@/components/letter/LetterCard";

export default function LetterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb]">
      <BackgroundDecorations />
      <LetterCard />
    </main>
  );
}