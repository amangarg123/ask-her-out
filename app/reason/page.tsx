import BackgroundDecorations from "@/components/decorations/BackgroundDecorations";
import ReasonCarousel from "@/components/reasons/ReasonCarousel";

export default function ReasonsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
        <div className="text-center">
           <div className="text-7xl">
            🐼
          </div>
           <h1 className="text-3xl text-[#5D4753]">
            That's okay ❤️
          </h1>
          <p className="mt-3 text-[#8d6d78] mb-3">
            Par jaane se pehle... <br />
            let me try one more time.. 🌸 <br/>
            Reasons aap mujhe itne psnd ho.. 
          </p>
        </div>
        <ReasonCarousel />
    </main>
  );
}