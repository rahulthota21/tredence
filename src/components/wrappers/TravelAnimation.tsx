"use client"; // 👈 Ensures this runs only on the client

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import travelAnimation from "../../assets/animations/cta.json";

const TravelAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration error

  return <Lottie animationData={travelAnimation} loop={true} style={{ width: "100%", height: "300px" }} />;
};

export default TravelAnimation;
