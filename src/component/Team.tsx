import Image from "next/image";

export default function Team() {
  return (
    <section className="pb-6 w-full sm:-pt-[200px] md:-pt-[240px] lg:pt-[40px] pt-[0px]  grayscale lg:-mt-[0px] mt-[0px] sm:-mt-[270px]">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="text-lg font-normal mb-[24px] leading-normal text-center text-white/80 sm:text-xl sm:leading-normal"
          data-sentry-element="unknown"
          data-sentry-source-file="MainBlock.tsx"
        >
          Powering 500+ Investment, Marketing and Growth Teams
        </div>
        <div className="grid sm:grid-cols-5 grid-cols-4 md:grid-cols-8 gap-4">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={`/img/w=256&q=100 (${i}).webp`}
                alt="Investor Logos"
                width={136}
                height={40}
                className="w-[136px] h-[40px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
