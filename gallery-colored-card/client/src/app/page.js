"use client";
import styles from "./page.module.css";
import gsap from "gsap";

const projects = [
  {
    title: "New York",
    color: "#F06318",
  },
  {
    title: "San Francisco",
    color: "#DCF018",
  },
  {
    title: "San Antonio",
    color: "#18F0E8",
  },
  {
    title: "Nashville",
    color: "#8C0CF0",
  },
  {
    title: "Houston",
    color: "#F0183C",
  },
  {
    title: "New Orleans",
    color: "#F0BA18",
  },
  {
    title: "Oklahoma City",
    color: "#0C34F0",
  },
  {
    title: "Detroit",
    color: "#0CBCF0",
  },
  {
    title: "Indianapolis",
    color: "#91F018",
  },
];

export default function Home() {
  const handleMouseEnter = (e, color) => {
    gsap.to(e.target, { backgroundColor: color, top: "-2vw", duration: 0.4 });
  };

  const handleMouseLeave = (e, color) => {
    gsap.to(e.target, { backgroundColor: "white", top: "0vw", duration: 0.4 });
  };

  return (
    <main className={styles.main}>
      {projects.map((project, index) => {
        return (
          <div
            onMouseEnter={(e) => {
              handleMouseEnter(e, project.color);
            }}
            onMouseLeave={(e) => {
              handleMouseLeave(e, project.color);
            }}
            key={index}
          >
            <p>{project.title}</p>
          </div>
        );
      })}
    </main>
  );
}
