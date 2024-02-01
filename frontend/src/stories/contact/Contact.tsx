// React
import React from "react";

// Component
import News from "Components/Home/News";
import Map from "Components/Contact/Map";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import Info from "Components/Contact/Info";
import Quotes from "Components/Home/Quotes";

export const Contact: React.FC = () => (
  <div className="w-full bg-background">
    {/* Header */}
    <Header path="/about" onCompare={() => console.log("click Compare")} />

    {/* Main Content */}
    <main className="container">
      {/* First Section */}
      <Info />

      {/* Second Section */}
      <Map />

      {/* Thirty Section */}
      <Quotes />

      {/* Fourth Section */}
      <News />
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
