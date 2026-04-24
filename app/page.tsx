
import CompaniesSection from "./components/companies-section/companies-section";
import HeroSection from "./components/hero-section/hero-section";
import ImageGridSection from "./components/image-grid-section/image-grid-section";
import WorkforceSection from "./components/workforce-section/workforce-section";
import "./home.css";

export default function Home() {
  return (
    <>
      <HeroSection
        heroContainerFull={false}
        heroTitle="HR Management with Superior Hiring Solutions"
        heroDescription="Streamline HR processes and empower your team with our product. Effortlessly manage employee data, and more in one centralized platform."
        heroInputBox={true}
        heroCardDetail={true}
      />

      <ImageGridSection />

      <CompaniesSection />

      <WorkforceSection />
    </>
  );
}
