import { useState, useEffect } from "react";

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[15px] whitespace-nowrap">10:01</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">signal_cellular_alt</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">wifi</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">battery_full</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return <div className="content-stretch flex flex-col items-center justify-center shrink-0 size-[24px]" />;
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[18px] text-center whitespace-nowrap">How patterns work</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.84)] text-center w-full">close</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#ede5ff] content-stretch flex flex-col h-[150px] items-center justify-center relative rounded-[20px] shrink-0">
      <div className="flex flex-[1_0_0] flex-col font-['Material_Icons_Outlined:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d8ccfa] text-[80px] text-center w-[120px]">
        <p className="leading-[normal]">flag</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full">
      <Frame27 />
    </div>
  );
}

function Frame20() {
  const [step, setStep] = useState(0); // 0 = first bar active … 3 = all bars filled

  useEffect(() => {
    if (step >= 3) return; // stop after step 3 (all bars complete)
    const t = setTimeout(() => setStep((s) => s + 1), 3000);
    return () => clearTimeout(t);
  }, [step]);

  // Bar states per step index i:
  //   i < step  → solid purple (complete)
  //   i === step → shimmer (currently processing)
  //   i > step  → inactive lavender
  const barStyle = (i: number): React.CSSProperties => {
    if (i < step) return { background: "#6c4dc4" };
    if (i === step)
      return {
        background:
          "linear-gradient(90deg,#5a3db8 0%,#6c4dc4 30%,#baaaf0 50%,#6c4dc4 70%,#5a3db8 100%)",
        backgroundSize: "400% 100%",
        animation: "shimmer04 1.8s ease-in-out infinite",
      };
    return { background: "#d8ccfa" };
  };

  // Circle for step index i
  const renderCircle = (i: number) => {
    const isComplete = i < step;
    const isCurrent = i === step;

    if (isComplete) {
      // Purple ✓
      return (
        <div
          className="bg-[#6c4dc4] content-stretch flex flex-col items-center justify-center px-[10px] py-[7px] relative rounded-[30px] shrink-0 w-[27px]"
        >
          <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            check
          </p>
        </div>
      );
    }
    if (isCurrent) {
      // Step 4 current shows "4", others show ✓
      return i === 3 ? (
        <div className="bg-[#6c4dc4] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            4
          </p>
        </div>
      ) : (
        <div className="bg-[#6c4dc4] content-stretch flex flex-col items-center justify-center px-[10px] py-[7px] relative rounded-[30px] shrink-0 w-[27px]">
          <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            check
          </p>
        </div>
      );
    }
    // Inactive: lavender background with number
    return (
      <div
        className="content-stretch flex flex-col items-center justify-center px-[10px] py-[7px] relative rounded-[30px] shrink-0 w-[27px]"
        style={{ background: "#d8ccfa" }}
      >
        <p
          className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap"
          style={{ color: "#a09bc0" }}
        >
          {i + 1}
        </p>
      </div>
    );
  };

  return (
    <>
      {/* Inject shimmer keyframes scoped to this component */}
      <style>{`
        @keyframes shimmer04 {
          0%   { background-position: -400% center; }
          100% { background-position:  400% center; }
        }
      `}</style>

      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px relative w-full">
        {/* Progress tracker — replaces Frame14 */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative"
              >
                {/* Progress bar */}
                <div
                  className="h-[4px] relative rounded-[2px] shrink-0 w-full"
                  style={barStyle(i)}
                />
                {/* Step circle */}
                {renderCircle(i)}
              </div>
            ))}
          </div>
        </div>

        {/* Flag placeholder — Frame24 unchanged */}
        <Frame24 />
      </div>
    </>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[26px] text-center whitespace-nowrap">Personalised goals</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6d627f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5] mb-0">Capture more moments,</p>
        <p className="leading-[1.5]">uncover your child’s unique patterns.</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Dot1() {
  return <div className="bg-[#6c4dc4] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 2" />;
}

function Dot2() {
  return <div className="bg-[#6c4dc4] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 4" />;
}

function Dot3() {
  return <div className="bg-[#6c4dc4] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 5" />;
}

function Dot() {
  return <div className="bg-[#6c4dc4] h-[8px] rounded-[4px] shrink-0 w-[24px]" data-name="Dot 1" />;
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Dot1 />
      <Dot2 />
      <Dot3 />
      <Dot />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[224px] items-center relative shrink-0 w-full">
      <Frame29 />
      <Frame32 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full">
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-[382px]">
        <Frame10 />
        <Frame />
        <Frame11 />
      </div>
      <Frame20 />
      <Frame28 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full">
      <Frame8 />
      <Frame23 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#6c4dc4] content-stretch flex items-center justify-center px-[10px] py-[16px] relative rounded-[16px] shrink-0 w-[366px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-white w-[346px]">Start Adding Moments</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Frame35 />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] shrink-0 w-[134px]" data-name="Home Indicator" />;
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame34 />
      <HomeIndicator />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame26 />
      <Frame33 />
    </div>
  );
}

export default function Component04PatternsFromStory() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f6edf7] items-center px-[24px] py-[12px] relative size-full to-[#fefaf6]" data-name="04 Patterns_From Story">
      <Frame25 />
    </div>
  );
}