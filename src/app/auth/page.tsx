"use client";

import { useState } from "react";
import { SignIn, SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AuthPage() {
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-24 ${urbanist.className}`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        {mode === "sign-in" ? "Welcome Back 👋" : "Join Margadarsh 🚀"}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
        {mode === "sign-in"
          ? "Sign in to continue your journey."
          : "Create an account to start planning your trip."}
      </p>

      {mode === "sign-in" ? (
        <SignIn
          path="/auth"
          routing="path"
          signUpUrl="/auth"
          appearance={{
            elements: {
              card: "shadow-xl border border-gray-200 dark:border-gray-800",
            },
          }}
        />
      ) : (
        <SignUp
          path="/auth"
          routing="path"
          signInUrl="/auth"
          appearance={{
            elements: {
              card: "shadow-xl border border-gray-200 dark:border-gray-800",
            },
          }}
        />
      )}

      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
        {mode === "sign-in" ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("sign-up")}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("sign-in")}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </motion.section>
  );
}
  