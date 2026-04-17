import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";

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
      title="Emotional Spikes"
      description="Jiyu's emotional outbursts tend to cluster around transitions — moving from play to homework, or from screen time to bedtime. These moments happen 3–4 times per week."
      insight="Giving a 5-minute heads-up before any transition reduces friction by around 60%. A gentle 'in 5 minutes we're doing X' helps her prepare."
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
