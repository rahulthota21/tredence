import React from "react";
import Lottie from "lottie-react";
import travelAnimation from "../assets/animations/cta.json";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-5xl font-bold text-gray-800">Plan Your Perfect Trip</h1>
      <p className="text-lg text-gray-600 mt-4">
        Explore destinations, book accommodations, and create personalized itineraries.
      </p>

      <div className="w-64 mt-6">
        <Lottie animationData={travelAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
