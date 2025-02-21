import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ProductHightlight() {
  const [width, setWidth] = useState(10);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const newWidth = Math.min(
          300,
          Math.max(10, 300 * (1 - rect.top / windowHeight))
        );
        setWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="py-12 md:py-24 relative w-full"
      style={{
        backgroundImage: "url('/product_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              style={{ width: `${width}px`, maxWidth: "600px" }}
            />
          </h2>
        </div>
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/img/product_show.png"
              alt="Kaito Dashboard Features"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="space-y-12 order-1 mt-6 lg:order-2">
            <FeatureItem
              icon="/img/investor_tip_1.png"
              title="Instant Insights"
              description="Separate the signal from the noise"
            />
            <FeatureItem
              icon="/img/investor_tip_2.png"
              title="Improve Time to Decision"
              description="Reduce wasted time on manual research"
            />
            <FeatureItem
              icon="/img/investor_tip_3.png"
              title="Build Conviction"
              description="Avoid blind spots and understand market trends"
            />
            <FeatureItem
              icon="/img/investor_tip_4.png"
              title="Next-Gen AI Capabilities"
              description="Let AI work for you"
            />
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
        <div className="h-12 w-12">
          <Image src={icon} alt="Investor Logos" width={50} height={50} />
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
