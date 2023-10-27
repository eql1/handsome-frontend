"use client";
import { React, useState } from "react";
import styles from "./styles.module.scss";
import Nav from "./nav/index";
import { AnimatePresence } from "framer-motion";

export default function index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={styles.button}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
