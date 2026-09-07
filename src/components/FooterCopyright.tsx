const policies = [
  { label: "Terms and Conditions", widthClass: "w-[153px] order-3 lg:order-none" },
  { label: "Privacy Policy", widthClass: "w-[97px]" },
  { label: "Cookies Policy", widthClass: "w-[102px]" },
];

export default function FooterCopyright() {
  return (
    <div className="flex flex-col gap-[20px] lg:flex-row h-auto w-full min-w-0 rotate-0 justify-between font-light tracking-[0] text-[var(--Hue-White,#FFFFFF)] opacity-100">
      <p className="order-2 lg:order-none text-center lg:text-left h-auto w-full min-w-0 rotate-0 text-[14px] md:text-[16px] leading-[24px] opacity-100">
        Copyright ⓒ Tobams Group, 2024. All rights reserved.
      </p>
      <nav aria-label="Legal policies" className="order-1 lg:order-none flex justify-center lg:justify-start flex-wrap h-auto w-full lg:w-auto lg:shrink-0 min-w-0 rotate-0 gap-x-[24px] gap-y-[8px] lg:gap-[40px] opacity-100">
        {policies.map(({ label, widthClass }) => (
          <button
            key={label}
            type="button"
            className={`h-[36px] ${widthClass} shrink-0 whitespace-nowrap rotate-0 text-center lg:text-left text-[14px] md:text-[16px] font-light leading-[36px] tracking-[0] underline decoration-solid decoration-[1px] underline-offset-[0px] opacity-100`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
