import { Menu } from "lucide-react";
import SecondaryNavbar from "./SecondaryNavbar";

export default function MobileNavigation() {
  return (
    <details className="group relative md:hidden">
      <summary aria-label="Open navigation menu" className="relative z-[60] flex h-[28px] w-[28px] cursor-pointer list-none items-center justify-center rounded-[8px] bg-[#151515] text-white [&::-webkit-details-marker]:hidden">
        <Menu aria-hidden="true" size={24} />
      </summary>
      <div aria-hidden="true" className="fixed inset-0 z-40 hidden bg-[#11040E]/35 backdrop-blur-[6px] group-open:block" />
      <div className="fixed inset-x-[24px] top-[76px] z-50 max-h-[calc(100vh-100px)] overflow-y-auto rounded-[8px] border border-[#DDD0DA] bg-white p-[16px] shadow-xl">
        <SecondaryNavbar mobile />
        <div className="mt-[20px] grid grid-cols-2 gap-[16px] border-t border-[#DDD0DA] pt-[16px]">
          <button type="button" className="h-[40px] rounded-[4px] bg-[#571244] px-[12px] text-[14px] font-semibold text-white">Account</button>
          <button type="button" className="h-[40px] rounded-[4px] bg-[#EF4353] px-[12px] text-[14px] font-semibold text-white">Take Assessment</button>
        </div>
      </div>
    </details>
  );
}
