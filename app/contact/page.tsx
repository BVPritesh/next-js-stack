import HeroSection from "../components/hero-section/hero-section";
import ContactUs from "../components/contact-us-section/contact-us-section";

export const metadata = {
  title: "Contact Us | Next JS Stack",
  description: "Get in touch with our team for questions or support.",
};

export default function ContactPage() {
  return (
    <>
        <HeroSection
            heroContainerFull={false}
            heroTitle="Contact Us"
            heroDescription="Have questions or want to work together? We&apos;d love to hear from you.
            Reach out using the details below or send us a message."
            heroInputBox={false}
            heroCardDetail={false}
        />
        
        <ContactUs />
    </>
  );
}
