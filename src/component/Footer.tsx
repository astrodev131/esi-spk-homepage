import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="pt-[80px]">
      <div className="sm:px-[78px] px-[38px] py-10 md:pb:10 pb-20 md:pb-12">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="-mt-10 md:flex-row lg:flex-col flex lg:w-5/12 w-12/12 flex-col justify-start gap-4 items-start">
            <div className="flex items-center gap-2 w-[100px] mb-6">
              <Image
                src="/logo.d373024f.png"
                alt="Kaito Logo"
                width={100}
                height={20}
                className="h-[20px] w-[100px] object-contain md:h-auto md:w-auto"
              />
            </div>
            <h3 className="lg:block hidden font-semibold mb-4">Contact Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 1024 1024"
                  width="14px"
                  height="14px"
                  cursor="pointer"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    d="M700.416 204.8h100.51584l-219.5456 261.28384L839.68 821.61664h-202.21952l-158.39232-215.6544L297.7792 821.6576H197.26336l234.82368-279.47008L184.32 204.8h207.38048l143.1552 197.09952L700.45696 204.8z m-35.2256 554.1888h55.7056L361.39008 264.15104H301.6704l363.52 494.7968z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 1024 1024"
                  width="14px"
                  height="14px"
                  cursor="pointer"
                  className="w-6 h-6 md:w-8 md:h-8"
                  data-sentry-element="svg"
                  data-sentry-source-file="IconIconTelegram.tsx"
                  data-sentry-component="IconIconTelegram"
                  style={{ display: "block" }}
                >
                  <path
                    d="M796.50816 239.0016a70.0416 70.0416 0 0 0-47.96416-20.8896 70.4512 70.4512 0 0 0-27.11552 5.48864L144.50688 469.64736a34.6112 34.6112 0 0 0-16.384 13.68064 33.792 33.792 0 0 0-5.16096 20.56192v22.24128a33.83296 33.83296 0 0 0 6.144 21.0944c4.3008 6.18496 10.60864 10.81344 17.85856 13.1072l149.79072 49.31584 45.17888 150.20032c3.03104 10.52672 8.88832 20.0704 16.95744 27.60704 8.06912 7.53664 18.0224 12.77952 28.91776 15.1552 4.13696 0.53248 8.35584 0.53248 12.4928 0a60.6208 60.6208 0 0 0 41.3696-16.384l55.25504-51.36384 107.02848 83.1488a70.16448 70.16448 0 0 0 73.3184 7.53664l11.4688-5.81632c9.8304-4.9152 18.35008-12.0832 24.90368-20.80768 6.5536-8.68352 11.01824-18.80064 12.98432-29.4912l91.42272-465.38752a71.14752 71.14752 0 0 0-21.54496-65.04448z m-120.95488 522.24a20.0704 20.0704 0 0 1-10.4448 14.00832l-11.4688 5.81632a16.1792 16.1792 0 0 1-7.29088 1.72032 16.13824 16.13824 0 0 1-10.07616-3.76832l-130.6624-102.64576a17.2032 17.2032 0 0 0-22.56896 0l-77.16864 71.51616a9.13408 9.13408 0 0 1-4.87424 1.72032v-120.832a17.2032 17.2032 0 0 1 5.57056-12.65664c110.87872-102.64576 177.23392-160.1536 216.84224-193.00352a12.65664 12.65664 0 0 0 3.4816-13.7216 10.97728 10.97728 0 0 0-2.78528-4.096 12.20608 12.20608 0 0 0-14.58176-3.39968l-262.7584 163.2256a17.6128 17.6128 0 0 1-14.90944 0l-156.75392-52.67456L740.5568 270.82752a13.76256 13.76256 0 0 1 6.22592 0 18.30912 18.30912 0 0 1 13.23008 6.144 21.46304 21.46304 0 0 1 5.57056 18.8416l-90.03008 465.42848z"
                    fill="currentColor"
                    data-sentry-element="path"
                    data-sentry-source-file="IconIconTelegram.tsx"
                  ></path>
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 1024 1024"
                  width="14px"
                  height="14px"
                  cursor="pointer"
                  className="w-6 h-6 md:w-8 md:h-8"
                  data-sentry-element="svg"
                  data-sentry-source-file="IconIconDiscord.tsx"
                  data-sentry-component="IconIconDiscord"
                  style={{ display: "block" }}
                >
                  <path
                    d="M795.8528 267.63264a698.24512 698.24512 0 0 0-166.7072-49.43872 2.58048 2.58048 0 0 0-2.70336 1.2288c-7.168 12.20608-15.1552 28.18048-20.72576 40.7552a651.8784 651.8784 0 0 0-187.31008 0 405.58592 405.58592 0 0 0-21.0944-40.79616 2.6624 2.6624 0 0 0-2.6624-1.2288 696.32 696.32 0 0 0-166.7072 49.47968 2.37568 2.37568 0 0 0-1.14688 0.90112C120.58624 420.2496 91.50464 568.23808 105.79968 714.3424a2.6624 2.6624 0 0 0 1.06496 1.8432A691.85536 691.85536 0 0 0 311.41888 815.104a2.70336 2.70336 0 0 0 2.8672-0.90112c15.7696-20.56192 29.81888-42.27072 41.86112-65.1264 0.69632-1.31072 0-2.8672-1.4336-3.39968a457.07264 457.07264 0 0 1-63.8976-29.12256 2.4576 2.4576 0 0 1-0.28672-4.17792c4.3008-3.072 8.6016-6.26688 12.6976-9.50272a2.62144 2.62144 0 0 1 2.6624-0.36864c134.06208 58.5728 279.22432 58.5728 411.68896 0a2.62144 2.62144 0 0 1 2.70336 0.32768c4.096 3.23584 8.35584 6.47168 12.6976 9.54368a2.4576 2.4576 0 0 1-0.2048 4.17792c-20.43904 11.38688-41.65632 21.01248-63.93856 29.0816a2.4576 2.4576 0 0 0-1.39264 3.4816c12.288 22.77376 26.33728 44.48256 41.7792 65.04448 0.65536 0.86016 1.8432 1.2288 2.8672 0.94208a689.64352 689.64352 0 0 0 204.92288-98.87744 2.49856 2.49856 0 0 0 1.06496-1.80224c17.08032-168.96-28.63104-315.76064-121.11872-445.8496a2.048 2.048 0 0 0-1.06496-0.94208zM376.17664 625.41824c-40.3456 0-73.60512-35.47136-73.60512-78.97088 0-43.49952 32.60416-78.92992 73.60512-78.92992 41.3696 0 74.26048 35.71712 73.64608 78.92992 0 43.54048-32.60416 78.97088-73.64608 78.97088z m272.22016 0c-40.38656 0-73.60512-35.47136-73.60512-78.97088 0-43.49952 32.60416-78.92992 73.60512-78.92992 41.32864 0 74.26048 35.71712 73.60512 78.92992 0 43.54048-32.27648 78.97088-73.60512 78.97088z"
                    fill="currentColor"
                    data-sentry-element="path"
                    data-sentry-source-file="IconIconDiscord.tsx"
                  ></path>
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 1024 1024"
                  width="14px"
                  height="14px"
                  cursor="pointer"
                  className="w-6 h-6 md:w-8 md:h-8"
                  data-sentry-element="svg"
                  data-sentry-source-file="IconIconLinkedin.tsx"
                  data-sentry-component="IconIconLinkedin"
                  style={{ display: "block" }}
                >
                  <path
                    d="M880.64 190.464v628.81792a54.19008 54.19008 0 0 1-54.19008 54.23104H197.59104A54.23104 54.23104 0 0 1 143.36 819.28192V190.42304a54.23104 54.23104 0 0 1 54.23104-54.19008h628.85888A54.19008 54.19008 0 0 1 880.64 190.42304zM360.20224 418.07872H251.78112v346.9312h108.42112v-346.9312z m9.74848-119.27552a62.464 62.464 0 0 0-62.01344-62.8736h-1.92512a62.8736 62.8736 0 1 0 0 125.7472 62.464 62.464 0 0 0 63.93856-60.90752v-1.96608z m402.2272 255.46752c0-104.32512-66.3552-144.87552-132.25984-144.87552a123.57632 123.57632 0 0 0-109.69088 55.95136h-3.03104v-47.26784H425.24672v346.9312h108.42112v-184.5248a72.00768 72.00768 0 0 1 65.08544-77.6192h4.096c34.48832 0 60.08832 21.7088 60.08832 76.30848v185.83552h108.42112l0.8192-210.7392z"
                    fill="currentColor"
                    data-sentry-element="path"
                    data-sentry-source-file="IconIconLinkedin.tsx"
                  ></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex xl:w-[720px] w-full mt-5 justify-between flex-wrap gap-4">
            <div className="w-1/3 sm:w-1/5">
              <h3 className="font-semibold mb-4 text-[16px]">Product</h3>
              <ul className="space-y-4">
                {["Portal", "API", "Yaps"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3 sm:w-1/5">
              <h3 className="font-semibold mb-4 text-[16px]">Resources</h3>
              <ul className="space-y-4">
                {["EthCC"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3 mt-10 sm:mt-0 sm:w-1/5">
              <h3 className="font-semibold text-[16px] mb-4">Pricing Plan</h3>
              <ul className="space-y-4">
                {["Pricing Plan"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3  mt-10 sm:mt-0 sm:w-1/5">
              <h3 className="font-semibold  text-[16px] mb-4">Company</h3>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Careers",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm font-normal text-white sm:text-base text-opacity-60">
          <p>© 2024 Kaito. All rights reserved.</p>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 mx-auto z-10 px-6 pt-2 pb-4 text-center bg-gray-800 md:hidden backdrop-blur-xl"
        style={{ backgroundColor: "#0d0f12" }}
      >
        <div className="flex flex-col justify-center  items-center gap-1">
          <button
            className={`px-4 py-1 text-black rounded w-full disabled:bg-gray-400`}
            style={{
              backgroundImage:
                "linear-gradient(90.41deg, #32FFDC 8.08%, #33FFFF 93.22%)",
            }}
          >
            <div className="font-bold">Contact Sales</div>
          </button>
          <div className="text-gray-400 text-[12px]">
            Or sign up from your computer
          </div>
        </div>
      </div>
    </footer>
  );
}
