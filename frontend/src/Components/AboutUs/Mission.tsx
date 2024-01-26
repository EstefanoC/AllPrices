// React
import React from "react";

// Storybook
import { Title } from "stories/title/Title";

// Ts
import { IconType } from "react-icons";

// Icon
import { FaChartPie } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { HiStatusOnline } from "react-icons/hi";
import { MdPerson, MdBusinessCenter } from "react-icons/md";

// Image
const Mission1 = require("../../assets/images/Mission1.jpg");
const Mission2 = require("../../assets/images/Mission2.jpg");
const Mission3 = require("../../assets/images/Mission3.jpg");
const Mission4 = require("../../assets/images/Mission4.jpg");

type MissionType = {
  id: number;
  title: string;
  content: string;
  image: string;
  Icon: IconType;
};

const MissionTab: MissionType[] = [
  {
    id: 1,
    title: "Natural Person",
    content:
      "Looking to make the most of your hard-earned money? Our service is perfect for everyday individuals seeking to improve all financial.",
    image: Mission1,
    Icon: MdPerson,
  },
  {
    id: 2,
    title: "Entrepreneur",
    content:
      "Why us? Our service offers a suite of financial management tools designed to help startups and small businesses like yours thrive.",
    image: Mission2,
    Icon: MdBusinessCenter,
  },
  {
    id: 3,
    title: "Online Sellers",
    content:
      "Are you an online seller looking to maximize your profits and streamline your operations? Our service is designed with you in mind.",
    image: Mission3,
    Icon: HiStatusOnline,
  },
  {
    id: 4,
    title: "Marketing",
    content:
      "In the world of marketing and data analytics, information is power. Our service provides comprehensive data analysis tools",
    image: Mission4,
    Icon: FaChartPie,
  },
];

const Mission = () => (
  <section className="mx-5 mb-6 mt-24 flex items-center justify-between gap-6">
    {/* Left Content */}
    <div className="grid w-3/5 grid-cols-2 grid-rows-2 gap-4">
      {MissionTab.map(({ id, title, content, Icon, image }) => (
        <article
          className="shadow-card relative flex max-h-72 min-h-72 w-full items-end justify-end rounded-2xl [&:hover>div:first-child]:-translate-y-12 [&:hover>div:last-child>div]:translate-y-0"
          key={id}
        >
          <div className="absolute right-2 top-0 h-12 w-min translate-y-3 rounded-t-2xl bg-white p-2 transition-all duration-1000">
            <Icon className="text-4xl text-secondary" />
          </div>

          <img
            src={image}
            alt={title}
            className="absolute left-0 top-0 z-0 h-full w-full rounded-2xl object-cover"
          />

          <div className="relative overflow-hidden rounded-b-2xl">
            <div className="relative translate-y-[112px] bg-text/80 transition-all duration-1000">
              <h2 className="z-10 w-full p-2 text-center text-lg font-extrabold text-secondary">
                {title}
              </h2>
              <p className="min-h-[112px] p-4 text-center text-sm text-primary">
                {content}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
    {/* Right Content */}
    <header className="flex h-full w-2/5 flex-col items-end justify-center gap-6">
      {/* Title H2 */}
      <Title
        primary={false}
        label="This we mission"
        className="mb-6 capitalize drop-shadow-2xl"
      />

      <p className="text-end text-base text-text">
        Our service is designed to provide practical, effective solutions for
        saving money. We leverage cutting-edge technology and industry expertise
        to deliver strategies that can help reduce expenses and increase
        savings.
      </p>
      <p className="text-end text-base text-text">
        We are committed to helping our clients navigate their financial journey
        with confidence. By choosing Save Money With Us, you're choosing a
        partner dedicated to your financial success.
      </p>

      <p className="animate-move-x mt-6 inline-flex items-center self-start">
        <IoIosArrowBack className="text-4xl text-secondary" />
        <span className="text-base text-secondary">Look who we help</span>
      </p>
    </header>
  </section>
);

export default Mission;
