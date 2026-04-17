function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[15px] whitespace-nowrap">10:01</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">signal_cellular_alt</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">wifi</p>
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">battery_full</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[908px] items-start left-0 right-0 top-0">
      <Frame7 />
    </div>
  );
}

function Confetti() {
  return <div className="bg-[#6c4dc4] h-[15.09px] opacity-90 rounded-[2px] w-[9.431px]" data-name="Confetti" />;
}

function Confetti1() {
  return <div className="bg-[rgba(255,142,110,0.5)] h-[9.07px] opacity-95 rounded-[2px] w-[5.669px]" data-name="Confetti" />;
}

function Confetti2() {
  return <div className="bg-[#ffd566] h-[7.291px] opacity-95 rounded-[4.557px] w-[4.557px]" data-name="Confetti" />;
}

function Confetti3() {
  return <div className="bg-[#5ec28b] h-[10.639px] opacity-85 rounded-[2px] w-[6.649px]" data-name="Confetti" />;
}

function Confetti4() {
  return <div className="bg-[#b49ae8] h-[12.788px] opacity-61 rounded-[2px] w-[7.993px]" data-name="Confetti" />;
}

function Confetti5() {
  return <div className="bg-[#ff6b9d] h-[13.87px] opacity-65 rounded-[2px] w-[8.669px]" data-name="Confetti" />;
}

function Confetti6() {
  return <div className="bg-[#4ecdc4] h-[11.312px] opacity-93 rounded-[2px] w-[7.07px]" data-name="Confetti" />;
}

function Confetti7() {
  return <div className="bg-[#6c4dc4] h-[9.918px] opacity-76 rounded-[2px] w-[6.198px]" data-name="Confetti" />;
}

function Confetti8() {
  return <div className="bg-[#ff8e6e] h-[11.42px] opacity-69 rounded-[2px] w-[7.137px]" data-name="Confetti" />;
}

function Confetti9() {
  return <div className="bg-[#ffd566] h-[14.706px] opacity-96 rounded-[2px] w-[9.191px]" data-name="Confetti" />;
}

function Confetti10() {
  return <div className="bg-[rgba(94,194,139,0.5)] h-[11.258px] opacity-88 rounded-[2px] w-[7.036px]" data-name="Confetti" />;
}

function Confetti11() {
  return <div className="bg-[#b49ae8] h-[15.82px] opacity-97 rounded-[2px] w-[9.888px]" data-name="Confetti" />;
}

function Confetti12() {
  return <div className="bg-[#ff6b9d] h-[15.505px] opacity-97 rounded-[2px] w-[9.69px]" data-name="Confetti" />;
}

function Confetti13() {
  return <div className="bg-[#4ecdc4] h-[15.746px] opacity-74 rounded-[2px] w-[9.841px]" data-name="Confetti" />;
}

function Confetti14() {
  return <div className="bg-[#6c4dc4] h-[9.945px] opacity-66 rounded-[2px] w-[6.216px]" data-name="Confetti" />;
}

function Confetti15() {
  return <div className="bg-[#ff8e6e] h-[8.682px] opacity-81 rounded-[5.426px] w-[5.426px]" data-name="Confetti" />;
}

function Confetti16() {
  return <div className="bg-[#ffd566] h-[8.719px] opacity-96 rounded-[5.45px] w-[5.45px]" data-name="Confetti" />;
}

function Confetti17() {
  return <div className="bg-[#5ec28b] h-[6.816px] opacity-66 rounded-[4.26px] w-[4.26px]" data-name="Confetti" />;
}

function Confetti18() {
  return <div className="bg-[#b49ae8] h-[9.883px] opacity-77 rounded-[2px] w-[6.177px]" data-name="Confetti" />;
}

function Confetti19() {
  return <div className="bg-[#ff6b9d] h-[13.162px] opacity-92 rounded-[2px] w-[8.226px]" data-name="Confetti" />;
}

function Confetti20() {
  return <div className="bg-[#4ecdc4] h-[6.989px] opacity-84 rounded-[2px] w-[4.368px]" data-name="Confetti" />;
}

function Confetti21() {
  return <div className="bg-[#6c4dc4] h-[11.018px] opacity-74 rounded-[2px] w-[6.886px]" data-name="Confetti" />;
}

function Confetti22() {
  return <div className="bg-[#ff8e6e] h-[15.652px] opacity-89 rounded-[2px] w-[9.783px]" data-name="Confetti" />;
}

function Confetti23() {
  return <div className="bg-[#ffd566] h-[6.422px] opacity-75 rounded-[4.014px] w-[4.014px]" data-name="Confetti" />;
}

function Group1() {
  return (
    <div className="absolute contents left-[38px] not-italic text-center top-[365px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[188px] text-[56px] text-black top-[365px] w-[80px]">🎉</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[188px] text-[#2d2047] text-[28px] top-[445px] w-[300px]">Moment saved!</p>
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[188px] text-[#7b6e8f] text-[16px] top-[483px] w-[300px]">
        <p className="leading-[1.5] mb-0">We found something interesting</p>
        <p className="leading-[1.5]">check your patterns</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[8.07px] top-[157.33px]">
      <div className="absolute flex h-[17.648px] items-center justify-center left-[162px] top-[687px] w-[14.864px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[155.35deg]">
          <Confetti />
        </div>
      </div>
      <div className="absolute flex h-[10.529px] items-center justify-center left-[253px] top-[157.33px] w-[8.637px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-21.85deg]">
          <Confetti1 />
        </div>
      </div>
      <div className="absolute flex h-[8.59px] items-center justify-center left-[86.92px] top-[681.96px] w-[7.877px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[145.64deg]">
          <Confetti2 />
        </div>
      </div>
      <div className="absolute flex h-[10.911px] items-center justify-center left-[32.51px] top-[272.75px] w-[12.521px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-118.41deg]">
          <Confetti3 />
        </div>
      </div>
      <div className="absolute flex h-[12.763px] items-center justify-center left-[325px] top-[669px] w-[14.992px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-115.81deg]">
          <Confetti4 />
        </div>
      </div>
      <div className="absolute flex h-[13.964px] items-center justify-center left-[351.63px] top-[363.6px] w-[16.284px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-116.61deg]">
          <Confetti5 />
        </div>
      </div>
      <div className="absolute flex h-[13.134px] items-center justify-center left-[149px] top-[168px] w-[10.782px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[158.08deg]">
          <Confetti6 />
        </div>
      </div>
      <div className="absolute flex h-[7.641px] items-center justify-center left-[315px] top-[514px] w-[10.748px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-81.21deg]">
          <Confetti7 />
        </div>
      </div>
      <div className="absolute flex h-[13.464px] items-center justify-center left-[243px] top-[538px] w-[11.994px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.95deg]">
          <Confetti8 />
        </div>
      </div>
      <div className="absolute flex h-[14.849px] items-center justify-center left-[48.24px] top-[647.08px] w-[9.422px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.9deg]">
          <Confetti9 />
        </div>
      </div>
      <div className="absolute flex h-[8.428px] items-center justify-center left-[83px] top-[537px] w-[12.071px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-82.59deg]">
          <Confetti10 />
        </div>
      </div>
      <div className="absolute flex h-[16.334px] items-center justify-center left-[332px] top-[290px] w-[18.632px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-60.9deg]">
          <Confetti11 />
        </div>
      </div>
      <div className="absolute flex h-[18.106px] items-center justify-center left-[219px] top-[284px] w-[15.16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-24 flex-none">
          <Confetti12 />
        </div>
      </div>
      <div className="absolute flex h-[18.297px] items-center justify-center left-[249px] top-[657px] w-[17.832px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-138.19deg]">
          <Confetti13 />
        </div>
      </div>
      <div className="absolute flex h-[11.724px] items-center justify-center left-[267px] top-[212px] w-[10.666px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-33.43deg]">
          <Confetti14 />
        </div>
      </div>
      <div className="absolute flex h-[9.93px] items-center justify-center left-[355px] top-[470px] w-[7.835px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.07deg]">
          <Confetti15 />
        </div>
      </div>
      <div className="absolute flex h-[9.619px] items-center justify-center left-[51px] top-[474px] w-[7.055px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[11.32deg]">
          <Confetti16 />
        </div>
      </div>
      <div className="absolute flex h-[7.506px] items-center justify-center left-[28.56px] top-[414.83px] w-[5.488px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[11.05deg]">
          <Confetti17 />
        </div>
      </div>
      <div className="absolute flex h-[10.556px] items-center justify-center left-[211px] top-[437px] w-[11.653px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-122.91deg]">
          <Confetti18 />
        </div>
      </div>
      <div className="absolute flex h-[14.872px] items-center justify-center left-[109px] top-[258px] w-[11.423px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[164.62deg]">
          <Confetti19 />
        </div>
      </div>
      <div className="absolute flex h-[7.101px] items-center justify-center left-[337.34px] top-[187.9px] w-[4.551px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.51deg]">
          <Confetti20 />
        </div>
      </div>
      <div className="absolute flex h-[9.454px] items-center justify-center left-[321px] top-[419px] w-[12.403px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[75.32deg]">
          <Confetti21 />
        </div>
      </div>
      <div className="absolute flex h-[12.013px] items-center justify-center left-[8.07px] top-[413.09px] w-[16.939px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-98.6deg]">
          <Confetti22 />
        </div>
      </div>
      <div className="absolute flex h-[5.545px] items-center justify-center left-[108.3px] top-[368.33px] w-[7.245px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-74.93deg]">
          <Confetti23 />
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <Frame11 />
      <Group />
    </div>
  );
}

function CtaSeeInsights() {
  return (
    <div className="bg-[#6c4dc4] content-stretch flex items-center justify-center overflow-clip py-[15px] relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(108,77,196,0.3)] shrink-0 w-full" data-name="CTA - See insights">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-center text-white w-[220px]">See insights</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6d627f] text-[14px] text-center underline whitespace-nowrap">See all moments</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <CtaSeeInsights />
      <Frame12 />
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] shrink-0 w-[134px]" data-name="Home Indicator" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[382px]">
      <HomeIndicator />
    </div>
  );
}

export default function Component14MomentsSaved() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f7eff5] gap-[40px] items-center px-[24px] py-[12px] relative size-full to-[#fbf5f6]" data-name="14 Moments Saved">
      <Frame10 />
      <Frame13 />
      <Frame9 />
    </div>
  );
}