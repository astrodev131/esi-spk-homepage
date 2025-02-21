import { Button, StyledButton } from "./Button";
import { ImageSlider } from "./Slider";
import Team from "./Team";

export default function Hero() {
  return (
    <main
      className="w-full px-4 sm:px-6 lg:px-[24px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(13, 15, 18, 0.70) 0%, rgba(13, 15, 18, 0.70) 100%), linear-gradient(155deg, rgba(13, 15, 18, 0.00) 6.05%, rgba(13, 15, 18, 0.80) 80.5%), radial-gradient(64.76% 70.93% at 70.38% 25.91%, rgba(77, 255, 225, 0.18) 0%, rgba(20, 217, 184, 0.18) 54.6%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(100deg, rgba(16, 38, 34, 0.40) 2.32%, rgba(13, 15, 18, 0.40) 54.79%), linear-gradient(82deg, #010101 11.74%, #102622 75.67%)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto pt-16 sm:pt-24 lg:pt-[132px] pb-[60px]">
        <div>
          <div className="grid lg:grid-cols-2 items-top">
            <div className="md:w-[512px] md:h-[436px] mt-6 md:mt-0 space-y-[30px]">
              <div
                className="text-sm hover:animate-tag_hover overflow-hidden flex-nowrap text-white/80 md:text-base pr-[10px] hover:pr-[6px] py-1 inline-flex justify-start items-center gap-[6px] rounded-[25px] border-[0.5px] border-[#2d3338] bg-[rgba(38,42,48,0.6)] hover:border-[#31ffe7] active:bg-[#121417] group cursor-pointer"
                data-sentry-element="unknown"
                data-sentry-component="ApiAvailableTag"
                data-sentry-source-file="MainBlock.tsx"
              >
                <div
                  className="inline-flex shrink-0 pl-[10px]"
                  data-sentry-element="unknown"
                  data-sentry-source-file="MainBlock.tsx"
                >
                  Kaito API is now available
                </div>
                <div
                  className="rotate-[-90deg] group-hover:animate-tag_transition md:group-hover:block md:hidden block md:ml-1"
                  data-sentry-element="unknown"
                  data-sentry-source-file="MainBlock.tsx"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    width="20px"
                    height="20px"
                    style={{ display: "block" }}
                    className="shrink-0 md:animate-bounce md:text-[#31ffe7] text-white/80"
                    data-sentry-element="svg"
                    data-sentry-source-file="IconIconLongDown.tsx"
                    data-sentry-component="IconIconLongDown"
                  >
                    <path
                      d="M554.666667 647.253333l153.173333-152.746666L768 554.666667l-256 256-256-256 60.16-60.16L469.333333 647.253333V213.333333h85.333334v433.92z"
                      fill="currentColor"
                      data-sentry-element="path"
                      data-sentry-source-file="IconIconLongDown.tsx"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className="mt-[30px] text-left text-white text-[40px] md:text-[56px] leading-tight md:leading-tight font-semibold tracking letter-spacitng "
                data-sentry-element="unknown"
                data-sentry-source-file="MainBlock.tsx"
              >
                The Ultimate Web3 Information Platform
              </div>
              <p className="mt-[30px] text-left text-white/80 text-base md:text-lg">
                Easily search and track any tickers, topics and narratives
                across thousands of premium Web3 sources, turning terabytes of
                unstructured information into actionable insights and powering
                more informed decision making.
              </p>
              <div className="flex max-w-[366px] flex-wrap gap-3">
                <Button
                  className="py-3 px-7 w-[170px] h-[52px] flex justify-around items-center"
                  onClick={() => {}}
                >
                  <div className="flex items-center">
                    <div className="flex font-semibold items-center leading-8">
                      Get Started
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <g id="IconLongRight">
                          <path
                            id="arrow_long_right"
                            d="M9.78 7.33333L7.39333 4.94L8.33333 4L12.3333 8L8.33333 12L7.39333 11.06L9.78 8.66667L3 8.66667L3 7.33333L9.78 7.33333Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </Button>

                <StyledButton className="w-[184px] h-[52px]" onClick={() => {}}>
                  Contact Sales
                </StyledButton>
              </div>
            </div>
            <div className="relative flex justify-end aspect-[4/3] w-full">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/logo_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Team></Team>
      </div>
    </main>
  );
}
