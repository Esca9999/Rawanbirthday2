import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function BluePill() {
  const [, setLocation] = useLocation();

  const returnToChoice = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Glitch Effect Container */}
        <div className="bg-matrix-black bg-opacity-90 p-8 md:p-12 rounded-lg border border-matrix-green shadow-2xl animate-fade-in">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold font-matrix text-red-pill animate-glow-pulse">
              DECEPTION DETECTED
            </h1>
            
            <div className="text-lg md:text-xl font-mono leading-relaxed space-y-6">
              <p className="animate-slide-up">
                You have been deceived by the illusion of choice.
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                You are here because <span className="text-matrix-green font-bold">I chose</span> for you to be here.
              </p>
              
              <p className="animate-slide-up" style={{ animationDelay: '1s' }}>
                Your only salvation is to choose the <span className="text-red-pill font-bold">red pill</span>.
              </p>
            </div>

            <Button 
              onClick={returnToChoice}
              className="mt-8 px-8 py-4 bg-matrix-green text-matrix-black font-bold text-lg rounded-lg hover:bg-green-400 transition-all duration-300 animate-glow-pulse"
            >
              RETURN TO REALITY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
