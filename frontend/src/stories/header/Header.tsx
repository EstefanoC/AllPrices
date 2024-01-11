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
  <header className="bg-primary container">
    <div className="flex px-5 py-4 items-center justify-between storybook-header">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <img src={Logo} className="size-8 inline-block" alt="Logo of PriceAll" />
        <h1 className="font-bold my-2 inline-block">All Prices</h1>
      </div>

      {/* Nav */}
      <nav className="flex max-w-80 w-full">
        <ul className="list-none flex items-center justify-between gap-5 w-full">
          {Nav.map(({ id, label, url }) => (
            <li
              key={id}
              className={`px-3 text-base font-medium border-b transition-all hover:border-secondary hover:scale-105 ${
                url === path ? "border-b border-secondary scale-105" : "border-transparent"
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
