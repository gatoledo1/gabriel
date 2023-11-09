"use client";

import Image from "next/image";
import SliderComponent from "../Slider";
import { Svgs } from "../Common/Svgs";
import AboutImage from "./ImageTheme";

interface Details {
  moreDetails: {
    image: string | string[];
    titles: string[];
    texts: string[];
  };
  sizeImage: {
    width: number;
    height: number;
  };
}

const AboutSectionTwo = ({ moreDetails, sizeImage }: Details) => {
  const vertOrHoriz = (width: number, height: number) => {
    if (width > height) {
      return "aspect-[5/3]";
    } else {
      return "aspect-[5/11] h-[34rem]";
    }
  };

  return (
    <section className="pt-16 md:pt-20">
      <div className="container">
        <div className="relative border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className={`relative mx-auto my-16 lg:my-0 ${vertOrHoriz(sizeImage.width, sizeImage.height)}`}>
                {Array.isArray(moreDetails.image) ? (
                  //@ts-ignore
                  <SliderComponent images={AboutImage(moreDetails.image)} width={sizeImage.width} height={sizeImage.height} />
                ) : (
                  <Image
                  //@ts-ignore
                    src={AboutImage(moreDetails.image)}
                    alt="about-image"
                    width={sizeImage.width}
                    height={sizeImage.height}
                    className="mx-auto max-w-full object-contain lg:mr-0"
                  />
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[600px]">
                {moreDetails?.titles?.map((item, index) => {
                  return (
                    <div className="mb-9" key={index}>
                      <h3 className="mb-4 text-xl font-bold text-black opacity-90 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {item}
                      </h3>
                      <p className="text-base leading-relaxed dark:text-dark-mode text-body-color sm:text-lg sm:leading-relaxed">{moreDetails.texts[index]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
            <Svgs type="sectionTwo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
