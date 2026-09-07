import Image from "next/image";
import { Nunito } from "next/font/google";
import { ArrowUpRight, Zap } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"], weight: "600", style: "italic" });

const benefits = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

function BenefitIcon() {
  return (
    <span aria-hidden="true" className="relative h-[28px] w-[28px] shrink-0">
      <Zap className="absolute left-[5.83px] top-[3.5px] h-[21px] w-[16.33333396911621px] fill-[#DDD0DA] text-[#571244]" strokeWidth={2} />
    </span>
  );
}

export default function TransformationHubSection() {
  return (
    <section className="w-full bg-white px-[24px] py-[24px] md:px-[32px] lg:p-[64px]">
      <div className="mx-auto w-full max-w-[1312px] rounded-[16px] bg-[#EF435333] px-[16px] py-[24px] lg:p-[40px]">
        <p className="text-[14px] font-normal leading-[26px] text-[#1671D9] md:text-[20px] md:font-semibold md:italic">
          Learning With Our CEO:
        </p>
        <h2 className={`${nunito.className} mt-[10px] text-[20px] font-semibold italic leading-[130%] text-[#571244] md:text-[32px]`}>
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-[24px] text-[14px] leading-[150%] text-[#151515] md:text-[18px] lg:mt-[12px]">
          Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
        </p>
        <div className="mt-[20px] grid grid-cols-1 gap-[24px] lg:mt-[34px] lg:grid-cols-2 lg:gap-[32px]">
          <div className="relative aspect-[295/232] w-full overflow-hidden rounded-[8px] lg:aspect-[560/340]">
            <Image src="/transformation-hub.png" alt="Transformation Hub with Jite Newton" fill sizes="560px" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[24px] rounded-[8px] bg-white/30 px-[20px] py-[20px] lg:py-[32px]">
            <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-[10px] rounded-[16px] bg-white p-[16px] lg:rounded-[12px]">
                  <BenefitIcon />
                  <span className="text-[14px] leading-[150%] text-[#151515] md:text-[18px]">{benefit}</span>
                </div>
              ))}
            </div>
            <button type="button" className="flex h-[44px] w-[153px] items-center justify-center gap-[8px] rounded-[4px] bg-[#571244] px-[24px] py-[10.5px] md:h-[48px] md:w-[173px]">
              <span className="text-[14px] font-semibold leading-[150%] text-white md:text-[18px]">Learn More</span>
              <ArrowUpRight aria-hidden="true" className="h-[24px] w-[24px] shrink-0 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
