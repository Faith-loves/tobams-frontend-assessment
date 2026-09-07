import Image from "next/image";

export default function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden aspect-[794/196] ${footer ? "w-[200px] md:w-[188px]" : "ml-[8px] w-[112px] md:ml-0 md:w-[165.71429443359375px]"}`}>
      <Image
        src="/tobams-logo.png"
        alt="Tobams Group"
        width={900}
        height={600}
        priority={!footer}
        className="absolute left-[-6.675063%] top-[-88.77551%] h-auto w-[113.350126%] max-w-none"
      />
    </span>
  );
}
