import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../animation";

export default function index({ data }) {
  return (
    <motion.div
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.navLink}
      custom={data.index}
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
}
