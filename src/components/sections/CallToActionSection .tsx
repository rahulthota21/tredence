"use client";

import React from "react";
import styles from "./CallToActionSection.module.css";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <h2 className={styles.heading}>Ready to Plan Your Next Adventure?</h2>
        <p className={styles.subtext}>
          Start creating unforgettable travel memories. Find your destination,
          customize the trip, and go!
        </p>
        <a href="/sign-in" className={styles.button}>
          Plan a Trip →
        </a>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
