const icons = [
  { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z" },
  { name: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" },
  { name: "X (Twitter)", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z" },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex h-[40px] w-full min-w-0 rotate-0 gap-[20px] opacity-100">
      {icons.map(({ name, path }) => (
        <button key={name} type="button" aria-label={name} className="flex h-[40px] w-[40px] rotate-0 items-center justify-center gap-[10px] rounded-[50px] bg-[var(--Hue-White,#FFFFFF)] p-[10px] opacity-100">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor"><path d={path} /></svg>
        </button>
      ))}
    </div>
  );
}
