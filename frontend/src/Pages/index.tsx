import React from "react";

// Dependencies
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./home";
import Store from "./store";
import Error404 from "./error404";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
    <Route path="store" element={<Store />} />
  </Routes>
);

export default App;
