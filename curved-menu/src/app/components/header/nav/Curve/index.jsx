import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function index() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q0 ${
    window.innerHeight / 2
  } 100 0`; // M - set the current point (x y), L - draw a line, Q - create a curve, then close
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathAnimation}
        animate="enter"
        exit="exit"
        initial="initial"
      ></motion.path>
    </svg>
  );
}
