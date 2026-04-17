import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

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
      title="Access Patterns"
      subtitle={"Understand Jiyu's\ntriggers, motivations, and sweet spot."}
      icon={<LockOpenOutlinedIcon sx={{ fontSize: 80 }} />}
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
