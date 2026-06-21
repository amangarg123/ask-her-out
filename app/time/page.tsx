import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import TimeCard from "@/components/time/TimeCard";

export default function TimePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <TimeCard />
    </main>
  );
}