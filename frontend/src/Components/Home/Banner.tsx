// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

const Banner = () => (
  <section className="container mx-auto flex h-[50vh] min-h-[600px] flex-col items-center gap-12 overflow-hidden rounded-3xl bg-banner bg-cover bg-center bg-no-repeat p-8 shadow-xl">
    {/* Title H1 */}
    <Title
      label="Save your Money"
      className="text-shadow rounded-3xl px-5 py-5 text-center !text-primary drop-shadow-2xl text-shadow-title"
    />

    {/* Input Search */}
    <div className="flex w-full max-w-lg gap-0 rounded-3xl bg-primary p-1">
      <label className="d-block h-full w-full">
        <Input
          placeholder="Compare"
          name="Compare"
          type="search"
          className="w-full !border-none !shadow-none"
        />
      </label>
      <Button
        label="Search"
        size="large"
        onClick={() => console.log("click to search")}
      />
    </div>

    {/* Content of Banner */}
    <div className="flex h-full w-full items-end justify-between">
      <p className="w-full max-w-80 text-base text-primary text-shadow-p">
        We believe in the compare the prices. <br />
        We Think in your choice <br />
        We can help in it
      </p>

      <div className="flex gap-6">
        <p className="inline-flex flex-col items-start gap-2 text-base text-primary text-shadow-p">
          <span className="text-5xl">3</span>
          Pages
        </p>

        <p className="inline-flex flex-col items-start gap-2 text-base text-primary text-shadow-p">
          <span className="text-5xl">80</span>
          Countries
        </p>

        <p className="inline-flex flex-col items-start gap-2 text-base text-primary text-shadow-p">
          <span className="text-5xl">1k</span>
          Options
        </p>
      </div>
    </div>
  </section>
);

export default Banner;
