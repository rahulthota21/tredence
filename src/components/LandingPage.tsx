"use client";

import React from "react";
import HeroSection from "./sections/SlideShowSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorks from "./sections/HowItWorks";
import WhyChooseUs from "./sections/WhyChooseUsSection";
import CTASection from "./sections/CallToActionSection ";
import FooterSection from "./sections/Footer";
import SectionDivider from "@/components/sections/SectionDivider";

const LandingPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <SectionDivider />
      <FeaturesSection />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
