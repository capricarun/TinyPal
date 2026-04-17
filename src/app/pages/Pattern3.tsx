import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";

export default function Pattern3() {
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
      if (currentStep >= steps) { clearInterval(timer); navigate("/patterns/4"); }
    }, interval);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <PatternSlide
      patternNumber={3}
      title="Connection Moments"
      description="Jiyu responds warmest to one-on-one quiet time. When you sit beside her without screens or distractions, she opens up about her day more readily."
      insight="Reading together at bedtime creates the strongest bonding window. Even 10 minutes makes a measurable difference in next-morning mood."
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
