// React
import React from "react";

// Component
import News from "Components/Home/News";
import Steps from "Components/Home/Steps";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import Banner from "Components/Home/Banner";
import Quotes from "Components/Home/Quotes";
import Decision from "Components/Home/Decision";

export const Home: React.FC = () => (
  <div className="w-full bg-background">
    {/* Header */}
    <Header path="/" onCompare={() => console.log("click Compare")} />

    {/* Main Content */}
    <main className="w-full">
      {/* First Section */}
      <Banner />

      {/* Second Section */}
      <Steps />

      {/* Thirty Section */}
      <Decision />

      {/* Fourth Section */}
      <Quotes />

      {/* Fifth Section */}
      <News />
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
