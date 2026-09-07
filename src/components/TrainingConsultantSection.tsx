import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

const benefits = [
  ["Expert-Led Learning", "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."],
  ["Comprehensive Curriculum", "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."],
  ["Interactive Workshops", "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."],
  ["Global Recognition", "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."],
] as const;

export default function TrainingConsultantSection() {
  return (
    <section aria-label="Training the Consultant" className="mx-auto w-full max-w-[1440px] py-[24px] md:py-[40px]">
      <div className="bg-[#5712441A] px-[24px] py-[24px] md:px-[32px] md:py-[48px] lg:px-[64px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[24px] md:gap-[20px]">
            <div className="flex flex-col gap-[16px] md:gap-[12px]">
              <h2 className={`${nunito.className} text-[24px] font-semibold leading-[130%] text-[var(--Hue-Primary,#571244)] md:text-[36px] lg:text-[40px]`}>
                Training The Consultant
              </h2>
              <p className="text-[16px] font-semibold leading-[150%] text-[var(--Hue-Primary,#571244)] md:text-[18px]">
                Maximise Your Potential as a Certified Trainer:
              </p>
            </div>
            <p className="text-[14px] leading-[150%] text-[var(--Hue-Main-Text,#151515)] md:text-[18px]">
              <span className="md:hidden">With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.</span>
              <span className="hidden md:inline">With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.</span>
            </p>
            <div className="grid grid-cols-1 gap-[24px] rounded-[8px] bg-[var(--Hue-Primary,#571244)] p-[24px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[20px]">
              {benefits.map(([title, text]) => (
                <article key={title} className="flex flex-col gap-[16px] md:gap-[12px]">
                  <h3 className="text-[16px] font-semibold leading-[150%] text-white md:text-[18px] md:font-bold">{title}</h3>
                  <p className="text-[14px] leading-[150%] text-white md:text-[18px]">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <button type="button" className="flex h-[48px] w-[173px] items-center justify-center gap-[8px] rounded-[4px] bg-[var(--Hue-Primary,#571244)] px-[24px] py-[10.5px]">
            <span className="text-[14px] font-semibold leading-[150%] text-white md:text-[18px]">Learn More</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[24px] w-[24px] text-white">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
