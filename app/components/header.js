// components/Header.js
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* The logo is also a link to the homepage */}
      <Link href="/" className={styles.logo}>
        My Portfolio
      </Link>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}
