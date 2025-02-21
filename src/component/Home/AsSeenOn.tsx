"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import useScrollWidth from "../../utils/CustomHook";
export default function AsSeenOn() {
  const divRef = useRef<HTMLDivElement>(null);
  const width = useScrollWidth(divRef as React.RefObject<HTMLElement>);
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
          <div className="flex mx-auto flex-wrap justify-center gap-4 mt-[76px] w-full max-w-[1200px]">
            {[
              "media_1.png",
              "media_2.png",
              "media_3.png",
              "media_4.png",
              "media_5.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-24 h-14 md:w-56 md:h-32 border border-gray-800 hover:border-[#32ffdc] rounded-[10px] overflow-hidden"
              >
                <Image
                  src={`/img/${src}`}
                  alt={`Media Logo ${index + 1}`}
                  width={1200}
                  height={400}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
