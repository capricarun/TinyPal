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

function ProgressBar() {
  return (
    <div className="bg-[#6c4dc4] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="Progress Bar 1">
      <div className="size-full" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#6c4dc4] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative">
      <ProgressBar />
      <Frame15 />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="bg-[#d8ccfa] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="Progress Bar 1">
      <div className="size-full" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#d8ccfa] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#b0a3c4] text-[13px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative">
      <ProgressBar1 />
      <Frame17 />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="bg-[#d8ccfa] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="Progress Bar 1">
      <div className="size-full" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#d8ccfa] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#b0a3c4] text-[13px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative">
      <ProgressBar2 />
      <Frame19 />
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="bg-[#d8ccfa] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="Progress Bar 1">
      <div className="size-full" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#d8ccfa] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#b0a3c4] text-[13px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative">
      <ProgressBar3 />
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame16 />
      <Frame18 />
      <Frame21 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#ede5ff] content-stretch flex flex-col h-[150px] items-center justify-center relative rounded-[20px] shrink-0">
      <div className="flex flex-[1_0_0] flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d8ccfa] text-[100px] text-center w-[120px]">
        <p className="leading-[normal]">notes</p>
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
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center min-h-px min-w-px relative w-full">
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-[382px]">
        <Frame10 />
        <Frame />
        <Frame11 />
      </div>
      <Frame14 />
      <Frame24 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[26px] text-center whitespace-nowrap">Add Moments</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6d627f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5] mb-0">Good or bad,</p>
        <p className="leading-[1.5]">every little detail matters</p>
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

function Dot() {
  return <div className="bg-[#6c4dc4] h-[8px] rounded-[4px] shrink-0 w-[24px]" data-name="Dot 1" />;
}

function Dot1() {
  return <div className="bg-[#d8ccfa] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 2" />;
}

function Dot2() {
  return <div className="bg-[#d8ccfa] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 3" />;
}

function Dot3() {
  return <div className="bg-[#d8ccfa] rounded-[4px] shrink-0 size-[8px]" data-name="Dot 4" />;
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Dot />
      <Dot1 />
      <Dot2 />
      <Dot3 />
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
    <div className="bg-[#6c4dc4] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[18px] text-center text-white">Next</p>
        </div>
      </div>
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

export default function Component01PatternsFromHome() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f6edf7] items-center px-[24px] py-[12px] relative size-full to-[#fefaf6]" data-name="01 Patterns_From Home">
      <Frame25 />
    </div>
  );
}