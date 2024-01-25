// React
import React from "react";

// Dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";

// Storybook
import { Title } from "stories/title/Title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Icon
import { FaQuoteLeft } from "react-icons/fa";

// Image
const Person1 = require("../../assets/images/quotes1.jpg");
const Person2 = require("../../assets/images/quotes2.jpg");
const Person3 = require("../../assets/images/quotes3.jpg");
const Person4 = require("../../assets/images/quotes4.jpg");
const Person5 = require("../../assets/images/quotes5.jpg");
const Person6 = require("../../assets/images/quotes6.jpg");

type QuotesHome = {
  id: number;
  name: string;
  content: string;
  location: string;
  image: string;
};

const QuotesTab: QuotesHome[] = [
  {
    id: 1,
    name: "Angela Nelson",
    location: "South Africa",
    content:
      "Ever since we started using this service, our productivity has increased significantly. It’s truly a game-changer.",
    image: Person1,
  },
  {
    id: 2,
    name: "Everlee Perkins",
    location: "Sweden",
    content:
      "The customer service is exceptional. They’re always there when we need them. We feel valued as a client.",
    image: Person2,
  },
  {
    id: 3,
    name: "Bentley Tyler",
    location: "United State",
    content:
      "Their service is reliable and efficient. It has become an integral part of our daily operations.",
    image: Person3,
  },
  {
    id: 4,
    name: "Martin Fuller",
    location: "Africa",
    content:
      "What sets this service apart is its ease of use. It’s user-friendly and requires minimal training.",
    image: Person4,
  },
  {
    id: 5,
    name: "Ruth Cabrera",
    location: "Venezuela",
    content:
      "We’ve seen a substantial return on investment since integrating this service into our workflow.",
    image: Person5,
  },
  {
    id: 6,
    name: "Ryder Hall",
    location: "North Korea",
    content:
      "This service has not only met but exceeded our expectations. We couldn’t be happier with the results.",
    image: Person6,
  },
];

const Quotes = () => (
  <section className="flex flex-col gap-6 my-28">
    <div className="flex flex-col items-center gap-6 ml-10 my-10">
      {/* Title H2 */}
      <Title
        primary={false}
        label="What people are saying about PriceAll"
        className="drop-shadow-2xl"
      />

      {/* Content */}
      <p className="text-base">experience people love to talk about</p>
    </div>

    <Swiper
      loop
      autoplay={{
        delay: 20000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      navigation
      grabCursor={true}
      slidesPerView={2}
      effect={"creative"}
      pagination={{ clickable: true }}
      modules={[EffectCreative, Autoplay, Navigation, Pagination]}
      className="!p-6 w-full h-full !overflow-visible [&_[class*='swiper-button']]:text-secondary [&_[class*='swiper-pagination']>span]:bg-secondary"
      creativeEffect={{
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
    >
      {QuotesTab.map(({ id, name, location, content, image }) => (
        <SwiperSlide key={id} className="p-4">
          <div className="drop-shadow-sm rounded-3xl border-borderPrimary border bg-primary overflow-hidden pr-0">
            <blockquote className="flex gap-4 items-center justify-center w-full h-full min-h-40 max-h-72">
              <div className="flex flex-col w-3/5 h-full min-h-40 content-between p-6 pr-0">
                <FaQuoteLeft className="text-text/30 text-4xl" />
                <p className="text-base text-text after:content-['”'] after:text-4xl after:leading-3 after:top-3 after:relative after:text-text/30 my-6">
                  {content}
                </p>

                <strong className="text-lg text-text mt-6">{name}</strong>
                <p className="text-sm text-text/80">{location}</p>
              </div>

              <img
                src={image}
                alt={name}
                className="relative w-2/5 object-cover h-full min-h-72 select-none"
              />
            </blockquote>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Quotes;
