import { Button, StyledButton } from "./Button";
import { useEffect, useRef, useState } from "react";
export default function GetStarted() {
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
      className="w-full pt-10 pb-24 px-6 flex justify-center md:pt-20 md:pb-48"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0d0f12, rgba(13, 15, 18, .3), rgba(13, 15, 18, .2)), url(/contact_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-full max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-white text-[20px] md:text-[40px] font-semibold">
          Get Started Today
          <div
            ref={divRef}
            className="h-[2px] bg-[#5eead4] mx-auto mt-4 transition-all duration-300"
            style={{ width: `${width}px`, maxWidth: "600px" }}
          />
        </h2>
        <p className="md:w-[634px] md:mt-[48px] mt-[32px] text-center text-white/60 text-sm md:text-[18px] font-normal leading-[21px] md:leading-[27px]">
          Focus on what matters and make smarter, faster decisions with Kaito.
          Stop getting lost in the sea of the information in Web3.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="py-2 ml-auto" onClick={() => {}}>
            Sign Up Now
          </Button>
          <StyledButton className="ml-[5px]" onClick={() => {}}>
            Contact Sales
          </StyledButton>
        </div>
      </div>
    </section>
  );
}
