import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  quote: string;
  nameWidthClass: string;
  detailsWidthClass: string;
  mobileName?: string;
  mobileRole?: string;
  mobileQuote?: string;
};

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
  nameWidthClass,
  detailsWidthClass,
  mobileName,
  mobileRole,
  mobileQuote,
}: TestimonialCardProps) {
  return (
    <article className="relative flex min-h-[244px] basis-full shrink-0 md:basis-[calc((100%-64px)/2)] lg:basis-[calc((100%-110px)/3)] flex-col gap-[24px] rounded-[8px] md:rounded-[16px] bg-[var(--Hue-White,#FFFFFF)] px-[20px] md:px-[24px] py-[20px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[8px] md:after:rounded-[16px] after:border-l-[2px] after:border-[var(--Hue-Secondary,#EF4353)] after:content-['']">
      <div className="flex min-h-[45px] w-full gap-[16px] xl:gap-[21px]">
        <div className="relative h-[44px] w-[44px] shrink-0 rounded-full">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            width={44}
            height={44}
            className="absolute top-[0.5px] h-[44px] w-[44px] rounded-full"
          />
        </div>
        <div className={`min-h-[45px] max-w-full shrink ${detailsWidthClass}`}>
          <h3 className={`min-h-[24px] max-w-full text-[16px] font-semibold leading-[150%] tracking-[0] text-[var(--Hue-Main-Text,#151515)] ${nameWidthClass}`}>
            <span className={mobileName ? "hidden md:inline" : undefined}>{name}</span>
            {mobileName && <span className="md:hidden">{mobileName}</span>}
          </h3>
          <p className={`min-h-[21px] max-w-full text-[14px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-Subdued,#696969)] ${detailsWidthClass}`}>
            <span className={mobileRole ? "hidden md:inline" : undefined}>{role}</span>
            {mobileRole && <span className="md:hidden">{mobileRole}</span>}
          </p>
        </div>
      </div>
      <p className="w-full text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-Main-Text,#151515)]">
        <span className={mobileQuote ? "hidden md:inline" : undefined}>{quote}</span>
        {mobileQuote && <span className="md:hidden">{mobileQuote}</span>}
      </p>
    </article>
  );
}
