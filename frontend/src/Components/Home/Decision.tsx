// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Button } from "stories/button/Button";

const Decision = () => (
  <section className="flex rounded-3xl overflow-hidden items-center border border-borderPrimary/5 gap-10 drop-shadow-2xl min-h-[600px] mt-16 shadow-xl mx-5">
    <div className="max-w-72 flex flex-col gap-6 ml-10 my-10">
      {/* Title H2 */}
      <Title
        primary={false}
        label="The decision is in your hands"
        className="drop-shadow-2xl max-w-64"
      />

      {/* Content */}
      <p className="text-base">
        Discover how our product can transform your financial life. You can
        maximize value and minimize costs. you have to invest time and save
        money.
      </p>
    </div>

    <div className="relative bg-firstSection bg-center bg-no-repeat bg-fixed bg-cover overflow-hidden w-full h-full min-h-[600px]">
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
