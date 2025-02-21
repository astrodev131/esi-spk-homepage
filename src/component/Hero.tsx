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
              <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
                Kaito API is now available
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                The Ultimate Web3 Information Platform
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl">
                Easily search and track any tickers, topics and narratives
                across thousands of premium Web3 sources, turning terabytes of
                unstructured information into actionable insights and powering
                more informed decision making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="py-2"
                  onClick={() => {
                    // Add your onClick handler logic here
                  }}
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Button>
                {/* <Button
                  onClick={() => {
                    // Add your onClick handler logic here
                  }}
                  className="border-gray-700 hover:bg-gray-800"
                >
                  Contact Sales
                </Button> */}
                <StyledButton
                  onClick={() => {
                    // Add your onClick handler logic here
                  }}
                >
                  Contact Sales
                </StyledButton>
              </div>
            </div>
            <div className="relative flex justify-end aspect-[4/3] w-full">
              <ImageSlider />
            </div>
          </div>
        </div>
        {/* Partners Section - Moved up */}
        <Team></Team>
      </div>
    </main>
  );
}
