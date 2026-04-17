import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Component01PatternsFromHome from "../../imports/01PatternsFromHome/01PatternsFromHome";

export default function Pattern1() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        navigate("/patterns/2");
      }
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div 
      className="size-full max-w-md mx-auto overflow-auto relative"
      style={{ maxHeight: '100vh' }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check if close icon was clicked
        if (target.textContent === "close") {
          e.preventDefault();
          navigate("/");
          return;
        }
      }}
    >
      <Component01PatternsFromHome />
      
      {/* Loading progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200/30 max-w-md mx-auto">
        <div 
          className="h-full bg-gradient-to-r from-[#6c4dc4] to-[#8b6dd6] shadow-lg shadow-purple-500/50 transition-all duration-50 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}