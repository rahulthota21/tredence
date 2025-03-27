"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Brand or Logo */}
      <Link href="/" className={styles.brand}>
        Travel Planner
      </Link>

      {/* Navigation Links */}
      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="#features" className={styles.link}>Features</Link>
        <Link href="#contact" className={styles.link}>Contact</Link>
        <Link href="/sign-in" className={styles.link}>Sign In</Link>
      </div>

      {/* Footer Copyright */}
      <div className={styles.copy}>
        © {new Date().getFullYear()} Travel Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
