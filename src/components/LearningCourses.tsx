const courses = ["Business Analysis", "Design Thinking", "Effective Communication", "Entrepreneurship", "Career Development", "Business Model"];

export default function LearningCourses() {
  return (
    <div className="flex flex-col gap-[12px]">
      <h3 className="text-[16px] font-bold leading-[150%] text-[#571244] md:text-[18px]">Some of our courses include:</h3>
      <ul className="grid grid-cols-1 gap-x-[12px] gap-y-[12px] pl-[20px] text-[14px] leading-[150%] text-[#151515] sm:grid-cols-2 md:text-[16px] xl:grid-cols-3">
        {courses.map(course => <li key={course} className="list-disc">{course}</li>)}
      </ul>
    </div>
  );
}
