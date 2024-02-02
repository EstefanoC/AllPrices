import React from "react";

// Dependencies
import { Link } from "react-router-dom";

// Components
import { Button } from "../button/Button";
import Nav from "Components/Header/nav";

// Images
const Logo = require("../../assets/images/logo.png");

interface HeaderProps {
  path?: string;
  onCompare: () => void;
}

export const Header = ({ path = "/", onCompare }: HeaderProps) => (
  <header className="w-full bg-primary">
    <div className="storybook-header container mx-auto flex items-center justify-between px-5 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          className="inline-block size-8"
          alt="Logo of PriceAll"
        />
        <h1 className="my-2 inline-block font-bold">All Prices</h1>
      </div>

      {/* Nav */}
      <nav className="flex w-full max-w-80">
        <ul className="flex w-full list-none items-center justify-between gap-5">
          {Nav.map(({ id, label, url }) => (
            <li
              key={id}
              className={`border-b px-3 text-base font-medium transition-all hover:scale-105 hover:border-secondary ${
                url === path
                  ? "scale-105 border-b border-secondary"
                  : "border-transparent"
              }`}
            >
              <Link to={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button */}
      <Button size="medium" onClick={onCompare} label="Compare Prices" />
    </div>
  </header>
);
