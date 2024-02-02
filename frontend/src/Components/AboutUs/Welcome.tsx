// React
import React from "react";

// Dependencies
import ReactCurvedText from "react-curved-text";

// Storybook
import { Title } from "stories/title/Title";

// Icon
import { FaMedal } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsFillFastForwardFill } from "react-icons/bs";

// Image
const Banner = require("../../assets/images/AboutUs.jpg");

const Welcome = () => (
  <section className="container mx-auto my-10 flex flex-col items-center justify-between gap-6">
    {/* Header */}
    <header className="flex w-full items-center justify-between gap-6">
      <div className="flex w-full flex-col gap-2">
        <strong className="text-base font-black text-secondary">
          ALL OF US
        </strong>
        {/* Title H2 */}
        <Title
          label="Learn more about us"
          className="!my-0 max-w-[80%] capitalize drop-shadow-2xl"
        />
      </div>

      <div className="flex items-center">
        <div className="relative rounded-full border-2 border-secondary drop-shadow-lg">
          <ReactCurvedText
            reversed
            width="200"
            height="200"
            cx="100"
            cy="100"
            rx="100"
            ry="100"
            startOffset="0"
            tspanProps={{ dy: "20" }}
            textProps={{ style: { fontSize: "23" } }}
            textPathProps={{ className: "fill-secondary" }}
            svgProps={{ className: "animate-[spin_15s_linear_infinite]" }}
            text="Save your money - Stay with us - We help you - Trust in us -"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease_infinite] rounded-full border-2 border-secondary p-6">
            <FaMoneyBillWave className="text-8xl text-secondary" />
          </div>
        </div>
      </div>
    </header>

    {/* Content */}
    <div className="flex items-end justify-between gap-6">
      <div className="flex w-2/5 flex-col gap-4">
        <ul className="mb-4 flex list-none flex-col gap-4">
          <li className="flex w-full items-center gap-4">
            <BsFillFastForwardFill className="text-xl text-secondary" />
            <p className="text-base font-extrabold text-text">Faster To Use</p>
          </li>
          <li className="flex w-full items-center gap-4">
            <TbFreeRights className="text-xl text-secondary" />
            <p className="text-base font-extrabold text-text">Is Free</p>
          </li>
          <li className="flex w-full items-center gap-4">
            <FaMedal className="text-xl text-secondary" />
            <p className="text-base font-extrabold text-text">Best Option</p>
          </li>
        </ul>

        <p className="text-base text-text">
          Do you want to save money? Our service is the solution. Take advantage
          of our service and watch your savings grow.
        </p>

        <p className="text-base text-text">
          Join the thousands of customers who are already saving with our
          service and transform your economy with our savings service, with our
          service, saving money has never been easier also, save money
          effortlessly with our innovative service.
        </p>
      </div>

      <div className="relative h-full w-3/5">
        <div className="absolute -left-28 -top-10 h-48 w-48 overflow-hidden rounded-3xl bg-AboutUs bg-cover bg-no-repeat p-2">
          <div className="flex h-full w-full flex-col items-start justify-center rounded-3xl bg-background p-4">
            <div className="flex bg-AboutUs bg-cover bg-clip-text bg-no-repeat">
              <span className="text-7xl text-transparent">10+</span>
            </div>

            <p className="ml-2 text-2xl font-semibold text-secondary">
              Years of <span>Experience</span>
            </p>
          </div>
        </div>
        <img
          src={Banner}
          alt="About Us PriceAll"
          className="h-full w-full overflow-hidden rounded-3xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default Welcome;
