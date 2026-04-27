import AccordionSection, { AccordionItem } from "../components/accordion-section/accordion-section";
import HeroSection from "../components/hero-section/hero-section";
import TestimonialSection from "../components/testimonial-section/testimonial-section";

export const metadata = {
  title: "About Us | Next JS Stack",
  description: "Learn more about our mission, values, and team.",
};

// Replace with your actual image imports
import HrImage1    from "../assets/portrait_1.webp";
import HrImage2    from "../assets/portrait_2.webp";
import HrImage3    from "../assets/portrait_3.webp";
import HrImage4    from "../assets/portrait_4.webp";
 
// ── Define your accordion data ──────────────────────────────────────────────
 
const hrFeatures: AccordionItem[] = [
  {
    id: 1,
    number: "01.",
    title: "Workforce Optimization Suite",
    description:
      "Designed to streamline the recruitment process, this solution offers features such as applicant tracking, resume parsing, and candidate evaluation tools.",
    image: HrImage1,
    imageAlt: "Workforce optimization dashboard showing recruitment pipeline",
  },
  {
    id: 2,
    number: "02.",
    title: "Compliance & Risk Management System",
    description:
      "Stay ahead of regulatory requirements with automated compliance tracking, audit trails, and real-time risk alerts tailored for your industry.",
    image: HrImage2,
    imageAlt: "Compliance management interface with risk indicators",
  },
  {
    id: 3,
    number: "03.",
    title: "Employee Engagement Toolkit",
    description:
      "Boost morale and retention with pulse surveys, peer recognition tools, and data-driven insights into team sentiment and performance.",
    image: HrImage3,
    imageAlt: "Employee engagement survey and analytics screen",
  },
  {
    id: 4,
    number: "04.",
    title: "Talent Acquisition Platform",
    description:
      "Find, attract, and onboard top talent faster with AI-powered job matching, branded career pages, and a seamless candidate experience.",
    image: HrImage4,
    imageAlt: "Talent acquisition funnel with candidate profiles",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        heroContainerFull={false}
        heroTitle="Our Story"
        heroDescription="Streamline HR processes and empower your team with our products. Effortlessly manage employee data, and more."
        heroInputBox={false}
        heroCardDetail={false}
      />

       <AccordionSection
        heading="Discover the Power of HR Management SaaS"
        subheading="Our product is designed to help you streamline HR processes and empower your team. Here are some of the key features:"
        items={hrFeatures}
        imagePanelBg="#F9C89B"   // peach — change to any color or remove for default
      />

      <TestimonialSection/>
    </>
  );
}
