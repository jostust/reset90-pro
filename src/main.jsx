import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import "./index.css";

import Header from "./components/Header.jsx";
import HeroTop from "./section/HeroTop.jsx";
import MobileBottomBar from "./components/MobileBottomBar.jsx";
import Register from "./pages/Register.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <HeroTop />
      <MobileBottomBar />
    </>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          {/* si más adelante agregas login: <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-white bg-black">
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold">Página no encontrada</div>
                <Link to="/" className="text-[#F7A9B8] underline">Volver al inicio</Link>
              </div>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  );
}

createRoot(document.getElementById("root")).render(<App />);
