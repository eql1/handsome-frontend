import React from "react";
import styles from "./styles.module.scss";
import Link from "./Link";
import { menuSlide } from "../animation";
import { motion } from "framer-motion";
import Curve from "./Curve";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>

          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
