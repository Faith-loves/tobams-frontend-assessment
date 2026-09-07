"use client";

import { useEffect, useRef, useState } from "react";
import { Nunito } from "next/font/google";
import TestimonialCard from "./TestimonialCard";
import TestimonialArrowButton from "./TestimonialArrowButton";

const testimonials = [
  {
    name: "Aisha Yusuf",
    nameWidthClass: "w-[86px]",
    detailsWidthClass: "w-[140px]",
    role: "Founder, CraftHub NG",
    image: "/testimonial-aisha-yusuf.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    mobileName: "Sarah Johnson",
    mobileRole: "CEO of Tech Innovations Inc.",
    mobileQuote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
  {
    name: "John Davies",
    nameWidthClass: "w-[87px]",
    detailsWidthClass: "w-[278px]",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/testimonial-john-davies.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    nameWidthClass: "w-[146px]",
    detailsWidthClass: "w-[213px]",
    role: "HR Director, FutureTech Solutions",
    image: "/testimonial-chinonso-nwankwo.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Rita Ahmed",
    nameWidthClass: "w-[87px]",
    detailsWidthClass: "w-[238px]",
    role: "Creative Director, ArtInnovate Studios",
    image: "/testimonial-fourth.jpg",
    quote:
      "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
  },
];

const nunito = Nunito({
  subsets: ["latin"],
  weight: "700",
});

export default function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateControls() {
    const row = cardsRef.current;
    if (!row) return;
    setAtStart(row.scrollLeft <= 1);
    setAtEnd(row.scrollLeft + row.clientWidth >= row.scrollWidth - 1);
  }

  useEffect(() => {
    const row = cardsRef.current;
    if (!row) return;
    const observer = new ResizeObserver(() => {
      // Keep a complete card aligned when switching between viewport sizes.
      row.scrollTo({ left: 0, behavior: "instant" });
      updateControls();
    });
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  function moveCards(direction: number) {
    const row = cardsRef.current;
    const card = row?.firstElementChild;
    if (!row || !card) return;
    row.scrollBy({ left: direction * (card.getBoundingClientRect().width + 23), behavior: "instant" });
    updateControls();
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative mx-auto flex w-full max-w-[1440px] rotate-0 flex-col gap-[10px] py-[40px] lg:py-[64px] opacity-100 after:absolute after:inset-x-0 after:bottom-[-0.5px] after:border-b after:border-[#C4C4C44D] after:content-['']"
    >
      <div className="flex w-full min-w-0 rotate-0 flex-col gap-[40px] px-[24px] md:px-[32px] lg:px-[64px] opacity-100">
        <div className="flex w-full min-w-0 rotate-0 flex-col gap-[32px] md:gap-[41px] opacity-100">
          <h2
            id="testimonials-heading"
            className={`${nunito.className} rotate-0 self-center text-[20px] md:text-[36px] lg:text-[40px] font-bold leading-[130%] tracking-[0] text-[var(--Hue-Main-Text,#151515)] opacity-100`}
          >
            Testimonials
          </h2>
          <div
            id="testimonial-cards"
            ref={cardsRef}
            onScroll={updateControls}
            role="region"
            aria-label="Client testimonials"
            aria-live="polite"
            className="flex w-full min-w-0 items-stretch gap-[23px] rotate-0 overflow-hidden opacity-100"
          >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
          </div>
        </div>
        <div className="flex h-[32px] w-full rotate-0 justify-end gap-[12px] opacity-100">
          <TestimonialArrowButton
            direction="left"
            disabled={atStart}
            onClick={() => moveCards(-1)}
          />
          <TestimonialArrowButton
            direction="right"
            disabled={atEnd}
            onClick={() => moveCards(1)}
          />
        </div>
      </div>
    </section>
  );
}
