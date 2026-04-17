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

const STEP_DURATION = 1000;
const TICK_MS = 50;

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

/* ── Tinu mascot SVG ── */
function TinuMascot() {
  return (
    <svg viewBox="0 0 260 260" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="tinu-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>

      {/* Colourful glow blobs */}
      <ellipse cx="112" cy="108" rx="72" ry="70" fill="#7c3aed" opacity="0.65" filter="url(#tinu-glow)" />
      <ellipse cx="158" cy="104" rx="66" ry="62" fill="#e879f9" opacity="0.60" filter="url(#tinu-glow)" />
      <ellipse cx="145" cy="162" rx="70" ry="65" fill="#f97316" opacity="0.58" filter="url(#tinu-glow)" />
      <ellipse cx="100" cy="148" rx="62" ry="60" fill="#3b82f6" opacity="0.50" filter="url(#tinu-glow)" />

      {/* White face */}
      <circle cx="130" cy="128" r="80" fill="white" />

      {/* Orange glasses — left lens */}
      <circle cx="105" cy="124" r="27" fill="none" stroke="#f97316" strokeWidth="10" strokeLinejoin="round" />
      {/* Orange glasses — right lens */}
      <circle cx="157" cy="124" r="27" fill="none" stroke="#f97316" strokeWidth="10" strokeLinejoin="round" />
      {/* Temple left */}
      <line x1="78"  y1="122" x2="63"  y2="117" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />
      {/* Temple right */}
      <line x1="184" y1="122" x2="199" y2="117" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="105" cy="128" rx="4.5" ry="6" fill="#1e1b4b" />
      <ellipse cx="157" cy="128" rx="4.5" ry="6" fill="#1e1b4b" />

      {/* Blue smile */}
      <path d="M 112 150 Q 130 165 148 150" fill="none" stroke="#3b5bdb" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Processing() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  useEffect(() => {
    if (step >= 4) return;
    setStepProgress(0);
    const totalTicks = STEP_DURATION / TICK_MS;
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      setStepProgress(Math.min(100, Math.round((tick / totalTicks) * 100)));
    }, TICK_MS);
    const timer = setTimeout(() => {
      clearInterval(interval);
      setStep((s) => s + 1);
      setStepProgress(0);
    }, STEP_DURATION);
    return () => { clearInterval(interval); clearTimeout(timer); };
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
        <ProcessingScreen step={step} stepProgress={stepProgress} />
      ) : (
        <MomentSavedScreen onNavigate={() => navigate("/story")} />
      )}
    </Box>
  );
}

function ProcessingScreen({ step, stepProgress }: { step: number; stepProgress: number }) {
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
          return (
            <Box key={i} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
              <LinearProgress
                variant="determinate"
                value={isComplete ? 100 : isCurrent ? stepProgress : 0}
                sx={{
                  width: "100%",
                  height: 4,
                  borderRadius: 2,
                  bgcolor: "#d8ccfa",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#6c4dc4",
                    borderRadius: 2,
                    transition: isCurrent ? "transform 0.05s linear" : "none",
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

      {/* Tinu mascot */}
      <Box
        className="mascot-float"
        sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TinuMascot />
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
          Moments Saved!
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#7b6e8f", textAlign: "center", lineHeight: 1.6, whiteSpace: "pre-line" }}
        >
          {"We found something interesting\ncheck your patterns"}
        </Typography>
      </Box>

      {/* CTAs */}
      <Box sx={{ width: "100%", px: 3, pb: 2, zIndex: 1 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={onNavigate}
          sx={{ bgcolor: "#6c4dc4", borderRadius: "16px", mb: 1, fontSize: 17, boxShadow: "0 4px 20px rgba(108,77,196,0.32)" }}
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
