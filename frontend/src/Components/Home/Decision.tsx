// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Button } from "stories/button/Button";

const Decision = () => (
  <section className="container mx-auto mt-16 flex min-h-[600px] items-center gap-10 overflow-hidden rounded-3xl border border-borderPrimary/5 shadow-xl drop-shadow-2xl">
    <div className="my-10 ml-10 flex max-w-72 flex-col gap-6">
      {/* Title H2 */}
      <Title
        primary={false}
        label="The decision is in your hands"
        className="max-w-64 drop-shadow-2xl"
      />

      {/* Content */}
      <p className="text-base">
        Discover how our product can transform your financial life. You can
        maximize value and minimize costs. you have to invest time and save
        money.
      </p>
    </div>

    <div className="relative h-full min-h-[600px] w-full overflow-hidden bg-firstSection bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute right-10 top-1/2 -translate-y-1/2">
        <Button
          label="Just Search"
          size="large"
          className="w-fit"
          onClick={() => console.log("click to search")}
        />
      </div>
    </div>
  </section>
);

export default Decision;
