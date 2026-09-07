import BrandLogo from "./BrandLogo";
import { Nunito } from "next/font/google";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterOffices from "./FooterOffices";
import FooterCopyright from "./FooterCopyright";

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Footer() {
  return (
    <footer className={`${nunito.className} flex h-auto w-full min-w-0 rotate-0 flex-col gap-[20px] bg-[var(--shades-purple-selection-purple-100,#11040E)] px-[24px] md:px-[32px] lg:px-[64px] py-[32px] opacity-100`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_0.6fr_1fr] gap-[24px] md:gap-[32px] h-auto w-full min-w-0 rotate-0 justify-between py-[20px] opacity-100">
        <div className="flex h-auto w-full min-w-0 rotate-0 flex-col gap-[24px] opacity-100">
          <div className="flex h-[104px] items-start pt-[4px] md:h-[72.60689544677734px] md:items-center md:pt-0"><BrandLogo footer /></div>
          <p className="h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0] md:tracking-[0.03em] text-[#F8F8F8] opacity-100">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
          </p>
          <FooterSocialLinks />
        </div>
        <FooterLinkColumn title="What We Do" frameClass="h-auto w-full min-w-0 gap-[16px]" headingClass="h-[27px] w-[124px] leading-[100%]" listClass="h-auto w-full min-w-0" items={[
          "Sustainability Services", "Strategy Planning and Implementation", "Tech Talent Solutions", "Training and Development", "IT Consulting Services", "Social Impact", "Talent Recruitment",
        ]} />
        <FooterLinkColumn title="Company" frameClass="h-auto w-[120px] gap-[17px]" headingClass="h-[20px] w-[88px] leading-[20px]" listClass="h-auto w-[120px]" items={[
          "About", "Jobs", "Projects", "Our Founder", "Business Model", "The Team", "Contact Us", "Blog", "FAQs", "Testimonials",
        ]} />
        <FooterLinkColumn title="Solution" frameClass="h-auto w-[240px] gap-[10px]" headingClass="h-[27px] w-[79px] leading-[100%]" listClass="h-auto w-[240px]" items={[
          "Tobams Group Academy", "Help a Tech Talent", "Campus Ambassadors Program", "Join Our Platform", "Pricing", "Book a Consultation", "Join Our Slack Community",
        ]} />
      </div>
      <FooterOffices />
      <div aria-hidden="true" className="relative h-0 w-full min-w-0 shrink-0 -rotate-180 opacity-[0.12] before:absolute before:inset-x-0 before:top-[-0.5px] before:border-t before:border-[var(--shades-purple-selection-purple-10,#DDD0DA)] before:content-['']" />
      <FooterCopyright />
    </footer>
  );
}
