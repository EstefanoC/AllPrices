import React from "react";

// Dependencies
import { Link } from "react-router-dom";

// Components
import Nav from "Components/Header/nav";

// Images
const Logo = require("../../assets/images/logo.png");

interface HeaderProps {
  path?: string;
}

export const Footer = ({ path = "/" }: HeaderProps) => (
  <footer className="bg-primary container">
    <div className="flex px-10 py-4 items-center justify-between">
      {/* Logo */}
      <div className="flex gap-2 items-center w-full max-w-80">
        <img src={Logo} className="size-8 inline-block" alt="Logo of PriceAll" />
        <h1 className="font-bold my-2 inline-block">All Prices</h1>
      </div>

      {/* Info */}
      <div className="flex items-center gap-2 w-full text-center">
        <p className="m-0 font-medium w-full">Compare all Prices that you want</p>
      </div>

      {/* Nav */}
      <nav className="flex max-w-80 w-full">
        <ul className="list-none flex flex-col items-center justify-between gap-5 w-full">
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
    </div>

    {/* Copyright */}
    <div className="flex">
      <small className="text-center d-block w-full bg-secondary py-5 font-bold text-primary">
        All rights reserved Copyright 2024 Estefano Chacón
      </small>
    </div>
  </footer>
);
