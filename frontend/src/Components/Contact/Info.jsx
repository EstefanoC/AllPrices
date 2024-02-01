// React
import React from "react";

// Dependencies
import { toast } from "react-toastify";

// Storybook
import { Title } from "stories/title/Title";

// Icon
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Info = () => {
  const handleClipboard = () => {
    navigator.clipboard
      .writeText("Calle Sucre, Caracas 1060, Distrito Capital, Venezuela")
      .then(() => {
        toast.info("Copy is successfully in clipboard");
      });
  };

  return (
    <section className="mx-5 my-10 flex flex-col items-center justify-between gap-6">
      {/* Header */}
      <header className="flex w-full items-center justify-between gap-6">
        <div className="flex w-full flex-col gap-2">
          <strong className="text-base font-black text-secondary">
            Contact In Any Media
          </strong>
          {/* Title H2 */}
          <Title
            label="More information"
            className="!my-0 max-w-4xl capitalize drop-shadow-2xl"
          />
        </div>
      </header>

      {/* Info Content */}
      <ul className="my-8 flex list-none gap-4">
        {/* Address */}
        <li
          className="flex w-full max-w-96 cursor-pointer items-center gap-4 border border-borderPrimary bg-secondary p-4 shadow-xl transition-all hover:scale-105 [&:hover>svg]:bg-borderPrimary"
          onClick={handleClipboard}
        >
          <FaMapMarkerAlt className="min-h-14 min-w-14 rounded-full bg-background/20 p-4 text-6xl text-primary transition-all" />
          <div className="flex flex-col gap-4 text-primary">
            <h2>Address:</h2>
            <p>Calle Sucre, Caracas 1060, Distrito Capital, Venezuela</p>
          </div>
        </li>

        {/* Email */}
        <li className="flex w-full max-w-96 cursor-pointer items-center gap-4 border border-borderPrimary bg-secondary p-4 shadow-xl transition-all hover:scale-105 [&:hover>svg]:bg-borderPrimary">
          <MdOutlineEmail className="min-h-14 min-w-14 rounded-full bg-background/20 p-4 text-6xl text-primary transition-all" />
          <div className="flex flex-col gap-4 text-primary">
            <h2>Email:</h2>
            <a href="mailto:estefano.jesus6@gmail.com?Subject=Quisiera%20contactarme%20contigo">
              PriceAll@Support.com
            </a>
          </div>
        </li>

        {/* Phone */}
        <li className="flex w-full max-w-96 cursor-pointer items-center gap-4 border border-borderPrimary bg-secondary p-4 shadow-xl transition-all hover:scale-105 [&:hover>svg]:bg-borderPrimary">
          <FaPhoneAlt className="min-h-14 min-w-14 rounded-full bg-background/20 p-4 text-6xl text-primary transition-all" />
          <div className="flex flex-col gap-4 text-primary">
            <h2>Phone:</h2>
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Info;
