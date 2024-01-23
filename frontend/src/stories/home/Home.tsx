// React
import React from "react";

// Dependencies
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Component
import { Title } from "../title/Title";
import Steps from "Components/Home/Steps";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Input } from "stories/input/Input";
import { Button } from "stories/button/Button";

// Import Swiper styles
import "swiper/css";
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
            <Input placeholder="Compare" name="Compare" type="search" className="!border-none !shadow-none w-full" />
          </label>
          <Button label="Search" size="large" onClick={() => console.log("click to search")} />
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

        <p className="text-lg font-semibold text-secondary">Just follow the following steps to make it effective.</p>

        {/* Content */}
        <div className="my-14 w-full">
          <ul className="list-none flex gap-12 justify-center">
            {Steps.map(({ id, label, content, Icon }) => (
              <li key={id} className="flex flex-col gap-6 items-center">
                <span className="inline-flex items-center gap-6 text-7xl text-center pb-3 border-b border- text-text">
                  {id} <Icon className="text-5xl text-secondary" />
                </span>
                <h3 className="text-2xl text-text font-bold text-center">{label}</h3>
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
          <Title primary={false} label="The decision is in your hands" className="drop-shadow-2xl max-w-64" />

          {/* Content */}
          <p className="text-base">
            Discover how our product can transform your financial life. You can maximize value and minimize costs. you
            have to invest time and save money.
          </p>
        </div>

        <div className="relative bg-firstSection bg-center bg-no-repeat bg-fixed bg-cover overflow-hidden w-full h-full min-h-[600px]">
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <Button label="Just Search" size="large" className="w-fit" onClick={() => console.log("click to search")} />
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className=" flex flex-col gap-6 my-12">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="p-6 w-[500px] h-[500px] [&>*]:flex [&>*]:items-center [&>*]:content-center [&>*:nth-child(odd)]:bg-green [&>*]:bg-red [&>*]:text-center"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
