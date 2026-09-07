import { CircleUserRound } from "lucide-react";
import BrandLogo from "./BrandLogo";
import MobileNavigation from "./MobileNavigation";

export default function TopNavbar() {
  return (
    <header className="relative z-20 w-full border-b border-[#DDD0DA] bg-[#F9F9F9] md:bg-white">
      <div className="mx-auto flex h-[76px] md:h-[104px] gap-[16px] w-full max-w-[1440px] items-center justify-between px-[24px] md:px-[32px] lg:px-[64px] py-[20px]">
        <BrandLogo />

        <div className="hidden h-[48px] w-[374px] rotate-0 items-center gap-[24px] opacity-100 md:flex">
          <button
            type="button"
            className="flex h-[48px] w-[167px] rotate-0 items-center justify-center gap-[8px] rounded-[4px] bg-[var(--Hue-Primary,#571244)] px-[16px] py-[8px] text-[18px] font-semibold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100 inset-ring-[1px] inset-ring-[var(--Hue-Primary,#571244)]"
          >
            <span className="flex h-[32px] w-[32px] shrink-0 rotate-0 items-center justify-center gap-[2.67px] rounded-[16px] bg-[var(--shades-purple-selection-purple-10,#DDD0DA)] opacity-100">
              <CircleUserRound
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-[#571244]"
              />
            </span>

            <span className="h-[27px] w-[67px] shrink-0 rotate-0 text-center align-middle opacity-100">Account</span>

            <span className="relative h-[20px] w-[20px] shrink-0 opacity-100">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-[20px] w-[20px] text-[var(--shades-purple-selection-purple-10,#DDD0DA)]"
              >
                <path d="m5.83 8.33 4.166666507720951 4.166666507720951 4.166666507720951-4.166666507720951" />
              </svg>
            </span>
          </button>

          <button
            type="button"
            className="flex h-[48px] w-[183px] rotate-0 items-center justify-center gap-[10px] rounded-[4px] bg-[var(--Hue-Secondary,#EF4353)] px-[20px] py-[10.5px] text-[18px] font-semibold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100"
          >
            <span className="flex h-[27px] w-[143px] gap-[8px]">
              <span className="h-[27px] w-[143px] rotate-0 text-center opacity-100">Take Assessment</span>
            </span>
          </button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
