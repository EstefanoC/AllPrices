// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

const News = () => (
  <section className="relative flex flex-col justify-center overflow-hidden drop-shadow-md items-center py-10 gap-2 min-h-96 mt-24">
    <div className="absolute top-0 left-0 w-full h-full bg-secondary/70 z-10" />
    <div className="absolute top-0 left-0 w-full h-full bg-fifthSection bg-no-repeat bg-center bg-cover z-0" />

    <div className="flex flex-col items-center justify-center h-full w-full gap-6 z-10">
      {/* Title H2 */}
      <Title
        primary={false}
        label="Get all news of PriceAll"
        className="drop-shadow-2xl !text-primary"
      />

      {/* Input Email */}
      <div className="bg-primary p-1 rounded-3xl flex gap-0 max-w-lg w-full">
        <label className="w-full h-full d-block">
          <Input
            placeholder="Put your Email"
            name="email"
            type="email"
            className="!border-none !shadow-none w-full"
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
