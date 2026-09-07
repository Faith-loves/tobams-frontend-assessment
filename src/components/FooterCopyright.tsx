const policies = [
  { label: "Terms and Conditions", widthClass: "w-[153px] order-3 lg:order-none" },
  { label: "Privacy Policy", widthClass: "w-[97px]" },
  { label: "Cookies Policy", widthClass: "w-[102px]" },
];

export default function FooterCopyright() {
  return (
    <div className="flex flex-col gap-[20px] lg:flex-row w-full justify-between font-light tracking-[0] text-[var(--Hue-White,#FFFFFF)]">
      <p className="order-2 lg:order-none text-center lg:text-left w-full text-[14px] md:text-[16px] leading-[24px]">
        Copyright ⓒ Tobams Group, 2024. All rights reserved.
      </p>
      <nav aria-label="Legal policies" className="order-1 lg:order-none flex justify-center lg:justify-start flex-wrap w-full lg:w-auto lg:shrink-0 gap-x-[24px] gap-y-[8px] lg:gap-[40px]">
        {policies.map(({ label, widthClass }) => (
          <button
            key={label}
            type="button"
            className={`h-[36px] ${widthClass} shrink-0 whitespace-nowrap text-center lg:text-left text-[14px] md:text-[16px] font-light leading-[36px] tracking-[0] underline decoration-solid decoration-[1px] underline-offset-[0px]`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
