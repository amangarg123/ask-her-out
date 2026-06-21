import QuestionCard from "@/components/ask/QuestionCard";
import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <QuestionCard />
    </main>
  );
}