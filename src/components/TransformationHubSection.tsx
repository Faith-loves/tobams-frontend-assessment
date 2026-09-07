import Image from "next/image";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "600", style: "italic" });
import { ArrowUpRight, Zap } from "lucide-react";

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
    <span
      aria-hidden="true"
      className="relative h-[28px] w-[28px] shrink-0"
    >
      <Zap
        className="absolute left-[5.83px] top-[3.5px] h-[21px] w-[16.33333396911621px] fill-[#DDD0DA] text-[#571244]"
        strokeWidth={2}
      />
    </span>
  );
}

export default function TransformationHubSection() {
  return (
    <section className="h-auto w-full bg-white px-[24px] py-[24px] md:px-[32px] lg:p-[64px]">
      <div className="mx-auto max-w-[1312px] h-auto w-full min-w-0 rounded-[16px] bg-[#EF435333] px-[16px] py-[24px] lg:p-[40px]">
        <div className="flex h-auto w-full min-w-0 flex-col">
          
          {/* SMALL HEADING */}
          <div className="h-auto w-full min-w-0">
            <p className="h-auto w-full text-[14px] md:text-[20px] font-normal md:font-semibold md:italic leading-[26px] tracking-[0] text-[#1671D9]">
              Learning With Our CEO:
            </p>
          </div>

          {/* MAIN HEADING */}
          <div className="mt-[10px] h-auto w-full min-w-0">
            <h2 className={`${nunito.className} h-auto w-full text-[20px] md:text-[32px] font-semibold italic leading-[130%] tracking-[0] text-[#571244]`}>
              Transformation Hub With Jite Newton
            </h2>
          </div>

          {/* PARAGRAPH */}
          <div className="mt-[24px] lg:mt-[12px] h-auto w-full min-w-0">
            <p className="h-auto w-full text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#151515]">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you&apos;re seeking to advance your
              career or enhance your leadership skills, the Transformation Hub
              provides a transformative learning experience to unlock your full
              potential and drive success in your endeavours.
            </p>
          </div>

          {/* IMAGE + BENEFITS CONTAINER */}
          <div className="mt-[20px] lg:mt-[34px] grid grid-cols-1 lg:grid-cols-2 h-auto w-full min-w-0 gap-[24px] lg:gap-[32px]">
            
            {/* IMAGE */}
            <div className="relative aspect-[295/232] lg:aspect-[560/340] h-auto w-full min-w-0 shrink-0 overflow-hidden rounded-[8px]">
              <Image
                src="/transformation-hub.png"
                alt="Transformation Hub with Jite Newton"
                fill
                sizes="560px"
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTAINER */}
            <div className="flex h-auto w-full min-w-0 shrink-0 flex-col gap-[24px] rounded-[8px] bg-white/30 px-[20px] py-[20px] lg:py-[32px]">
              
              {/* BENEFIT BOXES */}
              <div className="grid h-auto w-full min-w-0 grid-cols-1 sm:grid-cols-2 gap-[12px]">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex h-auto w-full min-w-0 items-center gap-[10px] rounded-[16px] lg:rounded-[12px] bg-white p-[16px]"
                  >
                    <BenefitIcon />

                    <span className="h-auto w-full min-w-0 whitespace-normal text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#151515]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* LEARN MORE */}
              <button
                type="button"
                className="flex h-[44px] w-[153px] md:h-[48px] md:w-[173px] items-center justify-center gap-[8px] rounded-[4px] bg-[#571244] px-[24px] py-[10.5px]"
              >
                <span className="h-auto w-auto md:w-[93px] text-[14px] md:text-[18px] font-semibold leading-[150%] tracking-[0] text-white">
                  Learn More
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-[24px] w-[24px] shrink-0 text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
