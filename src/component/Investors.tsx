import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Investors() {
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
    <section className="w-full px-4 md:px-8 lg:px-16 mx-auto">
      <div className="flex flex-col items-center justify-center mt-20 md:mt-10">
        <div className="space-y-12 md:space-y-24">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16">
              Backed by Premier Investors
              <div
                ref={divRef}
                className="h-1 bg-[#5eead4] mx-auto mt-4 transition-all duration-300"
                style={{ width: `${width}px`, maxWidth: "600px" }}
              />
            </h2>
            <div className="flex items-center justify-center">
              <Image
                src="/img/investor2.png"
                alt="Investor Logos"
                width={1200}
                height={400}
                className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Investors Section */}
      <div className="py-12 md:py-24">
        <div className="space-y-12 md:space-y-24">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16">
              As Seen On
              <div
                ref={divRef}
                className="h-1 bg-[#5eead4] mx-auto mt-4 transition-all duration-300"
                style={{ width: `${width}px`, maxWidth: "600px" }}
              />
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="w-24 h-14 md:w-56 md:h-32 hover:border-cyan-400 hover:border-2 rounded-lg overflow-hidden">
                <Image
                  src="/img/media_1.png"
                  alt="Media Logo 1"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 hover:border-cyan-400 hover:border-2 rounded-lg overflow-hidden">
                <Image
                  src="/img/media_2.png"
                  alt="Media Logo 2"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 hover:border-cyan-400 hover:border-2 rounded-lg overflow-hidden">
                <Image
                  src="/img/media_3.png"
                  alt="Media Logo 3"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 hover:border-cyan-400 hover:border-2 rounded-lg overflow-hidden">
                <Image
                  src="/img/media_4.png"
                  alt="Media Logo 4"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 hover:border-cyan-400 hover:border-2 rounded-lg overflow-hidden">
                <Image
                  src="/img/media_5.png"
                  alt="Media Logo 5"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
