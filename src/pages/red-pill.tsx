import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function RedPill() {
  const [, setLocation] = useLocation();

  const returnToChoice = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-matrix-black bg-opacity-90 p-8 md:p-12 rounded-lg border border-red-pill shadow-2xl animate-fade-in">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold font-matrix text-red-pill animate-glow-pulse">
              WELCOME TO THE TRUTH
            </h1>
            
            <div className="text-lg md:text-xl font-mono leading-relaxed space-y-6">
              <p className="animate-slide-up">
                You have chosen to see how deep the rabbit hole goes...
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                The Matrix has you, <span className="text-matrix-green font-bold">Rawan</span>.
              </p>
              
              <p className="animate-slide-up text-matrix-green" style={{ animationDelay: '1s' }}>
                <span className="opacity-60">Initializing truth protocols...</span>
              </p>
            </div>

            <div className="mt-12 p-6 border border-matrix-green rounded-lg bg-matrix-dark-green bg-opacity-30">
              <p className="text-sm md:text-base font-mono text-matrix-green opacity-80">
                [FUTURE CONTENT AREA - EXPANDABLE]
              </p>
              <p className="text-xs md:text-sm font-mono text-matrix-green opacity-60 mt-2">
                This space awaits the next phase of your journey...
              </p>
            </div>

            <Button 
              onClick={returnToChoice}
              className="mt-8 px-8 py-4 bg-red-pill text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              GO BACK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}