// React
import React from "react";

// Component
import News from "Components/Home/News";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import Quotes from "Components/Home/Quotes";
import Welcome from "Components/AboutUs/Welcome";
import Mission from "Components/AboutUs/Mission";

export const About: React.FC = () => (
  <div className="w-full bg-background">
    {/* Header */}
    <Header path="/about" onCompare={() => console.log("click Compare")} />

    {/* Main Content */}
    <main className="w-full">
      {/* First Section */}
      <Welcome />

      {/* Second Section */}
      <Mission />

      {/* Thirty Section */}
      <Quotes />

      {/* Fourth Section */}
      <News />
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
