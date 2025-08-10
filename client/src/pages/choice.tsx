import MorpheusFigure from "@/components/morpheus-figure";

export default function Choice() {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center max-w-6xl mx-auto">
        {/* Morpheus Figure */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <MorpheusFigure />
        </div>

        {/* Main Text */}
        <div className="space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold font-matrix tracking-wider animate-glow-pulse">
            Hello Rawan,
          </h1>
          
          <div className="text-lg md:text-2xl font-mono leading-relaxed max-w-4xl mx-auto space-y-4">
            <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              You are here to choose your destiny with your own hands...
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '1s' }}>
              If you choose the <span className="text-blue-pill font-bold">blue pill</span>, everything ends... you will wake up in your bed and this will all be a dream...
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
              But if you choose the <span className="text-red-pill font-bold">red pill</span>, you will remain in Wonderland... and I will show you how deep the rabbit hole goes.
            </p>
          </div>

          {/* Interactive Instructions */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
            <p className="text-sm md:text-lg font-mono opacity-80 animate-pulse">
              Click on a pill to make your choice...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
