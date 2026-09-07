type TestimonialArrowButtonProps = {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
};

export default function TestimonialArrowButton({
  direction,
  disabled,
  onClick,
}: TestimonialArrowButtonProps) {
  const isRight = direction === "right";

  return (
    <button
      type="button"
      aria-label={isRight ? "Next testimonials" : "Previous testimonials"}
      aria-controls="testimonial-cards"
      disabled={disabled}
      onClick={onClick}
      className={`relative h-[32px] w-[32px] rounded-[8px] bg-[#F043541A] ${isRight ? "-rotate-180" : ""}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 10.37066650390625 16.972000122070312"
        fill="currentColor"
        className={`absolute top-[7.51px] h-[16.972000122070312px] w-[10.37066650390625px] text-[var(--Hue-Secondary,#EF4353)] ${isRight ? "right-[10.96px]" : "left-[10.67px]"}`}
      >
        <path d="M10.37066650390625 1.884666442871094 8.486000061035156 0 0 8.486000061035156 8.486000061035156 16.972000122070312 10.37066650390625 15.087333679199219 3.769332885742188 8.486000061035156Z" />
      </svg>
    </button>
  );
}
