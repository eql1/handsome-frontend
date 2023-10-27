import styles from "./styles.module.css";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;

  const container = useRef(null);
  const cursor = useRef(null);
  const cursorText = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.3,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.3,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.05,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.05,
      ease: "power3",
    });

    const moveCursorTextX = gsap.quickTo(cursorText.current, "left", {
      duration: 0.3,
      ease: "power3",
    });
    const moveCursorTextY = gsap.quickTo(cursorText.current, "top", {
      duration: 0.3,
      ease: "power3",
    });

    window.addEventListener("mousemove", (ev) => {
      const { clientX, clientY } = ev;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorTextX(clientX);
      moveCursorTextY(clientY);
    });
  });

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className={styles.modal}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursor}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursorText}
        className={styles.cursorText}
      >
        View
      </motion.div>
    </>
  );
}
