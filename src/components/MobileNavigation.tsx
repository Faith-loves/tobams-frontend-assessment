import { Menu } from "lucide-react";
import SecondaryNavbar from "./SecondaryNavbar";

export default function MobileNavigation() {
  return (
    <details className="group md:hidden">
      <summary aria-label="Open navigation menu" className="flex h-[28px] w-[28px] cursor-pointer list-none items-center justify-center rounded-[8px] bg-[#151515] text-white [&::-webkit-details-marker]:hidden">
        <Menu aria-hidden="true" size={24} />
      </summary>
      <div className="absolute inset-x-[24px] top-[68px] z-50 rounded-[8px] border border-[#DDD0DA] bg-white p-[16px] shadow-lg">
        <SecondaryNavbar mobile />
        <div className="mt-[16px] flex flex-wrap gap-[12px]">
          <button type="button" className="rounded-[4px] bg-[#571244] px-[16px] py-[10px] text-[14px] text-white">Account</button>
          <button type="button" className="rounded-[4px] bg-[#EF4353] px-[16px] py-[10px] text-[14px] text-white">Take Assessment</button>
        </div>
      </div>
    </details>
  );
}
