import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import useScrollWidth from "../../utils/CustomHook";

export default function ProductHightlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const width = useScrollWidth(divRef as React.RefObject<HTMLElement>);
  return (
    <section
      className="pt-12 px-4 sm:px-2 md:pt-24 relative w-full sm:h-auto h-[1000px]"
      style={{
        backgroundImage: "url('/product_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:max-w-[1200px] max-[300px] px-10 mx-auto">
        <div className="relative text-center">
          <img
            src="/title_bg.png"
            className="w-full max-w-4xl h-[400px] absolute md:top-[-170px] top-[-170px] left-1/2 transform -translate-x-1/2"
            data-nsfw-filter-status="sfw"
            style={{ visibility: "visible" }}
          />
          <h2 className="text-white text-[20px] md:text-[40px] font-semibold">
            Product Highlight
            <div
              ref={divRef}
              className="h-[2px] bg-[#5eead4] mx-auto mt-4 transition-all duration-300"
              style={{ width: `${width}px`, maxWidth: "200px" }}
            />
          </h2>
        </div>
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 mt-[27px] sm:mt-[87px] justify-center items-center">
          <div className="relative order-2 w-full max-w-[753px] h-[488px] lg:order-1">
            <Image
              src="/img/product_show.png"
              alt="Kaito Dashboard Features"
              width={753}
              height={488}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-11 mt-24 order-1 max-w-[383px] h-[488px] lg:order-2">
            {[
              {
                icon: "/img/investor_tip_1.png",
                title: "Instant Insights",
                description: "Separate the signal from the noise",
              },
              {
                icon: "/img/investor_tip_2.png",
                title: "Improve Time to Decision",
                description: "Reduce wasted time on manual research",
              },
              {
                icon: "/img/investor_tip_3.png",
                title: "Build Conviction",
                description: "Avoid blind spots and understand market trends",
              },
              {
                icon: "/img/investor_tip_4.png",
                title: "Next-Gen AI Capabilities",
                description: "Let AI work for you",
              },
            ].map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0">
        <div className="h-[52px] w-[52px]">
          <Image src={icon} alt="Investor Logos" width={52} height={52} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[16px] sm:text-[18px] text-white">
          {title}
        </h3>
        <p className="font-normal text-[16px] sm:text-[18px] text-[#ffffffb3] text-opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
}
