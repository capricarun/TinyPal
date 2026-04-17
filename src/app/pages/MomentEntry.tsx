import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const MOMENT_OPTIONS = [
  "Memorable Moments",
  "Connection",
  "Happy Moment",
  "Decisions",
  "Challenges",
  "Worries",
  "Friction",
  "Proud Moments",
  "Growth Highlights",
  "Custom Moment",
];

// Generate date options: Today, Yesterday, then past 5 days
function buildDateOptions() {
  const opts: { label: string; date: Date }[] = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    let label = "";
    if (i === 0) label = "Today";
    else if (i === 1) label = "Yesterday";
    else
      label = d.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
    opts.push({ label, date: d });
  }
  return opts;
}

const DATE_OPTIONS = buildDateOptions();

export default function MomentEntry() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showMomentMenu, setShowMomentMenu] = useState(false);
  const [selectedMoment, setSelectedMoment] = useState("Custom Moment");
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Today");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const momentDropdownRef = useRef<HTMLDivElement>(null);
  const dateDropdownRef = useRef<HTMLDivElement>(null);

  const hasText = text.trim().length > 0;

  // Close moment menu on outside click
  useEffect(() => {
    if (!showMomentMenu) return;
    const handler = (e: MouseEvent) => {
      if (
        momentDropdownRef.current &&
        !momentDropdownRef.current.contains(e.target as Node)
      ) {
        setShowMomentMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showMomentMenu]);

  // Close date menu on outside click
  useEffect(() => {
    if (!showDateMenu) return;
    const handler = (e: MouseEvent) => {
      if (
        dateDropdownRef.current &&
        !dateDropdownRef.current.contains(e.target as Node)
      ) {
        setShowDateMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDateMenu]);

  const handleBack = () => {
    if (hasText) {
      setShowCancelModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleCancel = () => {
    if (hasText) {
      setShowCancelModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleSave = () => {
    if (hasText) {
      navigate("/processing");
    }
  };

  const handleConfirmYes = () => {
    setShowCancelModal(false);
    navigate(-1);
  };

  const handleConfirmNo = () => {
    setShowCancelModal(false);
  };

  return (
    <div className="size-full max-w-md mx-auto relative" style={{ maxHeight: "100vh", background: "linear-gradient(to bottom, #f6edf7, #fefaf6)" }}>
      {/* Main content */}
      <div className="flex flex-col gap-[24px] items-start px-[24px] py-[12px] size-full">

        {/* Top section */}
        <div className="flex flex-col gap-[40px] items-start w-full flex-1 min-h-0">

          {/* Status bar */}
          <div className="flex items-center justify-between w-full shrink-0">
            <div className="flex items-center justify-center">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic text-[#2d2047] text-[15px] whitespace-nowrap">10:01</p>
            </div>
            <div className="flex gap-[5px] items-center">
              <div className="flex flex-col items-center justify-center w-[14px]">
                <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">signal_cellular_alt</p>
              </div>
              <div className="flex flex-col items-center justify-center w-[14px]">
                <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">wifi</p>
              </div>
              <div className="flex flex-col items-center justify-center w-[14px]">
                <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-center w-full">battery_full</p>
              </div>
            </div>
          </div>

          {/* Inner content */}
          <div className="flex flex-col gap-[40px] items-start w-full flex-1 min-h-0">

            {/* Header row */}
            <div className="flex h-[24px] items-center justify-between w-full shrink-0">
              <button
                onClick={handleBack}
                className="flex flex-col items-center justify-center w-[24px] cursor-pointer"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[24px] text-[rgba(0,0,0,0.84)] text-center w-full">keyboard_arrow_left</p>
              </button>
              <div className="flex-1 min-w-0 flex items-center justify-center px-[10px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic text-[#2d2047] text-[18px] text-center whitespace-nowrap">Capture your child's Moments</p>
              </div>
              <div className="w-[20px] h-[20px] shrink-0" />
            </div>

            {/* Input area */}
            <div className="flex flex-col gap-[8px] items-start w-full flex-1 min-h-0">
              {/* Dropdowns row */}
              <div className="flex items-start justify-between w-full shrink-0">

                {/* Custom Moment dropdown — anchor */}
                <div className="relative" ref={momentDropdownRef}>
                  <div
                    className="flex gap-[10px] items-center justify-center px-[12px] py-[6px] relative rounded-[16px] cursor-pointer select-none"
                    onClick={() => setShowMomentMenu((v) => !v)}
                  >
                    <div className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic text-[16px] text-black text-center whitespace-nowrap">
                      {selectedMoment}
                    </p>
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[20px] text-black text-center whitespace-nowrap"
                      style={{ transition: "transform 0.2s", transform: showMomentMenu ? "rotate(180deg)" : "rotate(0deg)" }}>
                      arrow_drop_down
                    </p>
                  </div>

                  {/* Dropdown menu */}
                  {showMomentMenu && (
                    <div
                      className="absolute left-0 top-[calc(100%+4px)] z-50 rounded-[8px] overflow-hidden"
                      style={{
                        minWidth: 220,
                        background: "white",
                        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 0px rgba(0,0,0,0.15)",
                      }}
                    >
                      {MOMENT_OPTIONS.map((option) => (
                        <div
                          key={option}
                          className="flex items-center justify-between px-[8px] cursor-pointer"
                          style={{ minHeight: 40 }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(108,77,196,0.06)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          onClick={() => {
                            setSelectedMoment(option);
                            setShowMomentMenu(false);
                          }}
                        >
                          <p
                            className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] text-[14px] text-[rgba(0,0,0,0.87)] whitespace-nowrap px-[8px] py-[8px]"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            {option}
                          </p>
                          {option === selectedMoment && (
                            <p
                              className="font-['Material_Icons_Outlined:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] text-[14px] text-[rgba(0,0,0,0.54)] px-[8px]"
                              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
                            >
                              check
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Today dropdown */}
                <div className="relative" ref={dateDropdownRef}>
                  <div
                    className="flex gap-[10px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative rounded-[16px] cursor-pointer select-none"
                    onClick={() => setShowDateMenu((v) => !v)}
                  >
                    <div className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-black text-center whitespace-nowrap">calendar_today</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-black text-center whitespace-nowrap">
                      {selectedDate}
                    </p>
                    <p
                      className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[20px] text-black text-center whitespace-nowrap"
                      style={{ transition: "transform 0.2s", transform: showDateMenu ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      arrow_drop_down
                    </p>
                  </div>

                  {/* Date dropdown list */}
                  {showDateMenu && (
                    <div
                      className="absolute right-0 top-[calc(100%+4px)] z-50 rounded-[8px] overflow-hidden"
                      style={{
                        minWidth: 180,
                        background: "white",
                        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 0px rgba(0,0,0,0.15)",
                      }}
                    >
                      {DATE_OPTIONS.map((opt) => (
                        <div
                          key={opt.label}
                          className="flex items-center justify-between px-[8px] cursor-pointer"
                          style={{ minHeight: 40 }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(108,77,196,0.06)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          onClick={() => {
                            setSelectedDate(opt.label);
                            setShowDateMenu(false);
                          }}
                        >
                          <p
                            className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] text-[14px] text-[rgba(0,0,0,0.87)] whitespace-nowrap px-[8px] py-[8px]"
                          >
                            {opt.label}
                          </p>
                          {opt.label === selectedDate && (
                            <p className="font-['Material_Icons_Outlined:Regular',sans-serif] leading-[16px] text-[14px] text-[rgba(0,0,0,0.54)] px-[8px]">
                              check
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Textarea */}
              <div className="bg-white flex-1 min-h-0 relative rounded-[16px] w-full">
                <div className="absolute border border-[#d9c8ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="flex flex-col items-start p-[16px] size-full">
                  <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Jiyu didnt finish dinner, but seemed quieter than normal ..."
                    className="flex-1 w-full resize-none bg-transparent outline-none border-none font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic text-[16px] text-[rgba(0,0,0,0.84)] placeholder:text-[rgba(0,0,0,0.38)]"
                    style={{ minHeight: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="flex h-[43px] items-start justify-between w-full shrink-0">
          {/* Record button */}
          <div
            className="relative rounded-[36px] self-stretch shrink-0 cursor-pointer"
            style={{ background: hasText ? "rgba(108,77,196,0.5)" : "#6c4dc4" }}
          >
            <div className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
            <div className="flex flex-row items-center size-full">
              <div className="flex h-full items-center px-[16px] py-[12px]">
                <div className="flex gap-[8px] items-center">
                  <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-center whitespace-nowrap"
                    style={{ color: hasText ? "rgba(255,255,255,0.84)" : "white" }}>mic</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-center whitespace-nowrap"
                    style={{ color: hasText ? "rgba(255,255,255,0.84)" : "white" }}>Record</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cancel + Save buttons */}
          <div className="flex gap-[8px] items-center self-stretch shrink-0">
            {/* Cancel */}
            <button
              onClick={handleCancel}
              className="h-full relative rounded-[36px] shrink-0 cursor-pointer"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <div className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
              <div className="flex flex-row items-center size-full">
                <div className="flex h-full items-center px-[16px] py-[12px]">
                  <div className="flex gap-[8px] items-center">
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-[rgba(0,0,0,0.84)] text-center whitespace-nowrap">close</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-[rgba(0,0,0,0.84)] text-center whitespace-nowrap">Cancel</p>
                  </div>
                </div>
              </div>
            </button>

            {/* Save */}
            <button
              onClick={handleSave}
              disabled={!hasText}
              className="h-full relative rounded-[36px] shrink-0"
              style={{
                background: hasText ? "#6c4dc4" : "rgba(108,77,196,0.5)",
                border: "none",
                padding: 0,
                cursor: hasText ? "pointer" : "default",
              }}
            >
              <div className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
              <div className="flex flex-row items-center size-full">
                <div className="flex h-full items-center px-[16px] py-[12px]">
                  <div className="flex gap-[8px] items-center">
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-center text-white whitespace-nowrap">check</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-center text-white whitespace-nowrap">Save</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex flex-col items-center w-full shrink-0">
          <div className="bg-[#b0a3c4] h-[5px] opacity-30 rounded-[3px] w-[134px]" />
        </div>
      </div>

      {/* Cancel confirmation modal */}
      {showCancelModal && (
        <>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]" onClick={handleConfirmNo} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col gap-[40px] items-center justify-center px-[24px] py-[40px] rounded-[16px] w-[calc(100%-48px)] max-w-[382px]">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-normal not-italic text-black text-center w-full">
              <p className="text-[20px] w-full">Are you Sure you want to cancel?</p>
              <p className="text-[14px] w-full">You have unsaved changes, canceling will save them as a draft.</p>
            </div>
            <div className="flex gap-[24px] items-start">
              <button
                onClick={handleConfirmNo}
                className="flex h-[44px] items-center px-[24px] py-[12px] relative rounded-[36px] cursor-pointer"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <div className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
                <div className="flex h-[44px] items-center px-[24px] py-[12px]">
                  <div className="flex gap-[8px] items-center">
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-black text-center whitespace-nowrap">close</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-black text-center whitespace-nowrap">No</p>
                  </div>
                </div>
              </button>
              <button
                onClick={handleConfirmYes}
                className="bg-[#6c4dc4] flex h-[44px] items-center px-[24px] py-[12px] relative rounded-[36px] cursor-pointer"
                style={{ border: "none", padding: 0 }}
              >
                <div className="absolute border border-[#b49ae8] border-solid inset-0 pointer-events-none rounded-[36px]" />
                <div className="flex h-[44px] items-center px-[24px] py-[12px]">
                  <div className="flex gap-[8px] items-center">
                    <p className="font-['Material_Icons:Regular',sans-serif] leading-normal not-italic text-[16px] text-center text-white whitespace-nowrap">check</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-normal not-italic text-[16px] text-center text-white whitespace-nowrap">Yes</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}