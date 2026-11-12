import { useState, useEffect, useRef } from "react";

const FULL_TEXT =
  "C:\\Users\\Gema> initializing system...\nC:\\Users\\Gema> loading assets...\nC:\\Users\\Gema> starting portfolio.exe...";

export default function LoadingScreen({ onFinish }) {
  const [text, setText] = useState("");
  const [isFading, setIsFading] = useState(false);
  
  // Store onFinish in a ref to avoid restarting the effect if the prop changes
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    let currentIndex = 0;
    let fadeTimer;
    let finishTimer;

    // Typing effect
    const typingInterval = setInterval(() => {
      if (currentIndex <= FULL_TEXT.length) {
        setText(FULL_TEXT.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        // Start fade out after typing finishes
        fadeTimer = setTimeout(() => {
          setIsFading(true);

          // Call onFinish after transition completes
          finishTimer = setTimeout(() => {
            onFinishRef.current();
          }, 1000);
        }, 800);
      }
    }, 10);

    // Cleanup timers on unmount
    return () => {
      clearInterval(typingInterval);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black font-mono p-6 sm:p-12 transition-all duration-1000 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="text-green-500 text-sm sm:text-base whitespace-pre-wrap max-w-3xl">
        {text}
        {/* Blinking cursor */}
        <span className="w-2.5 h-4 bg-green-500 animate-pulse inline-block ml-1 align-middle" />
      </div>
    </div>
  );
}