import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 30);
      return () => clearTimeout(timer);
    } else {
      // Notify parent when loading is complete
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-[9999]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 opacity-20 animate-pulse z-0" />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-[20rem] font-bold text-white opacity-10 select-none">
          {progress}%
        </span>
      </div>

      <div className="relative z-10 text-center select-none">
        <span className="text-7xl font-extrabold text-white tracking-widest">
          {progress}%
        </span>
        <p className="mt-4 text-indigo-400 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
