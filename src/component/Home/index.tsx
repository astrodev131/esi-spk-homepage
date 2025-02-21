import type React from "react";
import Header from "../Header";
import Hero from "./Hero";
import ProductHightlight from "./ProductHightlight";
import Investors from "./Investors";
import GetStarted from "./GetStarted";
import Footer from "../Footer";
import AsSeenOn from "./AsSeenOn";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <Header />
      <Hero />
      <ProductHightlight />
      <Investors />
      <AsSeenOn />
      <GetStarted />
      <Footer />
    </div>
  );
}
