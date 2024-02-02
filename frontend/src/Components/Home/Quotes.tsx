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
  <section className="container mx-auto my-28 flex flex-col gap-6">
    <div className="my-10 ml-10 flex flex-col items-center gap-6">
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
      className="h-full w-full !overflow-visible !p-6 [&_[class*='swiper-button']]:text-secondary [&_[class*='swiper-pagination']>span]:bg-secondary"
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
          <div className="overflow-hidden rounded-3xl border border-borderPrimary bg-primary pr-0 drop-shadow-sm">
            <blockquote className="flex h-full max-h-72 min-h-40 w-full items-center justify-center gap-4">
              <div className="flex h-full min-h-40 w-3/5 flex-col content-between p-6 pr-0">
                <FaQuoteLeft className="text-4xl text-text/30" />
                <p className="my-6 text-base text-text after:relative after:top-3 after:text-4xl after:leading-3 after:text-text/30 after:content-['”']">
                  {content}
                </p>

                <strong className="mt-6 text-lg text-text">{name}</strong>
                <p className="text-sm text-text/80">{location}</p>
              </div>

              <img
                src={image}
                alt={name}
                className="relative h-full min-h-72 w-2/5 select-none object-cover"
              />
            </blockquote>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Quotes;
