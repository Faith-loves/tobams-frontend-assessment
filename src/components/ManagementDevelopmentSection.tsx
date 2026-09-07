import Image from "next/image";
import { Nunito } from "next/font/google";
import { Zap } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

function BenefitIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative h-[32px] w-[32px] shrink-0"
    >
      <Zap
        className="absolute left-[6.67px] top-[4px] h-[24px] w-[18.66666603088379px] fill-white text-white"
        strokeWidth={1.5}
      />
    </span>
  );
}

export default function ManagementDevelopmentSection() {
  return (
    <section className="mx-auto flex h-auto w-full max-w-[1440px] flex-col gap-[40px] bg-[#F9F9F9] px-[24px] py-[24px] md:px-[32px] lg:p-[64px]">
      <div className="mx-auto max-w-[1312px] h-auto lg:min-h-[719px] w-full min-w-0 rounded-[24px] lg:rounded-[20px] bg-[var(--shades-purple-selection-purple-80,#2C0922)] p-[20px] lg:p-[40px]">
        <div className="grid h-auto w-full min-w-0 grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[48px]">
          <div className="order-2 lg:order-none relative aspect-[287/232] lg:aspect-auto h-auto w-full min-w-0 shrink-0 overflow-hidden rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px]">
            <Image
              src="/management-development.png"
              alt="Management development program"
              fill
              sizes="(min-width: 1440px) 592px, (min-width: 1024px) calc((100vw - 256px) / 2), (min-width: 768px) calc(100vw - 112px), calc(100vw - 96px)"
              className="object-cover"
            />
          </div>

          <div className="contents lg:flex w-full lg:min-h-[639px] min-w-0 shrink-0 flex-col gap-[32px]">
            <div className="contents lg:flex w-full lg:min-h-[356px] flex-col gap-[20px]">
              <div className="order-1 lg:order-none flex w-full lg:min-h-[120px] flex-col gap-[12px]">
            <h2 className={`${nunito.className} h-auto lg:min-h-[120px] w-full min-w-0 text-[16px] md:text-[36px] lg:text-[40px] font-semibold leading-[150%] tracking-[0.03em] text-white`}>
              Management Development{" "}
              <br className="hidden lg:block" />
              Program
            </h2>
              </div>

            <div className="order-3 lg:order-none h-auto lg:min-h-[216px] w-full min-w-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-white">
              <p>
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the
                high-performing leaders they need to thrive.
              </p>

              <p className="mt-[21px] md:mt-[27px]">
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>
            </div>
            </div>

            <div className="order-4 lg:order-none mt-[12px] lg:mt-0 flex h-auto lg:min-h-[251px] w-full min-w-0 flex-col gap-[25px] px-0 lg:px-[16px] py-[8px]">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex min-h-[40px] w-full min-w-0 items-center gap-[8px] rounded-[8px] bg-[#8F6182] px-[8px] py-[4px]"
                >
                  <BenefitIcon />

                  <span className="h-auto w-full min-w-0 text-[14px] md:text-[18px] font-semibold leading-[150%] tracking-[0] text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
