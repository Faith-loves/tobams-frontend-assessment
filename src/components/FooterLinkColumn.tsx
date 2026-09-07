type FooterLinkColumnProps = {
  title: string;
  frameClass: string;
  headingClass: string;
  listClass: string;
  items: string[];
};

export default function FooterLinkColumn({ title, frameClass, headingClass, listClass, items }: FooterLinkColumnProps) {
  return (
    <nav aria-label={title} className={`flex flex-col ${frameClass}`}>
      <h2 className={`text-[20px] font-bold tracking-[0] text-[var(--Hue-White,#FFFFFF)] ${headingClass}`}>{title}</h2>
      <ul className={`flex flex-col gap-[12px] ${listClass}`}>
        {items.map((item) => (
          <li key={item} className="min-h-[24px]">
            <button type="button" className="min-h-[24px] whitespace-normal text-left text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0] md:tracking-[0.03em] text-[var(--Hue-White,#FFFFFF)]">{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
