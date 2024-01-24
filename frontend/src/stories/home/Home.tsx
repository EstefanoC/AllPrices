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

// Component
import { Title } from "../title/Title";
import Steps from "Components/Home/Steps";
import Quotes from "Components/Home/Quotes";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

// Icon
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export const Home: React.FC = () => (
  <div className="w-full bg-background">
    {/* Print Header */}
    <Header path="/" onCompare={() => console.log("click Compare")} />

    {/* Print Content */}
    <main className="container">
      {/* First Section Banner */}
      <section className="h-[50vh] flex flex-col gap-12 items-center min-h-[600px] rounded-3xl bg-banner bg-no-repeat bg-center bg-cover overflow-hidden mx-5 p-8 shadow-xl">
        {/* Title H1 */}
        <Title
          label="Save your Money"
          className="text-shadow-title drop-shadow-2xl rounded-3xl text-shadow px-5 !text-primary text-center py-5"
        />

        {/* Input Search */}
        <div className="bg-primary p-1 rounded-3xl flex gap-0 max-w-lg w-full">
          <label className="w-full h-full d-block">
            <Input
              placeholder="Compare"
              name="Compare"
              type="search"
              className="!border-none !shadow-none w-full"
            />
          </label>
          <Button
            label="Search"
            size="large"
            onClick={() => console.log("click to search")}
          />
        </div>

        {/* Content of Banner */}
        <div className="w-full flex justify-between items-end h-full">
          <p className="max-w-80 text-primary w-full text-base text-shadow-p">
            We believe in the compare the prices. <br />
            We Think in your choice <br />
            We can help in it
          </p>

          <div className="flex gap-6">
            <p className="text-base inline-flex text-shadow-p gap-2 flex-col items-start text-primary">
              <span className="text-5xl">3</span>
              Pages
            </p>

            <p className="text-base inline-flex text-shadow-p gap-2 flex-col items-start text-primary">
              <span className="text-5xl">80</span>
              Countries
            </p>

            <p className="text-base inline-flex text-shadow-p gap-2 flex-col items-start text-primary">
              <span className="text-5xl">1k</span>
              Options
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col overflow-hidden bg-primary drop-shadow-md items-center py-10 gap-2 min-h-[600px] mt-24">
        {/* Title H2 */}
        <Title primary={false} label="Is simple" className="drop-shadow-2xl" />

        <p className="text-lg font-semibold text-secondary">
          Just follow the following steps to make it effective.
        </p>

        {/* Content */}
        <div className="my-14 w-full">
          <ul className="list-none flex gap-12 justify-center">
            {Steps.map(({ id, label, content, Icon }) => (
              <li key={id} className="flex flex-col gap-6 items-center">
                <span className="inline-flex items-center gap-6 text-7xl text-center pb-3 border-b border- text-text">
                  {id} <Icon className="text-5xl text-secondary" />
                </span>
                <h3 className="text-2xl text-text font-bold text-center">
                  {label}
                </h3>
                <p className="text-base text-border text-center">{content}</p>
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
      </section>

      {/* Thirty Section */}
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

      {/* Fourth Section */}
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
          {Quotes.map(({ id, name, location, content, image }) => (
            <SwiperSlide key={id} className="p-4">
              <div className="drop-shadow-sm rounded-3xl border-borderPrimary border p-6 bg-primary overflow-hidden pr-0">
                <blockquote className="flex gap-4 items-center justify-center w-full h-full min-h-40 max-h-72">
                  <div className="flex flex-col w-3/5 h-full min-h-40 content-between">
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
                    className="w-2/5 object-cover h-full select-none"
                  />
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Fifth Section */}
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
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
