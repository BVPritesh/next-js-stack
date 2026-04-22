
import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Hello world</h1>
      <p>Welcome to our Next.js Learning project</p>

      <section className="home-nav-section">
        <h2>Navigation</h2>
        <ul className="nav-links">
          <li>
            <Link href="/style-guide" className="btn btn-primary">
              Style Guide
            </Link>
          </li>
          <li>
            <Link href="/invalid-page" className="btn btn-secondary">
              Test 404 Page
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
