import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";

function PatternNetworkIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16" y1="16" x2="64" y2="64" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="16" y1="64" x2="64" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="64" y1="16" x2="40" y2="64" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="6" fill="currentColor"/>
      <circle cx="40" cy="16" r="6" fill="currentColor"/>
      <circle cx="64" cy="16" r="6" fill="currentColor"/>
      <circle cx="16" cy="40" r="6" fill="currentColor"/>
      <circle cx="40" cy="40" r="6" fill="currentColor"/>
      <circle cx="64" cy="40" r="6" fill="currentColor"/>
      <circle cx="16" cy="64" r="6" fill="currentColor"/>
      <circle cx="40" cy="64" r="6" fill="currentColor"/>
      <circle cx="64" cy="64" r="6" fill="currentColor"/>
    </svg>
  );
}

export default function Pattern2() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) { clearInterval(timer); navigate("/patterns/3"); }
    }, interval);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <PatternSlide
      patternNumber={2}
      title="Pattern Emerge"
      subtitle={"Capture more moments,\nuncover your child's unique patterns."}
      icon={<PatternNetworkIcon />}
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
