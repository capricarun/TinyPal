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
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[18px] text-center whitespace-nowrap">Capture your child’s Moments</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return <div className="content-stretch flex flex-col items-center justify-center shrink-0 size-[20px]" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[6px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Custom Moment</p>
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">arrow_drop_down</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">calendar_today</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Today</p>
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">arrow_drop_down</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative rounded-[16px] w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(0,0,0,0.84)]">Babu got upset when asked to stop playing and transition to homework. Showed resistance by arguing and delaying the task, indicating difficulty in shifting from a preferred activity to a structured one. This may suggest a need for smoother transitions, clear expectations, or a short buffer time between play and study to help the child adjust more comfortably.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full">
      <div aria-hidden="true" className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame19 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame18 />
      <Frame23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full">
      <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-[382px]">
        <Frame10 />
        <Frame />
        <Frame11 />
      </div>
      <Frame24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-full">
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.84)] text-center whitespace-nowrap">mic</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.84)] text-center whitespace-nowrap">Record</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame20 />
      <Frame27 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(108,77,196,0.5)] relative rounded-[36px] self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[16px] py-[12px] relative">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">close</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame21 />
      <Frame30 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-full relative rounded-[36px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[16px] py-[12px] relative">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">check</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Save</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame25 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#6c4dc4] h-full relative rounded-[36px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[16px] py-[12px] relative">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0">
      <Frame26 />
      <Frame33 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[43px] items-start justify-between relative shrink-0 w-full">
      <Frame35 />
      <Frame34 />
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] shrink-0 w-[134px]" data-name="Home Indicator" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <HomeIndicator />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full">
      <Frame15 />
      <Frame22 />
      <Frame13 />
    </div>
  );
}

export default function Component08MomentEntry() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f6edf7] items-center px-[24px] py-[12px] relative size-full to-[#fefaf6]" data-name="08 Moment Entry">
      <Frame14 />
    </div>
  );
}