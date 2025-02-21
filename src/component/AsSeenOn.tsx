"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
export default function AsSeenOn() {
  const [width, setWidth] = useState(10);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const newWidth = Math.min(
          200,
          Math.max(10, 200 * (1 - rect.top / windowHeight))
        );
        setWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pt-12 md:pt-[30px]">
      <div className="space-y-12 md:space-y-24">
        <div className="px-4">
          <h2 className="text-white text-[20px] mx-auto md:text-[40px] font-semibold">
            <div className="mx-auto text-center">As Seen on</div>
            <div
              ref={divRef}
              className="h-[2px] bg-[#5eead4] mb-5 mx-auto mt-4 transition-all duration-300"
              style={{ width: `${width}px`, maxWidth: "200px" }}
            />
          </h2>
          <div className="flex mx-auto flex-wrap justify-between gap-4 mt-[76px] w-full max-w-[1200px]">
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
  );
}
