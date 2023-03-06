import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import GallaryProvider from "./context/gallaryContext";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/privacy policy/PrivacyPolicy";
import Roadmap from "./pages/roadmap/Roadmap";
import TermsAndCondition from "./pages/terms & condition/TermsAndCondition";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Bg Animation */}
      <div className="bg-animation relative z-10"></div>

      <GallaryProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Routes key={pathname}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/termsandcondition" element={<TermsAndCondition />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
      </GallaryProvider>
    </>
  );
}
