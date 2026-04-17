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
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[24px]">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.84)] text-center w-full">keyboard_arrow_left</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[18px] text-center whitespace-nowrap">What is a Pattern?</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return <div className="content-stretch flex flex-col items-center justify-center shrink-0 size-[20px]" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-[rgba(0,0,0,0.84)] text-center">
        <p className="mb-0">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">Patterns are themes</span>
          <span className="leading-[24px]">{` `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">we discover</span>
        </p>
        <p className="leading-[24px]">in how your child responds to the world.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#716288] text-[12px] tracking-[1px] whitespace-nowrap">HOW IT WORKS</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#9470fc] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[16px] whitespace-nowrap">You log moments</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame13 />
      <Frame26 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[42px] pr-[8px] relative w-full">
          <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#6d627f] text-[14px]">
            <p className="leading-[1.5] mb-0">Capture daily moments, good, tricky,</p>
            <p className="leading-[1.5]">or somewhere in between.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#ede5ff] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame27 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#9470fc] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[16px] whitespace-nowrap">We find the patterns</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame14 />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[42px] pr-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#6d627f] text-[14px]">Our AI connects moments across days to reveal recurring themes in behavior.</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#ede5ff] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame33 />
        <Frame35 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#9470fc] content-stretch flex flex-col items-center justify-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[27px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[16px] whitespace-nowrap">You get insights</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame16 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[42px] pr-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#6d627f] text-[14px]">{`Personalized strategies and goals based on your child's unique patterns.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#ede5ff] relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame37 />
        <Frame39 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame32 />
      <Frame36 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame31 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#716288] text-[12px] tracking-[1px] uppercase whitespace-nowrap">Example pattern</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[16px] whitespace-nowrap">{`Eye-level = ears open `}</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.84)]">When you crouch to their level, listening improves by 3 tiimes.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#d6f5e3] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Listening</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#d6f5e3] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Connection</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
        <Frame44 />
        <Frame48 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame17 />
      <Frame30 />
      <Frame40 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-[382px]">
        <Frame10 />
        <Frame />
        <Frame11 />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#6c4dc4] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[18px] text-center text-white">Got it</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Frame19 />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] shrink-0 w-[134px]" data-name="Home Indicator" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame20 />
      <HomeIndicator />
    </div>
  );
}

export default function Component06PatternsFromStory() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f6edf7] gap-[40px] items-center px-[24px] py-[12px] relative size-full to-[#fefaf6]" data-name="06 Patterns_From Story">
      <Frame23 />
      <Frame22 />
    </div>
  );
}