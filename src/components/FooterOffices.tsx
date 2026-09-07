import { Nunito_Sans } from "next/font/google";
import { Mail, Phone } from "lucide-react";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function FooterOffices() {
  return (
    <div className="flex w-full flex-col gap-[24px] py-[20px]">
      <div className="flex flex-col lg:flex-row w-full gap-[24px] rounded-[8px] bg-[#FFFFFF0F] p-[16px] md:p-[24px]">
        <section aria-labelledby="registered-offices-heading" className="order-2 lg:order-none flex lg:flex-1 w-full flex-col gap-[10px]">
          <div className="flex h-[27px] w-[171px] gap-[10px]">
            <h2 id="registered-offices-heading" className="h-[27px] w-[171px] text-[20px] font-bold leading-[100%] tracking-[0] text-[var(--Hue-White,#FFFFFF)]">Registered Offices</h2>
          </div>
          <div className={`${nunitoSans.className} flex flex-col md:flex-row w-full gap-[24px] text-[14px] md:text-[16px] leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)]`}>
            <p className="w-full md:flex-1 font-normal">
              <span className="font-semibold text-[var(--Hue-Secondary,#EF4353)]">United Kingdom</span><br />
              07451196 (Registered by Company House)<br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
            </p>
            <div aria-hidden="true" className="hidden md:block relative w-0 shrink-0 opacity-[0.12] before:absolute before:inset-y-0 before:left-[-0.5px] before:border-l before:border-[var(--shades-purple-selection-purple-10,#DDD0DA)] before:content-['']" />
            <p className="w-full md:flex-1 font-normal">
              <span className="font-semibold text-[var(--Hue-Secondary,#EF4353)]">Nigeria</span><br />
              RC 1048722 (Registered by the Corporate Affairs Commission)<br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>
        </section>
        <div aria-hidden="true" className="hidden md:block relative w-0 shrink-0 opacity-[0.12] before:absolute before:inset-y-0 before:left-[-0.5px] before:border-l before:border-[var(--shades-purple-selection-purple-10,#DDD0DA)] before:content-['']" />
        <section aria-labelledby="contact-information-heading" className="order-1 lg:order-none flex w-full lg:w-[254px] lg:shrink-0 flex-col gap-[17px]">
          <div className="flex h-[27px] w-[186px] gap-[10px]">
            <h2 id="contact-information-heading" className="h-[27px] w-[186px] text-[20px] font-bold leading-[100%] tracking-[0] text-[var(--Hue-White,#FFFFFF)]">Contact Information</h2>
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <a href="mailto:theteam@tobamsgroup.com" className="flex w-full gap-[16px]">
              <Mail aria-hidden="true" className="h-[24px] w-[24px] shrink-0 text-[var(--Hue-Secondary,#EF4353)]" />
              <span className="h-[24px] w-[214px] text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0] md:tracking-[0.03em] text-[var(--Hue-White,#FFFFFF)]">theteam@tobamsgroup.com</span>
            </a>
            <a href="tel:+447886600748" className="flex h-[24px] w-[171px] gap-[16px]">
              <Phone aria-hidden="true" className="h-[24px] w-[24px] shrink-0 text-[var(--Hue-Secondary,#EF4353)]" />
              <span className="h-[24px] w-[131px] text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0] md:tracking-[0.03em] text-[var(--Hue-White,#FFFFFF)]">+447886600748</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
