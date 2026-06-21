import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import CalendarCard from "@/components/calendar/CalendarCard";

export default function CalendarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <CalendarCard />
    </main>
  );
}