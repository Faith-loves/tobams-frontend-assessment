const navItems = [
  { label: "About", dropdown: true },
  { label: "What We Do", dropdown: true, frame: "w-[127px]", text: "w-[107px]" },
  { label: "Jobs", dropdown: true, frame: "w-[53.33333206176758px] gap-[10px]", text: "w-[35px]" },
  { label: "Projects", frame: "w-[65px] gap-[10px]", text: "w-[65px]" },
  { label: "TG Academy", frame: "w-[104px] gap-[10px]", text: "w-[104px]" },
  { label: "Strategic Partnership", frame: "w-[171px] gap-[10px]", text: "w-[171px]" },
  { label: "Pricing", frame: "w-[56px] gap-[10px]", text: "w-[56px]" },
  { label: "Book a Consultation", frame: "w-[163px] gap-[10px]", text: "w-[163px]" },
];

export default function SecondaryNavbar({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"} className={mobile ? "w-full bg-white" : "hidden w-full bg-white md:block"}>
      <div className={mobile ? "w-full" : "mx-auto flex min-h-[69px] w-full max-w-[1440px] items-center px-[24px] md:px-[32px] lg:px-[64px] py-[20px]"}>
        <ul className="mx-auto flex h-auto w-full max-w-full flex-wrap items-center gap-x-[16px] gap-y-[12px] lg:w-[1045.3333740234375px] lg:gap-x-[32px]">
          {navItems.map((item) => (
            <li key={item.label} className={`${item.label === "About" ? "h-[29px]" : "h-[27px]"} shrink-0`}>
              {item.label === "About" ? (
                <a
                  href="#"
                  className="relative flex h-[29px] w-[82px] rotate-0 items-center pb-[2px] text-[var(--Hue-Primary,#571244)] opacity-100 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-[var(--Hue-Primary,#571244)] after:content-['']"
                >
                  <span className="h-[27px] w-[62px] rotate-0 text-center text-[18px] font-semibold leading-[150%] tracking-[0] opacity-100">About</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-[20px] w-[20px] shrink-0 opacity-100"
                  >
                    <path d="m5.83 8.33 4.166666507720951 4.166666507720951 4.166666507720951-4.166666507720951" />
                  </svg>
                </a>
              ) : (
              <a
                href="#"
                className={`flex h-[27px] ${item.frame} rotate-0 items-center text-[18px] font-normal leading-[150%] tracking-[0] text-[var(--Hue-Main-Text,#151515)] opacity-100`}
              >
                <span className={`h-[27px] ${item.text} shrink-0 rotate-0 text-center opacity-100`}>{item.label}</span>

                {item.dropdown && (
                  <svg
                    aria-hidden="true"
                    viewBox={item.label === "Jobs" ? "0 0 8.333333015441902 4.166666507720951" : "0 0 20 20"}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={item.label === "Jobs"
                      ? "h-[4.166666507720951px] w-[8.333333015441902px] shrink-0 overflow-visible opacity-100"
                      : "h-[20px] w-[20px] shrink-0 text-[var(--Hue-Primary,#571244)] opacity-100"}
                  >
                    <path d={item.label === "Jobs"
                      ? "m0 0 4.166666507720951 4.166666507720951 4.166666507720951-4.166666507720951"
                      : "m5.83 8.33 4.166666507720951 4.166666507720951 4.166666507720951-4.166666507720951"} />
                  </svg>
                )}
              </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
