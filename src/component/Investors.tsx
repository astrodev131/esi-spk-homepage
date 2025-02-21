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
            <h2 className="text-white text-[20px] mx-auto md:text-[40px] font-semibold">
              <div className="mx-auto text-center">
                {" "}
                Backed by Premier Investors
              </div>
              <div
                ref={divRef}
                className="h-[2px] bg-[#5eead4] mb-5 mx-auto mt-4 transition-all duration-300"
                style={{ width: `${width}px`, maxWidth: "600px" }}
              />
            </h2>
            <div className="flex items-center justify-center">
              <Image
                src="/img/investor2.png"
                alt="Investor Logos"
                width={1200}
                height={400}
                className="w-full h-auto max-w-full md:max-w-full lg:max-w-full xl:max-w-7xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Investors Section */}
      <div className="py-12 md:py-24">
        <div className="space-y-12 md:space-y-24">
          <div>
            <h2 className="text-white text-[20px] mx-auto md:text-[40px] font-semibold">
              <div className="mx-auto text-center">As Seen On</div>
              <div
                ref={divRef}
                className="h-[2px] bg-[#5eead4] mb-5 mx-auto mt-4 transition-all duration-300"
                style={{ width: `${width}px`, maxWidth: "600px" }}
              />
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden">
                <Image
                  src="/img/media_1.png"
                  alt="Media Logo 1"
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden">
                <Image
                  src="/img/media_2.png"
                  alt="Media Logo 2"
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden">
                <Image
                  src="/img/media_3.png"
                  alt="Media Logo 3"
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden">
                <Image
                  src="/img/media_4.png"
                  alt="Media Logo 4"
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden">
                <Image
                  src="/img/media_5.png"
                  alt="Media Logo 5"
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
