"use client";

import { ReactNode } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const FontWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={urbanist.className}>{children}</div>;
};

export default FontWrapper;
