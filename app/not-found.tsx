import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.text}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className={styles["btn-link"]}>
        Go Home
      </Link>
    </div>
  );
}
