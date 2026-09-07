import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
});

export default function ReadyToJoinSection() {
  return (
    <section
      aria-label="Ready to be a part of something extraordinary"
      className="relative flex flex-col lg:flex-row h-auto w-full min-w-0 rotate-0 items-start lg:items-center gap-[24px] lg:gap-[47px] bg-[var(--shades-purple-selection-purple-90,#1D0617)] px-[24px] md:px-[32px] lg:px-[64px] py-[40px] opacity-100 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:border-b-[2px] after:border-[var(--Hue-Border,#C4C4C4)] after:content-['']"
    >
      <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[10px] opacity-100">
        <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
          Ready to be a part of something extraordinary?
        </p>
        <h2 className={`${nunito.className} h-auto w-full min-w-0 rotate-0 text-[20px] md:text-[32px] font-semibold leading-[130%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100`}>
          Let’s work together to create a difference
        </h2>
      </div>
      <button
        type="button"
        className="flex shrink-0 h-[40px] w-[125px] md:h-[48px] md:w-[151px] rotate-0 items-center justify-center gap-[10px] rounded-[4px] bg-[var(--Hue-Primary,#571244)] px-[24px] py-[8px] md:py-[12px] opacity-100"
      >
        <span className={`${nunito.className} h-[22px] w-auto md:w-[103px] whitespace-nowrap rotate-0 text-center text-[14px] md:text-[18px] font-semibold leading-[120%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100`}>
          Get In Touch
        </span>
      </button>
    </section>
  );
}

