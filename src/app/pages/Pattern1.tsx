import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";

export default function Pattern1() {
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
      if (currentStep >= steps) { clearInterval(timer); navigate("/patterns/2"); }
    }, interval);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <PatternSlide
      patternNumber={1}
      title="Mealtime Resistance"
      description="Jiyu shows a recurring pattern of pushing food away and becoming upset during dinner. This behaviour clusters on evenings when the routine was disrupted."
      insight="This often happens after 5 pm when Jiyu is fatigued. Consider shifting dinner 30 minutes earlier to reduce friction."
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
