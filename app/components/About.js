// app/components/About.js
import styles from "./About.module.css";

const skills = ["JavaScript", "React", "Next.js", "Node.js", "CSS", "HTML"];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h2>About Me</h2>
          <p>
            Hello! Im a passionate App developer with a knack for creating
            clean, efficient, and user-friendly mobile applications. My journey
            into code started with a simple Hello, World! and has grown into a
            full-fledged passion for building things on the internet.
          </p>
          <p>
            When Im not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying a good cup of
            coffee.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h3>My Skills</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
