import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const STEPS = [
  "Reading every detail...",
  "Connecting the dots...",
  "Finding what matters...",
  "Almost there...",
];

const STEP_DURATION = 3000;

const CONFETTI_DATA = [
  { left: 46,  top: 140, w: 8,  h: 13, color: "#4ecdc4",  rot: 158,  delay: 0    },
  { left: 120, top: 105, w: 6,  h: 10, color: "#ff6b9d",  rot: -22,  delay: 0.3  },
  { left: 230, top: 125, w: 7,  h: 11, color: "#6c4dc4",  rot: -33,  delay: 0.55 },
  { left: 310, top: 148, w: 5,  h: 9,  color: "#ff8e6e",  rot: 162,  delay: 0.1  },
  { left: 25,  top: 240, w: 7,  h: 11, color: "#5ec28b",  rot: -118, delay: 0.7  },
  { left: 340, top: 230, w: 8,  h: 13, color: "#b49ae8",  rot: -116, delay: 0.4  },
  { left: 355, top: 330, w: 9,  h: 14, color: "#ff6b9d",  rot: -117, delay: 0.2  },
  { left: 15,  top: 355, w: 10, h: 12, color: "#ff8e6e",  rot: -99,  delay: 0.85 },
  { left: 52,  top: 410, w: 5,  h: 7,  color: "#5ec28b",  rot: 11,   delay: 0.6  },
  { left: 330, top: 395, w: 7,  h: 9,  color: "#6c4dc4",  rot: 75,   delay: 0.15 },
  { left: 200, top: 405, w: 6,  h: 10, color: "#b49ae8",  rot: -123, delay: 0.65 },
  { left: 100, top: 230, w: 8,  h: 13, color: "#ff6b9d",  rot: 165,  delay: 0.35 },
];

export default function Processing() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (step >= 4) return;
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => { setStep((s) => s + 1); setFading(false); }, 280);
    }, STEP_DURATION);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 430,
        mx: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(160deg, #f7eff5 0%, #fbf5fc 50%, #fdf4f0 100%)",
        overflow: "hidden",
        transition: "opacity 0.28s ease",
        opacity: fading ? 0 : 1,
      }}
    >
      <style>{`
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        .mascot-float { animation: mascot-float 3.2s ease-in-out infinite; }
        @keyframes confetti-fall {
          0%   { transform: translateY(-20px) rotate(var(--rot)); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(60px) rotate(calc(var(--rot) + 200deg)); opacity: 0; }
        }
        .confetti-piece {
          animation: confetti-fall var(--dur) ease-in-out var(--delay) infinite;
        }
      `}</style>

      {step < 4 ? (
        <ProcessingScreen step={step} />
      ) : (
        <MomentSavedScreen onNavigate={() => navigate("/story")} />
      )}
    </Box>
  );
}

function ProcessingScreen({ step }: { step: number }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", px: 3, pt: 3 }}>
      {/* Step title */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: "#2d2047", textAlign: "center", mb: 3, mt: 4, fontSize: 18 }}
      >
        {STEPS[step]}
      </Typography>

      {/* Step progress bars + circles */}
      <Box sx={{ display: "flex", gap: 1.5, width: "100%", mb: 1 }}>
        {[0, 1, 2, 3].map((i) => {
          const isComplete = i < step;
          const isCurrent = i === step;
          const isInactive = i > step;
          return (
            <Box key={i} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
              <LinearProgress
                variant="determinate"
                value={isComplete ? 100 : isCurrent ? 60 : 0}
                sx={{
                  width: "100%",
                  height: 4,
                  borderRadius: 2,
                  bgcolor: isInactive ? "#d8ccfa" : "#d8ccfa",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#6c4dc4",
                    borderRadius: 2,
                  },
                }}
              />
              <Box
                sx={{
                  width: 30, height: 30,
                  borderRadius: "50%",
                  bgcolor: isComplete || isCurrent ? "#6c4dc4" : "#ddd6f5",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {isComplete || isCurrent ? (
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <Typography sx={{ color: "#a09bc0", fontSize: 12, fontWeight: 600 }}>{i + 1}</Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Mascot placeholder */}
      <Box
        className="mascot-float"
        sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography sx={{ fontSize: 120, lineHeight: 1 }}>🧸</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Box sx={{ width: 134, height: 5, bgcolor: "#b0a3c4", opacity: 0.3, borderRadius: 3 }} />
      </Box>
    </Box>
  );
}

function MomentSavedScreen({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", position: "relative", overflow: "hidden" }}>
      {/* Confetti */}
      {CONFETTI_DATA.map((c, i) => (
        <Box
          key={i}
          className="confetti-piece"
          sx={{ position: "absolute", left: c.left, top: c.top, width: c.w, height: c.h, bgcolor: c.color, borderRadius: 0.5, pointerEvents: "none" }}
          style={{ "--rot": `${c.rot}deg`, "--delay": `${c.delay}s`, "--dur": `${2.6 + (i % 5) * 0.22}s` } as React.CSSProperties}
        />
      ))}

      {/* Central content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, px: 3, zIndex: 1 }}>
        <Typography sx={{ fontSize: 72, lineHeight: 1 }}>🎉</Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#2d2047", textAlign: "center" }}>
          Moment saved\!
        </Typography>
        <Typography variant="body1" sx={{ color: "#7b6e8f", textAlign: "center", lineHeight: 1.6 }}>
          We found something interesting — check your patterns
        </Typography>
      </Box>

      {/* CTAs */}
      <Box sx={{ width: "100%", px: 3, pb: 2, zIndex: 1 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={onNavigate}
          sx={{ bgcolor: "#6c4dc4", borderRadius: "16px", py: 1.8, mb: 1, fontSize: 17, boxShadow: "0 4px 20px rgba(108,77,196,0.32)" }}
        >
          See insights
        </Button>
        <Button
          fullWidth
          variant="text"
          onClick={onNavigate}
          sx={{ color: "#7b6e8f", textDecoration: "underline", fontSize: 14 }}
        >
          See all moments
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Box sx={{ width: 134, height: 5, bgcolor: "#b0a3c4", opacity: 0.3, borderRadius: 3 }} />
      </Box>
    </Box>
  );
}
