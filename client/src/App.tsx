import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Choice from "@/pages/choice";
import BluePill from "@/pages/blue-pill";
import RedPill from "@/pages/red-pill";
import NotFound from "@/pages/not-found";
import MatrixRain from "@/components/matrix-rain";
import AudioPlayer from "@/components/audio-player";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Choice} />
      <Route path="/blue-pill" component={BluePill} />
      <Route path="/red-pill" component={RedPill} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-matrix-black text-matrix-green font-matrix overflow-hidden">
          <MatrixRain />
          <AudioPlayer />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
