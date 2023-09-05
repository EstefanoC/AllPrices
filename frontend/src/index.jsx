import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Dependencies
import { BrowserRouter } from "react-router-dom";

// Pages
import Routes from "./Pages/index";

// Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
