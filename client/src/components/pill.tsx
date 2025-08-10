import { cn } from "@/lib/utils";

interface PillProps {
  type: "red" | "blue";
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Pill({ type, onClick, className, style }: PillProps) {
  const isRed = type === "red";
  const bgColor = isRed ? "bg-gradient-to-b from-red-pill to-red-800" : "bg-gradient-to-b from-blue-pill to-blue-800";
  const borderColor = isRed ? "border-red-300" : "border-blue-300";

  return (
    <div 
      className={cn("pill-3d cursor-pointer", className)} 
      onClick={onClick}
      style={style}
    >
      <div className={cn(
        "w-8 h-12 md:w-10 md:h-16 rounded-full shadow-lg border-2 relative",
        bgColor,
        borderColor
      )}>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-30 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}