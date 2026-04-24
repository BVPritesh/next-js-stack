"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import SiteLogo from "../../assets/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">
            <Image src={SiteLogo} alt="Site Logo" width={100} height={50} />
          </Link>
        </div>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/get-in-touch" className={styles.navLink}>
            Get it touch
          </Link>
        </nav>

        <button
          className={`${styles.hamburgerBtn} ${open ? styles.hamburgerBtnOpen : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggle}
          type="button"
        >
          <span className={styles.hamburgerIcon} aria-hidden>
            {open ? "✕" : "☰"}
          </span>
        </button>

      </div>
    </header>
  );
}
