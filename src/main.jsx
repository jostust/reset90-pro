import React from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";
import "./index.css";

import Header from "./components/Header.jsx";
import HeroTop from "./section/HeroTop.jsx";           // ojo: carpeta 'section' (singular)
import MobileBottomBar from "./components/MobileBottomBar.jsx";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <HeroTop />
      <MobileBottomBar />
    </LazyMotion>
  );
}

createRoot(document.getElementById("root")).render(<App />);
