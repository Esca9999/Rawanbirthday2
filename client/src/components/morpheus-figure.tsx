import Pill from "./pill";
import { useLocation } from "wouter";

interface MorpheusFigureProps {
  onPillChoice?: (choice: "red" | "blue") => void;
}

export default function MorpheusFigure({ onPillChoice }: MorpheusFigureProps) {
  const [, setLocation] = useLocation();

  const handlePillChoice = (choice: "red" | "blue") => {
    if (onPillChoice) {
      onPillChoice(choice);
    } else {
      // Navigate to appropriate page
      setLocation(choice === "red" ? "/red-pill" : "/blue-pill");
    }
  };

  return (
    <div className="relative">
      {/* Morpheus Silhouette */}
      <div className="morpheus-silhouette w-48 h-64 md:w-64 md:h-80 mx-auto mb-8 shadow-2xl"></div>
      
      {/* Pills in hands */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-16 md:space-x-24">
        {/* Blue Pill (Left Hand) */}
        <Pill 
          type="blue" 
          onClick={() => handlePillChoice("blue")}
          className="animate-pill-float"
        />
        
        {/* Red Pill (Right Hand) */}
        <Pill 
          type="red" 
          onClick={() => handlePillChoice("red")}
          className="animate-pill-float"
          style={{ animationDelay: '1s' }}
        />
      </div>
    </div>
  );
}