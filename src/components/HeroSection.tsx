import Image from "next/image";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <section className="relative min-h-[317px] md:min-h-[511px] w-full overflow-hidden">
      <Image
        src="/hero-training.jpg"
        alt="Training and development"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#000000B2]" />

      <div className="relative z-10 mx-auto flex min-h-[317px] md:min-h-[511px] w-full max-w-[1440px] items-center justify-center px-[24px] md:px-[32px] lg:px-[64px] py-[40px] md:py-[64px] lg:py-[112px]">
        <div className="flex h-auto w-full min-w-0 flex-col items-center gap-[40px]">
          <div className="flex h-auto w-full min-w-0 flex-col items-center gap-[12px]">
            <div className="flex h-[38px] w-[150px] md:h-[45px] md:w-[193px] shrink-0 items-center justify-center rounded-[100px] bg-[#FFFFFF1A]">
              <span className="whitespace-normal text-center text-[12px] md:text-[14px] font-normal leading-[21px] tracking-[0] text-white">
                WHAT WE DO
              </span>
            </div>

            <h1 className={`${nunito.className} text-center font-bold text-[24px] md:text-[48px] lg:text-[56px] leading-[130%] tracking-[0] text-white`}>
              <span className="md:hidden">Learning and Development</span>
              <span className="hidden md:inline">Training and Development</span>
            </h1>

            <p className="text-center text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-white">
              Our comprehensive range of programs and resources is designed to
              enhance skills, broaden knowledge, and propel careers forward in
              today&apos;s ever-evolving landscape.
            </p>
          </div>

          <button
            type="button"
            className="flex h-[40px] w-[173px] md:h-[48px] md:w-[214px] items-center justify-center gap-[10px] rounded-[4px] bg-[#571244] px-[24px] py-[8px] md:py-[10.5px] text-center text-[14px] md:text-[18px] font-semibold leading-[150%] tracking-[0] text-white"
          >
            <span className="whitespace-nowrap">Book a Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
