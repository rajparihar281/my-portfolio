// app/components/Projects.js
import styles from "./Projects.module.css";

// We'll keep our project data right here for now.
// An array of objects, where each object is a project.
const projectsData = [
  {
    id: 1,
    title: "Project One",
    description:
      "A brief description of the first project, highlighting the technologies used and its purpose.",
    link: "#", // The '#' is a placeholder link
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "This project solves a real-world problem by doing X, Y, and Z. It was built with Next.js and React.",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A third project to show the breadth of my skills. This one focused on a clean user interface.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {/* Here we "map" over our projectsData array.
          For each project object in the array, we create a div (a card).
          The "key={project.id}" is crucial for React to keep track of each item.
        */}
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.projectLink}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
