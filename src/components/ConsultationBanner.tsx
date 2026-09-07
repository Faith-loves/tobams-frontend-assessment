import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
});

export default function ConsultationBanner() {
  return (
    <section
      aria-label="Book a consultation"
      className={`${nunito.className} mx-auto flex w-[calc(100%-48px)] max-w-[1134px] flex-col items-center gap-[32px] rounded-[8px] bg-[var(--Hue-Primary,#571244)] px-[32px] md:px-[32px] lg:px-[64px] py-[32px]`}
    >
      <p className="w-full text-center text-[16px] md:text-[20px] font-semibold leading-[150%] tracking-[0.03em] text-[var(--Hue-White,#FFFFFF)]">
        <span className="md:hidden">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
        </span>
        <span className="hidden md:inline">
          Want to accelerate professional growth and development at your organisation?
          <br />
          See how we can help.
        </span>
      </p>
      <button
        type="button"
        className="flex h-[48px] w-[185px] md:w-[214px] items-center justify-center gap-[10px] rounded-[4px] bg-[var(--Hue-White,#FFFFFF)] px-[24px] py-[12px] inset-ring-[1px] inset-ring-[var(--Hue-Primary,#571244)]"
      >
        <span className="h-[22px] w-auto md:w-[166px] whitespace-nowrap text-center text-[14px] md:text-[18px] font-semibold leading-[120%] tracking-[0] text-[var(--Hue-Primary,#571244)]">
          Book a Consultation
        </span>
      </button>
    </section>
  );
}

