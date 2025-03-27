"use client";

import React from "react";
import styles from "./FeaturesSection.module.css";
import {
  Bot,
  Save,
  ImageIcon,
  LucideMap,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/wrappers/FadeInWhenVisible";

const features = [
  {
    icon: <LucideMap size={28} className={styles.icon} />,
    title: "Smart Trip Planner",
    description: "AI-powered custom trip plans in seconds.",
    link: "#",
    linkText: "Plan Now",
  },
  {
    icon: <ImageIcon size={28} className={styles.icon} />,
    title: "Image-Based Search",
    description: "Upload a picture to explore matching destinations.",
    link: "#",
    linkText: "Try It",
  },
  {
    icon: <Save size={28} className={styles.icon} />,
    title: "Saved Itineraries",
    description: "Your plans auto-saved & synced across devices.",
    link: "#",
    linkText: "View Trips",
  },
  {
    icon: <Bot size={28} className={styles.icon} />,
    title: "Live AI Chat Support",
    description: "Ask anything, get instant trip help 24/7.",
    link: "#",
    linkText: "Chat Now",
  },
];

const FeaturesSection = () => {
  return (
    <FadeInWhenVisible>
      <section className={`${styles.section}`}>
        <h2 className={styles.title}>Features Overview</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <a className={styles.cta} href={feature.link}>
                {feature.linkText} →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default FeaturesSection;
