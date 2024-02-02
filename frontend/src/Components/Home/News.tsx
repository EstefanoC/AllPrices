// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

const News = () => (
  <section className="relative mt-24 flex min-h-96 w-full flex-col items-center justify-center gap-2 overflow-hidden py-10 drop-shadow-md">
    <div className="absolute left-0 top-0 z-10 h-full w-full bg-secondary/70" />
    <div className="absolute left-0 top-0 z-0 h-full w-full bg-fifthSection bg-cover bg-center bg-no-repeat" />

    <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-6">
      {/* Title H2 */}
      <Title
        primary={false}
        label="Get all news of PriceAll"
        className="!text-primary drop-shadow-2xl"
      />

      {/* Input Email */}
      <div className="flex w-full max-w-lg gap-0 rounded-3xl bg-primary p-1">
        <label className="d-block h-full w-full">
          <Input
            placeholder="Put your Email"
            name="email"
            type="email"
            className="w-full !border-none !shadow-none"
          />
        </label>
        <Button
          label="Send"
          size="large"
          onClick={() => console.log("click to Send Email")}
        />
      </div>
    </div>
  </section>
);

export default News;
