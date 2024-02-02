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
  <footer className="w-full bg-primary">
    <div className="container mx-auto flex items-center justify-between px-10 py-4">
      {/* Logo */}
      <div className="flex w-full max-w-80 items-center gap-2">
        <img
          src={Logo}
          className="inline-block size-8"
          alt="Logo of PriceAll"
        />
        <h1 className="my-2 inline-block font-bold">All Prices</h1>
      </div>

      {/* Info */}
      <div className="flex w-full items-center gap-2 text-center">
        <p className="m-0 w-full font-medium">
          Compare all Prices that you want
        </p>
      </div>

      {/* Nav */}
      <nav className="flex w-full max-w-80">
        <ul className="flex w-full list-none flex-col items-center justify-between gap-5">
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
    </div>

    {/* Copyright */}
    <div className="flex">
      <small className="d-block w-full bg-secondary py-5 text-center font-bold text-primary">
        All rights reserved Copyright 2024 Estefano Chacón
      </small>
    </div>
  </footer>
);
