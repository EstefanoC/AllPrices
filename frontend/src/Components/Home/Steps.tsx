// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";
import { Button } from "stories/button/Button";

// Ts
import { IconType } from "react-icons";

// Icon
import { FaTrophy } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

type StepsHome = {
  id: number;
  label: string;
  content: string;
  Icon: IconType;
};

export const StepsTabs: StepsHome[] = [
  {
    id: 1,
    label: "Just Search",
    content: "Use our search engine to find your product",
    Icon: FaSearchDollar,
  },
  {
    id: 2,
    label: "Compare",
    content: "Compare prices of all matches",
    Icon: IoGridOutline,
  },
  {
    id: 3,
    label: "Choose one",
    content: "Select between the ones that best suit you",
    Icon: FaTrophy,
  },
];

const Steps = () => (
  <section className="mt-24 min-h-[600px] w-full overflow-hidden bg-primary py-10 drop-shadow-md">
    <div className="container mx-auto flex flex-col items-center gap-2">
      {/* Title H2 */}
      <Title primary={false} label="Is simple" className="drop-shadow-2xl" />

      <p className="text-lg font-semibold text-secondary">
        Just follow the following steps to make it effective.
      </p>

      {/* Content */}
      <div className="my-14 w-full">
        <ul className="flex list-none justify-center gap-12">
          {StepsTabs.map(({ id, label, content, Icon }) => (
            <li key={id} className="flex flex-col items-center gap-6">
              <span className="border- inline-flex items-center gap-6 border-b pb-3 text-center text-7xl text-text">
                {id} <Icon className="text-5xl text-secondary" />
              </span>
              <h3 className="text-center text-2xl font-bold text-text">
                {label}
              </h3>
              <p className="text-border text-center text-base">{content}</p>
            </li>
          ))}
        </ul>
      </div>

      <Button
        label="First Step"
        size="large"
        className="w-3/4 min-w-14"
        onClick={() => console.log("click to search")}
      />
    </div>
  </section>
);

export default Steps;
