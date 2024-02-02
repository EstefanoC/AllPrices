// React
import React from "react";

// Component
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Error404: React.FC = () => (
  <div className="w-full bg-background">
    {/* Header */}
    <Header path="/" onCompare={() => console.log("click Compare")} />

    {/* Main Content */}
    <main className="w-full">
      <p>Error 404</p>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
