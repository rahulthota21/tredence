"use client";

import React from "react";
import styles from "./ChatBubble.module.css";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ChatBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className={styles.bubble}
    >
      <span className={styles.tooltip}>Chat with us</span>
      <MessageCircle className={styles.icon} />
    </motion.div>
  );
};

export default ChatBubble;
