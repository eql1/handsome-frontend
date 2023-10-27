import React from "react";
import styles from "./styles.module.css";

export default function index({ index, setModal, title, subtitle }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
