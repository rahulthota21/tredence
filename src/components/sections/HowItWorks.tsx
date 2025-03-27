"use client";

import React from "react";
import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";
import { MapPinned, SlidersHorizontal, CalendarClock } from "lucide-react";

const steps = [
  {
    icon: <MapPinned size={28} className={styles.stepIcon} />,
    title: "Plan",
    desc: "Choose where you want to go, and when.",
  },
  {
    icon: <SlidersHorizontal size={28} className={styles.stepIcon} />,
    title: "Personalize",
    desc: "Let our AI customize the perfect itinerary for you.",
  },
  {
    icon: <CalendarClock size={28} className={styles.stepIcon} />,
    title: "Book",
    desc: "Save your plan and book all in one place.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={styles.stepCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            {step.icon}
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
