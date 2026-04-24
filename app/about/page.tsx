import Link from "next/link";

export const metadata = {
  title: "About Us | Next JS Stack",
  description: "Learn more about our mission, values, and team.",
};

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our site. We build modern digital experiences using Next.js and
          focus on delivering performant, accessible, and beautiful interfaces.
        </p>
        <p>
          Our team is passionate about user-centered design and clean development
          practices. We help businesses turn ideas into products that users love.
        </p>
        <div className="page-actions">
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
