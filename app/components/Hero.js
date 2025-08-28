// app/components/Hero.js
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Raj Parihar</h1>
        <p className={styles.subtitle}>
          Im a Flutter Developer specializing in creating modern Mobile applications.
        </p>
        <a href="#projects" className={styles.ctaButton}>
          View My Work
        </a>
      </div>
    </section>
  );
}
