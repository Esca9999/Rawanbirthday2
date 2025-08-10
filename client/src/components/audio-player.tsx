import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audioFile from "@assets/White Rabbit (Full Epic Trailer Version) _ The Matrix Resurrections Official Trailer Song Music_1754848861698.mp3";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.3; // Set to 30% volume

    const handleCanPlay = () => {
      if (hasInteracted && !isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.log('Audio play failed:', e);
        });
      }
    };

    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [hasInteracted, isPlaying]);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      const audio = audioRef.current;
      if (audio && audio.readyState >= 2 && !isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.log('Audio play failed:', e);
        });
      }
    };

    // Listen for any user interaction
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = 0.3;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src={audioFile} type="audio/mpeg" />
      </audio>
      
      {/* Audio control button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 p-2 bg-matrix-black bg-opacity-80 border border-matrix-green rounded-lg hover:bg-opacity-100 transition-all duration-300"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-matrix-green" />
        ) : (
          <Volume2 className="w-5 h-5 text-matrix-green" />
        )}
      </button>

      {!hasInteracted && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 bg-matrix-black bg-opacity-90 border border-matrix-green rounded-lg text-sm text-matrix-green animate-pulse">
          Click anywhere to enable audio
        </div>
      )}
    </>
  );
}