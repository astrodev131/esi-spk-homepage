import { Button, StyledButton } from "./Button";
import { ImageSlider } from "./Slider";
import Team from "./Team";

export default function Hero() {
  return (
    <main
      className="w-full"
      style={{
        background:
          "linear-gradient(0deg, rgba(13, 15, 18, 0.70) 0%, rgba(13, 15, 18, 0.70) 100%), linear-gradient(155deg, rgba(13, 15, 18, 0.00) 6.05%, rgba(13, 15, 18, 0.80) 80.5%), radial-gradient(64.76% 70.93% at 70.38% 25.91%, rgba(77, 255, 225, 0.18) 0%, rgba(20, 217, 184, 0.18) 54.6%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(100deg, rgba(16, 38, 34, 0.40) 2.32%, rgba(13, 15, 18, 0.40) 54.79%), linear-gradient(82deg, #010101 11.74%, #102622 75.67%)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-top">
            <div className="space-y-6">
              <div className="inline-block border border-transparent hover:border-[#33FFFF] rounded-full text-gray-400 text-[16px] bg-white/10 px-4 py-1 text-sm">
                <div className="flex justify-between items-center  hover:cursor-pointer">
                  <span>Kaito API is now available</span>
                  <span className="ml-2 text-[#33FFFF] block sm:hidden group-hover:block">
                    →
                  </span>
                </div>
              </div>
              <h1 className="text-[40px] sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight">
                The Ultimate Web3 Information Platform
              </h1>
              <p className="text-[16px] sm:text-[18px]  text-[#ffffffcc] max-w-[512px]">
                Easily search and track any tickers, topics and narratives
                across thousands of premium Web3 sources, turning terabytes of
                unstructured information into actionable insights and powering
                more informed decision making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="py-2" onClick={() => {}}>
                  Get Started
                  <span className="ml-2">→</span>
                </Button>

                <StyledButton onClick={() => {}}>Contact Sales</StyledButton>
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
