"use client";

import React from "react";
import styles from "./WhyChooseUsSection.module.css";

const metrics = [
  { stat: "200K+", label: "Happy Travelers" },
  { stat: "4.9★", label: "User Rating" },
  { stat: "120+", label: "Countries Covered" },
  { stat: "99.99%", label: "Data Security Uptime" },
];

const WhyChooseUsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <p className={styles.subtitle}>
        Trusted by thousands of users to make travel planning effortless.
      </p>
      <div className={styles.grid}>
        {metrics.map((item, idx) => (
          <div className={styles.block} key={idx}>
            <div className={styles.stat}>{item.stat}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
