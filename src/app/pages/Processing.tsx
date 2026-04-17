import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import mascotImg from "figma:asset/9ae95f1586357c068ebf21aa31af5d656f0795b3.png";

const STEPS = [
  "Reading every details...",
  "Connecting the dots...",
  "Finding what matters...",
  "Almost there ...",
];

const STEP_DURATION = 3000;

export default function Processing() {
  const navigate = useNavigate();
  // 0-3 = processing steps; 4 = moment saved
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (step >= 4) return;
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setStep((s) => s + 1);
        setFading(false);
      }, 280);
    }, STEP_DURATION);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div
      className="size-full max-w-md mx-auto flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f7eff5 0%, #fbf5fc 50%, #fdf4f0 100%)" }}
    >
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -400% center; }
          100% { background-position: 400% center; }
        }
        .bar-shimmer {
          background: linear-gradient(90deg, #5a3db8 0%, #6c4dc4 30%, #baaaf0 50%, #6c4dc4 70%, #5a3db8 100%);
          background-size: 400% 100%;
          animation: shimmer 1.8s ease-in-out infinite;
        }
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
        .processing-fade {
          transition: opacity 0.28s ease;
        }
      `}</style>

      <div
        className="processing-fade flex flex-col size-full"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {step < 4 ? (
          <ProcessingScreen step={step} />
        ) : (
          <MomentSavedScreen onNavigate={() => navigate("/story")} />
        )}
      </div>
    </div>
  );
}

/* ─── Status Bar ──────────────────────────────────────────────────────── */
function StatusBar() {
  return (
    <div className="flex items-center justify-between w-full px-[24px] py-[12px] shrink-0">
      <p
        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2d2047] text-[15px] leading-normal"
      >
        10:01
      </p>
      <div className="flex gap-[5px] items-center">
        {["signal_cellular_alt", "wifi", "battery_full"].map((icon) => (
          <div key={icon} className="flex items-center justify-center w-[14px]">
            <span
              className="font-['Material_Icons:Regular',sans-serif] text-[14px] text-center"
              style={{ color: "rgba(0,0,0,0.8)" }}
            >
              {icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Processing Screens 10–13 ───────────────────────────────────────── */
function ProcessingScreen({ step }: { step: number }) {
  return (
    <div className="flex flex-col items-center size-full">
      {/* Status bar */}
      <StatusBar />

      {/* Step title */}
      <div className="flex items-center justify-center w-full px-[24px] mt-[48px] mb-[24px] shrink-0">
        <p
          className="font-['Inter:Bold',sans-serif] font-bold text-[#2d2047] text-[17px] text-center"
        >
          {STEPS[step]}
        </p>
      </div>

      {/* Progress tracker */}
      <div className="flex gap-[8px] items-start w-full px-[24px] shrink-0">
        {[0, 1, 2, 3].map((i) => {
          const isComplete = i < step;
          const isCurrent = i === step;
          const isInactive = i > step;

          return (
            <div key={i} className="flex flex-col flex-1 items-center gap-[12px]">
              {/* Progress bar */}
              <div
                className="w-full rounded-[3px] overflow-hidden"
                style={{
                  height: 4,
                  background: isInactive ? "#d8ccfa" : "transparent",
                }}
              >
                {(isComplete || isCurrent) && (
                  <div
                    className={`h-full w-full rounded-[3px]${isCurrent ? " bar-shimmer" : ""}`}
                    style={isComplete ? { background: "#6c4dc4" } : {}}
                  />
                )}
              </div>

              {/* Step circle */}
              {isComplete ? (
                /* Completed: filled purple ✓ */
                <StepCircle bg="#6c4dc4">
                  <CheckIcon />
                </StepCircle>
              ) : isCurrent ? (
                /* Current step */
                step === 3 && i === 3 ? (
                  /* Step 4 on "Almost there": purple circle with "4" */
                  <StepCircle bg="#6c4dc4">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[13px]">
                      4
                    </span>
                  </StepCircle>
                ) : (
                  /* Steps 1–3 current: purple ✓ */
                  <StepCircle bg="#6c4dc4">
                    <CheckIcon />
                  </StepCircle>
                )
              ) : (
                /* Inactive: light lavender with number */
                <StepCircle bg="#ddd6f5">
                  <span
                    className="font-['Inter:Regular',sans-serif] text-[13px]"
                    style={{ color: "#a09bc0" }}
                  >
                    {i + 1}
                  </span>
                </StepCircle>
              )}
            </div>
          );
        })}
      </div>

      {/* Mascot area */}
      <div className="flex-1 flex items-center justify-center w-full px-[24px] py-[12px]">
        <div
          className="mascot-float relative flex items-center justify-center"
          style={{ width: "82%", maxWidth: 280 }}
        >
          <img
            src={mascotImg}
            alt="TinyPal mascot"
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(0 0 0 transparent)" }}
          />
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center w-full pb-[10px] shrink-0">
        <div
          className="rounded-full"
          style={{ width: 134, height: 5, background: "#b0a3c4", opacity: 0.3 }}
        />
      </div>
    </div>
  );
}

function StepCircle({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0"
      style={{ width: 30, height: 30, background: bg }}
    >
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <path
        d="M1.5 5L5 8.5L11.5 1.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Moment Saved Screen 14 ─────────────────────────────────────────── */
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
  { left: 320, top: 460, w: 6,  h: 10, color: "#6c4dc4",  rot: -81,  delay: 0.45 },
  { left: 42,  top: 480, w: 6,  h: 9,  color: "#ffd566",  rot: 11,   delay: 0.75 },
  { left: 80,  top: 500, w: 7,  h: 8,  color: "#4ecdc4",  rot: -83,  delay: 0.9  },
  { left: 243, top: 510, w: 7,  h: 11, color: "#ff8e6e",  rot: 31,   delay: 0.25 },
  { left: 347, top: 460, w: 5,  h: 9,  color: "#ff8e6e",  rot: 162,  delay: 0.5  },
  { left: 200, top: 405, w: 6,  h: 10, color: "#b49ae8",  rot: -123, delay: 0.65 },
  { left: 100, top: 230, w: 8,  h: 13, color: "#ff6b9d",  rot: 165,  delay: 0.35 },
  { left: 325, top: 265, w: 9,  h: 16, color: "#b49ae8",  rot: -61,  delay: 0.8  },
  { left: 215, top: 258, w: 10, h: 18, color: "#ff6b9d",  rot: -24,  delay: 0.05 },
  { left: 260, top: 185, w: 6,  h: 10, color: "#6c4dc4",  rot: -33,  delay: 0.95 },
  { left: 157, top: 660, w: 9,  h: 15, color: "#6c4dc4",  rot: 155,  delay: 0.2  },
  { left: 245, top: 630, w: 10, h: 16, color: "#4ecdc4",  rot: -138, delay: 0.7  },
  { left: 83,  top: 650, w: 5,  h: 7,  color: "#ffd566",  rot: 146,  delay: 0.4  },
  { left: 323, top: 645, w: 8,  h: 13, color: "#b49ae8",  rot: -115, delay: 0.6  },
  { left: 44,  top: 620, w: 9,  h: 15, color: "#ffd566",  rot: 1,    delay: 0.15 },
];

function MomentSavedScreen({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex flex-col items-center size-full relative overflow-hidden">
      {/* Status bar */}
      <StatusBar />

      {/* Confetti pieces — positioned absolutely */}
      {CONFETTI_DATA.map((c, i) => (
        <div
          key={i}
          className="absolute pointer-events-none confetti-piece"
          style={
            {
              left: c.left,
              top: c.top,
              width: c.w,
              height: c.h,
              background: c.color,
              borderRadius: 2,
              "--rot": `${c.rot}deg`,
              "--delay": `${c.delay}s`,
              "--dur": `${2.6 + (i % 5) * 0.22}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Central content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-[14px] px-[24px] w-full z-10">
        {/* Party popper */}
        <span style={{ fontSize: 64, lineHeight: 1 }}>🎉</span>

        {/* Heading */}
        <p
          className="font-['Inter:Bold',sans-serif] font-bold text-[#2d2047] text-center"
          style={{ fontSize: 28 }}
        >
          Moment saved!
        </p>

        {/* Sub-text */}
        <p
          className="font-['Inter:Regular',sans-serif] text-[#7b6e8f] text-center"
          style={{ fontSize: 16, lineHeight: 1.55 }}
        >
          We found something interesting{"\n"}check your patterns
        </p>
      </div>

      {/* CTA area */}
      <div className="flex flex-col gap-[8px] items-center w-full px-[24px] pb-[8px] z-10 shrink-0">
        {/* See insights button */}
        <button
          onClick={onNavigate}
          className="w-full rounded-[16px] cursor-pointer"
          style={{
            background: "#6c4dc4",
            boxShadow: "0 4px 20px rgba(108,77,196,0.32)",
            border: "none",
            padding: "15px 0",
          }}
        >
          <span
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-center block"
            style={{ fontSize: 17 }}
          >
            See insights
          </span>
        </button>

        {/* See all moments link */}
        <button
          onClick={onNavigate}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 0" }}
        >
          <span
            className="font-['Inter:Regular',sans-serif] text-[#6d627f] underline decoration-solid"
            style={{ fontSize: 14 }}
          >
            See all moments
          </span>
        </button>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center w-full pb-[10px] z-10 shrink-0">
        <div
          className="rounded-full"
          style={{ width: 134, height: 5, background: "#b0a3c4", opacity: 0.3 }}
        />
      </div>
    </div>
  );
}
