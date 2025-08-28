// app/components/Hero.js
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Your Name</h1>
        <p className={styles.subtitle}>
          Im a Web Developer specializing in creating modern web applications.
        </p>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
}
