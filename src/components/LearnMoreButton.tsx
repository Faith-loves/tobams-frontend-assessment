import { ArrowUpRight } from "lucide-react";

export default function LearnMoreButton({ className = "" }: { className?: string }) {
  return <button type="button" className={`flex h-[48px] w-[153px] shrink-0 items-center justify-center gap-[8px] rounded-[4px] bg-[#571244] px-[24px] text-[14px] font-semibold text-white md:w-[173px] md:text-[18px] ${className}`}>
    Learn More <ArrowUpRight size={24} aria-hidden="true" className="shrink-0" />
  </button>;
}
