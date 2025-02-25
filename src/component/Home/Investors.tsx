import Image from "next/image";
import { useRef } from "react";
import useScrollWidth from "../../utils/CustomHook";
export default function Investors() {
  const divRef = useRef<HTMLDivElement>(null);
  const width = useScrollWidth(divRef as React.RefObject<HTMLElement>);
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 mx-auto">
      <div className="flex flex-col items-center justify-center mt-20 md:mt-[110px]">
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
                style={{ width: `${width}px`, maxWidth: "200px" }}
              />
            </h2>
            <div className="flex items-center justify-center">
              <Image
                src="/img/investor2.png"
                alt="Investor Logos"
                width={1200}
                height={400}
                className="w-[1200px] h-auto max-w-full md:max-w-full mt-[26px] sm:mt-[76px] lg:max-w-full xl:max-w-7xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
