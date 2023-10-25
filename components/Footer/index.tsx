import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[360px] text-center lg:mb-16">
                <Link href="/" className="mb-1 inline-block">
                  <Image src="images/logo/logo-2.svg" alt="logo" className="w-full dark:hidden" width={140} height={30} />
                  <Image src="images/logo/logo.svg" alt="logo" className="hidden w-full dark:block" width={140} height={30} />
                </Link>
                <p className="mb-9 text-2xl font-medium leading-relaxed text-body-color">Desenvolvedor Front-End</p>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/gatoledo1"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#CED3F6" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>
                  <a href="https://github.com/gatoledo1" aria-label="social-link" className="mr-6 text-[#CED3F6] hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#CED3F6" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white"></p>
          </div>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
