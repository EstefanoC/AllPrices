import React from "react";

// Dependencies
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Error404 from "./error404";

// Styles Toastify
import "react-toastify/dist/ReactToastify.min.css";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;
