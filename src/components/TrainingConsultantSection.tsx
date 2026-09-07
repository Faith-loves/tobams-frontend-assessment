import type { ReactNode } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
});

type TrainingConsultantSectionProps = {
  children?: ReactNode;
};

export default function TrainingConsultantSection({
  children,
}: TrainingConsultantSectionProps) {
  return (
    <section
      aria-label="Training the Consultant"
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-[10px] py-[24px] md:py-[40px] opacity-100"
    >
      <div className="h-auto w-full min-w-0 rotate-0 gap-[10px] bg-[#5712441A] px-[24px] md:px-[32px] lg:px-[64px] py-[24px] md:py-[48px] opacity-100">
        <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[32px] opacity-100">
          <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[24px] md:gap-[20px] opacity-100">
            <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
              <h2
                className={`${nunito.className} h-auto w-full min-w-0 rotate-0 text-[24px] md:text-[36px] lg:text-[40px] font-semibold leading-[130%] tracking-[0] text-[var(--Hue-Primary,#571244)] opacity-100`}
              >
                Training The Consultant
              </h2>
              <p className="h-auto w-full min-w-0 rotate-0 text-[16px] md:text-[18px] font-semibold leading-[150%] tracking-[0] text-[var(--Hue-Primary,#571244)] opacity-100">
                Maximise Your Potential as a Certified Trainer:
              </p>
            </div>
            <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
              <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-Main-Text,#151515)] opacity-100">
                <span className="md:hidden">With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.</span>
                <span className="hidden md:inline">With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.</span>
              </p>
            </div>
            <div className="grid h-auto w-full min-w-0 grid-cols-1 md:grid-cols-2 rotate-0 gap-[24px] md:gap-[20px] rounded-[8px] bg-[var(--Hue-Primary,#571244)] p-[24px] opacity-100">
              <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[24px] md:gap-[20px] opacity-100">
                <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
                  <h3 className="h-[27px] w-[184px] rotate-0 text-[16px] md:text-[18px] font-semibold md:font-bold leading-[150%] tracking-[0] text-[#FFFFFF] opacity-100">
                    Expert-Led Learning
                  </h3>
                  <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                    Gain insight from seasoned professionals in the field as they
                    mentor you through the subtleties of business analysis.
                  </p>
                </div>
                <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
                  <h3 className="h-auto w-full min-w-0 rotate-0 text-[16px] md:text-[18px] font-semibold md:font-bold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                    Comprehensive Curriculum
                  </h3>
                  <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                    Access a robust curriculum that covers fundamental principles and
                    advanced methodologies, ensuring a well-rounded understanding.
                  </p>
                </div>
              </div>
              <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[24px] md:gap-[20px] opacity-100">
                <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
                  <div className="flex h-[27px] w-[207px] rotate-0 gap-[16px] opacity-100">
                    <h3 className="h-[27px] w-[207px] rotate-0 text-[16px] md:text-[18px] font-semibold md:font-bold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                      Interactive Workshops
                    </h3>
                  </div>
                  <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                    Engage in hands-on workshops designed to enhance your training
                    capabilities and provide practical insights.
                  </p>
                </div>
                <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[16px] md:gap-[12px] opacity-100">
                  <div className="flex h-[27px] w-[174px] rotate-0 gap-[16px] opacity-100">
                    <h3 className="h-[27px] w-[174px] rotate-0 text-[16px] md:text-[18px] font-semibold md:font-bold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                      Global Recognition
                    </h3>
                  </div>
                  <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
                    You will attain a globally recognized certification, opening
                    doors to new career opportunities and industry recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex h-[48px] w-[173px] rotate-0 items-center justify-center gap-[8px] rounded-[4px] bg-[var(--Hue-Primary,#571244)] px-[24px] py-[10.5px] opacity-100"
          >
            <span className="h-[27px] w-[93px] rotate-0 text-[14px] md:text-[18px] font-semibold leading-[150%] tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
              Learn More
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-[24px] w-[24px] rotate-0 text-[var(--Hue-White,#FFFFFF)] opacity-100"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </section>
  );
}
