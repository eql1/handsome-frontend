"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Project from "../components/project";
import Modal from "../components/modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
    subtitle: "Design and development",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    subtitle: "Design and development",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
    subtitle: "Design and development",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
    subtitle: "Design and development",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              setModal={setModal}
              title={project.title}
              subtitle={project.subtitle}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
