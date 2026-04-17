import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PatternSlide from "./PatternSlide";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

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
      title="Add Moments"
      subtitle={"Good or bad,\nevery little detail matters"}
      icon={<ArticleOutlinedIcon sx={{ fontSize: 80 }} />}
      progress={progress}
      onClose={() => navigate("/")}
    />
  );
}
