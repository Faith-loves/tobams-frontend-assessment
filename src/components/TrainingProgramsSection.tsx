import Image from "next/image";
import { Nunito } from "next/font/google";
import { Zap } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

function TrainingIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-[16px] w-[12.444443702697754px] shrink-0 items-center justify-center overflow-visible"
    >
      <Zap
        className="h-[20px] w-[16px] max-w-none shrink-0 fill-[#1D0617] text-[#480F39]"
        strokeWidth={1.52}
      />
    </span>
  );
}

export default function TrainingProgramsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] h-auto w-full min-w-0 flex-col gap-[24px] lg:gap-[120px] rounded-[16px] px-[24px] py-[24px] md:px-[32px] lg:p-[64px]">
        {/* ROW 1 — CORPORATE TRAININGS */}
        <div className="grid h-auto w-full min-w-0 grid-cols-1 lg:grid-cols-2 items-start gap-[24px] lg:gap-[64px]">
          <div className="contents lg:flex h-auto w-full min-w-0 shrink-0 flex-col gap-[21px]">
            <h2 className={`${nunito.className} order-1 lg:order-none h-auto w-full min-w-0 text-[20px] md:text-[36px] lg:text-[40px] font-semibold leading-[150%] tracking-[0.03em] text-[#151515]`}>
              Corporate Trainings
            </h2>

            <div className="order-3 lg:order-none flex h-auto w-full min-w-0 flex-col gap-[24px] lg:gap-[19px]">
              <p className="h-auto w-full min-w-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                Empower your team with our customised Corporate Training programs
                designed to address the unique needs and objectives of your
                organisation. Our expert facilitators work closely with your team
                to deliver tailored learning experiences that align with your
                company&apos;s goals and values.
              </p>

              <ul className="flex h-auto w-full min-w-0 flex-col gap-[6px] md:gap-[10px] px-0 lg:px-[30px] text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                <li className="flex items-center gap-[14px]">
                  <TrainingIcon />
                  <span>Leadership Training</span>
                </li>

                <li className="flex items-center gap-[14px]">
                  <TrainingIcon />
                  <span>Strategic Planning and Implementation</span>
                </li>

                <li className="flex items-center gap-[14px]">
                  <TrainingIcon />
                  <span>Project Management</span>
                </li>

                <li className="flex items-center gap-[14px]">
                  <TrainingIcon />
                  <span>Sustainability Training</span>
                </li>

                <li className="flex items-center gap-[14px]">
                  <TrainingIcon />
                  <span>Customised Training</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-2 lg:order-none relative aspect-[327/229] lg:aspect-[602/346] h-auto w-full min-w-0 shrink-0 overflow-hidden rounded-bl-[12px] rounded-br-[23px] rounded-tl-[56px] rounded-tr-[24px]">
            <Image
              src="/corporate-training.png"
              alt="Corporate training session"
              fill
              sizes="602px"
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 2 — PERSONALISED INDIVIDUAL TRAINING */}
        <div className="grid h-auto w-full min-w-0 grid-cols-1 lg:grid-cols-2 items-start gap-[24px] lg:gap-[81px] pr-[3px]">
          <div className="order-2 lg:order-none relative aspect-[327/240] lg:aspect-[599/378] h-auto w-full min-w-0 shrink-0 overflow-hidden rounded-bl-[8px] rounded-br-[8px] rounded-tl-[33px] rounded-tr-[8px]">
            <Image
              src="/personalised-training.png"
              alt="Personalised individual training session"
              fill
              sizes="599px"
              className="object-cover"
            />
          </div>

          <div className="contents lg:flex h-auto w-full min-w-0 shrink-0 flex-col gap-[21px]">
            <h2 className={`${nunito.className} order-1 lg:order-none h-auto w-full min-w-0 text-[20px] md:text-[36px] lg:text-[40px] font-semibold leading-[150%] tracking-[0.03em] text-[#151515]`}>
              Personalised Individual Training
            </h2>

            <div className="order-3 lg:order-none flex h-auto w-full min-w-0 flex-col gap-[24px] lg:gap-[19px]">
              <p className="h-auto w-full min-w-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                Begin a journey of lifelong learning and professional development
                with Tobams Group&apos;s diverse range of training programs for
                individuals. From technical skills mastery to soft skills
                enhancement, our courses cover a wide spectrum of topics to meet
                the evolving needs of today&apos;s professionals.
              </p>

              <ul className="flex h-auto w-full min-w-0 flex-col gap-[6px] pl-0 lg:pl-[30px] text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Leadership Development
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Soft Skills Development
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Industry Specific Knowledge
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Technical Skills Enhancement
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Time Management and Productivity
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Career Development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 3 — CAPACITY DEVELOPMENT */}
        <div className="grid h-auto w-full min-w-0 grid-cols-1 lg:grid-cols-2 items-start gap-[24px] lg:gap-[64px] pr-[3px]">
          <div className="contents lg:flex h-auto w-full min-w-0 shrink-0 flex-col gap-[21px]">
            <h2 className={`${nunito.className} order-1 lg:order-none h-auto w-full min-w-0 text-[20px] md:text-[36px] lg:text-[40px] font-semibold leading-[150%] tracking-[0.03em] text-[#151515]`}>
              Capacity Development
            </h2>

            <div className="order-3 lg:order-none flex h-auto w-full min-w-0 flex-col gap-[24px] lg:gap-[19px]">
              <p className="h-auto w-full min-w-0 text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                At Tobams Group, we empower individuals and organizations
                through tailored training programs, expert-led workshops, and
                personalized mentorship. We are committed to your success and
                growth. We are dedicated to providing a comprehensive suite of
                benefits designed to foster your development and success:
              </p>

              <ul className="flex h-auto w-full min-w-0 flex-col gap-[6px] pl-0 lg:pl-[30px] text-[14px] md:text-[18px] font-normal leading-[150%] tracking-[0] text-[#696969]">
                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Tailored Training Programs
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Expert-Led Workshops
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Personalized Mentorship
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Technical Skills Enhancement
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Collaborative Learning Environment
                  </span>
                </li>

                <li className="flex min-h-[21px] md:min-h-[27px] items-start gap-[14px]">
                  <TrainingIcon />
                  <span className="whitespace-normal">
                    Ongoing Support and Resources
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-2 lg:order-none relative aspect-[327/232] lg:aspect-[601/405] h-auto w-full min-w-0 shrink-0 overflow-hidden rounded-bl-[8px] rounded-br-[8px] rounded-tl-[40px] rounded-tr-[8px]">
            <Image
              src="/capacity-development.png"
              alt="Capacity development training session"
              fill
              sizes="601px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
