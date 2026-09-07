type FooterLinkColumnProps = {
  title: string;
  frameClass: string;
  headingClass: string;
  listClass: string;
  items: string[];
};

export default function FooterLinkColumn({ title, frameClass, headingClass, listClass, items }: FooterLinkColumnProps) {
  return (
    <nav aria-label={title} className={`flex min-w-0 rotate-0 flex-col opacity-100 ${frameClass}`}>
      <h2 className={`rotate-0 text-[20px] font-bold tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100 ${headingClass}`}>{title}</h2>
      <ul className={`flex rotate-0 flex-col gap-[12px] opacity-100 ${listClass}`}>
        {items.map((item) => (
          <li key={item} className="min-h-[24px]">
            <button type="button" className="min-h-[24px] rotate-0 whitespace-normal text-left text-[14px] md:text-[16px] font-normal leading-[150%] tracking-[0] md:tracking-[0.03em] text-[var(--Hue-White,#FFFFFF)] opacity-100">{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
