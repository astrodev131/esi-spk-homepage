import { Button, StyledButton } from "./Button";
import { useRef } from "react";
import useScrollWidth from "../../utils/CustomHook";

export default function GetStarted() {
  const divRef = useRef<HTMLDivElement>(null);
  const width = useScrollWidth(divRef as React.RefObject<HTMLElement>);

  return (
    <section
      className="w-full pt-10 pb-24 px-6 flex justify-center md:pt-[76px] md:pb-[188px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0d0f12, rgba(13, 15, 18, .3), rgba(13, 15, 18, .2)), url(/contact_bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-full max-w-5xl mx-auto text-center space-y-[48px]">
        <h2 className="text-white text-[20px] md:text-[40px] font-semibold">
          Get Started Today
          <div
            ref={divRef}
            className="h-[2px] bg-[#5eead4] mx-auto mt-4 transition-all duration-300"
            style={{ width: `${width}px`, maxWidth: "200px" }}
          />
        </h2>
        <p className="md:w-[634px] md:mt-[48px] mt-[32px] text-center text-white/60 text-sm md:text-[18px] font-normal leading-[21px] md:leading-[27px] mx-auto">
          Focus on what matters and make smarter, faster decisions with Kaito.
          Stop getting lost in the sea of the information in Web3.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="w-[167px] h-[52px] flex justify-center items-center"
              onClick={() => {}}
            >
              <div className="flex justify-center items-center">
                <div className="flex font-semibold items-center leading-8">
                  Sign Up Now
                </div>
              </div>
            </Button>

            <StyledButton className="w-[167px] h-[52px]" onClick={() => {}}>
              Contact Sales
            </StyledButton>
          </div>
        </div>
      </div>
    </section>
  );
}
