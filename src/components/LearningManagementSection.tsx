import Image from "next/image";
import { Nunito } from "next/font/google";
import LearnMoreButton from "./LearnMoreButton";
import LearningCourses from "./LearningCourses";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

export default function LearningManagementSection() {
  return (
    <section aria-labelledby="learning-management-heading" className="w-full bg-[#F9F9F9] py-[24px] md:py-[40px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-[24px] bg-[#5712441A] px-[24px] py-[24px] md:px-[32px] lg:grid-cols-[0.825fr_1fr] lg:gap-x-[80px] lg:gap-y-[20px] lg:px-[64px] lg:py-[48px]">
        <h2 id="learning-management-heading" className={`${nunito.className} text-[20px] font-semibold leading-[150%] tracking-[0.03em] text-[#571244] md:text-[36px] lg:col-start-2 lg:row-start-1 lg:text-[40px]`}>
          Learning Management System
        </h2>
        <div className="relative aspect-square w-full overflow-hidden rounded-full lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:aspect-[556.88/568] lg:self-center">
          <Image src="/learning-management.png" alt="Two professionals collaborating on learning and development" fill sizes="(min-width: 1440px) 557px, (min-width: 1024px) 42vw, (min-width: 768px) calc(100vw - 64px), calc(100vw - 48px)" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[24px] rounded-[8px] bg-[#5712441A] p-[24px] lg:col-start-2 lg:row-start-2 lg:gap-[20px]">
          <p className="text-[14px] font-normal leading-[150%] text-[#151515] md:text-[18px]">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
          </p>
          <LearningCourses />
          <LearnMoreButton className="lg:hidden" />
        </div>
        <LearnMoreButton className="hidden lg:col-start-2 lg:row-start-3 lg:mt-[42px] lg:flex" />
      </div>
    </section>
  );
}
