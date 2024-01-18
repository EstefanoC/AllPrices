// React
import React from "react";

// Component
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Title } from "../title/Title";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

export const Home: React.FC = () => (
  <div className="w-full">
    {/* Print Header */}
    <Header path="/" onCompare={() => console.log("click Compare")} />

    {/* Print Content */}
    <main className="container">
      {/* First Section Banner */}
      <section className="h-[70vh] flex flex-col gap-12 items-center min-h-40 rounded-3xl bg-banner bg-no-repeat bg-center bg-cover overflow-hidden ml-5 mr-5 p-8">
        {/* Title H1 */}
        <Title
          label="Save your Money"
          className="bg-secondary/15 drop-shadow-2xl rounded-3xl text-shadow px-5 !text-primary text-center py-5"
        />

        {/* Input Search */}
        <div className="bg-primary p-1 rounded-3xl flex gap-0 max-w-xl w-full">
          <label className="w-full h-full d-block">
            <Input placeholder="Compare" name="Compare" type="search" className="!border-none !shadow-none w-full" />
          </label>
          <Button label="Search" size="large" onClick={() => console.log("click to search")} />
        </div>

        {/* Content of Banner */}
        <div className="w-full flex justify-between"></div>
      </section>
    </main>

    {/*  */}
    <section className="storybook-page"></section>

    {/* Footer */}
    <Footer />
  </div>
);
