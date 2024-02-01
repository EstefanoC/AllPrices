import React from "react";

// Dependencies
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./home";
import Store from "./store";
import Error404 from "./error404";

// Styles Toastify
import "react-toastify/dist/ReactToastify.min.css";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="about" element={<Store />} />
      <Route path="contact" element={<Store />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;
