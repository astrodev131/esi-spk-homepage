import Image from "next/image";

export default function Team() {
  return (
    <section
      className="pb-24 w-full sm:-mt-[200px] md:-mt-[240px] lg:mt-20 mt-20  grayscale"
      style={{
        backgroundImage: "url('/logo_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-normal leading-normal text-center text-white/80 sm:text-xl sm:leading-normal">
          Powering 500+ Investment, Marketing and Growth Teams
        </h2>
        <div className="grid sm:grid-cols-5 grid-cols-4 md:grid-cols-8 gap-4 py-10">
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
