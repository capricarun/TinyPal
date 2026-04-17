import imgImage3 from "./771cb07886fe2f3cb84ec71869072f1569d1313b.png";

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

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2d2047] text-[18px] text-center whitespace-nowrap">{`Your Child’s Story `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="h-[124px] relative shrink-0 w-[181px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.84)] text-center whitespace-nowrap">
            <p className="leading-[32px] mb-0 whitespace-pre">{`Your Child’s Story is `}</p>
            <p className="leading-[32px] mb-0 whitespace-pre">growing. Here’s</p>
            <p className="leading-[32px] whitespace-pre">what we see</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame24 />
    </div>
  );
}

function CtaAddMoment() {
  return (
    <div className="bg-[#6c4dc4] relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(108,77,196,0.25)] shrink-0 w-full" data-name="CTA - Add Moment">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[85px] py-[18px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Add a Moment</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] not-italic relative shrink-0 text-[#6c4dc4] text-[14px] w-[109px]">
        <p className="decoration-solid leading-[normal] underline">See all moments</p>
      </div>
    </div>
  );
}

function CtaWhatIsAPattern() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-center overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="CTA - What is a pattern?">
      <div className="flex flex-row items-center self-stretch">
        <Frame33 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <CtaAddMoment />
      <CtaWhatIsAPattern />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] relative shrink-0 w-full">
      <Frame22 />
      <Frame29 />
      <Frame23 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6c4dc4] text-[32px] tracking-[5.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Patterns
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6c4dc4] text-[14px] underline whitespace-nowrap cursor-pointer" data-name="CTA - What is a pattern?">What's a Pattern?</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-[1_0_0] flex-col from-white items-start justify-center min-h-px min-w-px relative rounded-bl-[40px] rounded-br-[40px] to-[#ede5ff] w-full">
      <div aria-hidden="true" className="absolute border-l border-r border-solid border-white inset-0 pointer-events-none rounded-bl-[40px] rounded-br-[40px]" />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame34 />
      <Frame32 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[8px] relative size-full">
        <Frame7 />
        <Frame25 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[850px] items-start left-0 pt-[12px] px-[24px] right-0 top-0">
      <Frame21 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Material_Icons_Outlined:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">home</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.84)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6c4dc4] text-[24px] whitespace-nowrap">book</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6c4dc4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Story
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Material_Icons_Outlined:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">sentiment_satisfied</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ask Tinu
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Material_Icons_Outlined:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">notifications</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Notification
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Material_Icons_Outlined:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">account_circle</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Profile
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="Icon/Nav">
        <Frame9 />
        <Frame10 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="Icon/Nav">
        <Frame11 />
        <Frame12 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="Icon/Nav">
        <Frame13 />
        <Frame14 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="Icon/Nav">
        <Frame15 />
        <Frame16 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px py-[8px] relative rounded-[8px]" data-name="Icon/Nav">
        <Frame17 />
        <Frame18 />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] shrink-0 w-[134px]" data-name="Home Indicator" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <HomeIndicator />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white bottom-px content-stretch flex flex-col gap-[8px] items-start left-0 pt-[4px] right-0 rounded-tl-[16px] rounded-tr-[16px]">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-solid border-t inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <Frame26 />
      <Frame19 />
    </div>
  );
}

export default function Component05Story() {
  return (
    <div className="bg-gradient-to-b from-[#f6edf7] relative size-full to-[26.923%] to-white" data-name="05 Story">
      <Frame20 />
      <Frame27 />
    </div>
  );
}