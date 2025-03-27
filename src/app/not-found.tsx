"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Ghost } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      suppressHydrationWarning
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full px-6 py-32 md:py-48 flex flex-col justify-center items-center bg-transparent relative z-10 text-center"
    >
      <div className="max-w-2xl">
        {mounted && (
          <div className="mb-6 flex justify-center">
            <div className="bg-indigo-100 dark:bg-indigo-950 rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
              <Ghost className="text-indigo-600 dark:text-indigo-300" size={42} />
            </div>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-extrabold font-urbanist bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          404 – Page Not Found
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-medium">
          Sorry Jackal, the page you’re looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition rounded-lg shadow-lg"
        >
          Return to Homepage →
        </Link>
      </div>
    </motion.section>
  );
};

export default NotFoundPage;
