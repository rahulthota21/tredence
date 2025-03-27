import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-2 rounded-lg shadow-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
