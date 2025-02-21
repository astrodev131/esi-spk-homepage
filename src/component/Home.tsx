import type React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductHightlight from "./ProductHightlight";
import Investors from "./Investors";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white">
      <Header />
      <Hero />
      <ProductHightlight />
      <Investors />
      <GetStarted />
      <Footer />
    </div>
  );
}
