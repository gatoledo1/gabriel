"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SliderComponent from "../Slider";
import { Svgs } from "../Common/Svgs";
import AboutImage from "./ImageTheme";

interface About {
  title: string;
  paragraph: string;
  arraySkills: string[];
  image: string | string[];
  link: string;
  sizeImg: {
    width: number;
    height: number;
  };
}

const AboutSectionOne = ({ title, paragraph, arraySkills, image, link, sizeImg }: About) => {

  const vertOrHoriz = (width: number, height: number) => {
    if (width > height) {
      return "aspect-[5/3]";
    } else {
      return "aspect-[5/11] h-[34rem]";
    }
  };

  const firstPartArray = arraySkills?.slice(0, (arraySkills.length + 1) / 2);
  const secondPartArray = arraySkills?.slice((arraySkills.length + 1) / 2);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium dark:text-dark-mode text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <Svgs type="checkIcon" />
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-20 md:pt-24 lg:pt-28">
      <div className="container">
        <div className="pb-16md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {firstPartArray.map((item, index) => (
                      <List key={index} text={item} />
                    ))}
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {secondPartArray.map((item, index) => (
                      <List key={index} text={item} />
                    ))}
                  </div>
                </div>
              </div>
              {
                link && (
                  <a href={link} className="flex w-[16rem] mx-auto sm:mx-0 py-3 my-6 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80" rel="nofollow noreferrer noopener" target="_blank">
                    Acessar link do projeto
                  </a>
                )
              }
              
            </div>

            <div className="relative w-full px-4 lg:w-1/2">
              <Svgs type="blurObj" />
              <div className={`relative mx-auto mt-10 lg:mt-0 ${vertOrHoriz(sizeImg.width, sizeImg.height)}`}>
                {Array.isArray(image) ? (
                  //@ts-ignore
                  <SliderComponent images={AboutImage(image)} width={sizeImg.width} height={sizeImg.height} />
                ) : (
                  <Image
                  //@ts-ignore
                    src={AboutImage(image)}
                    alt="about-image"
                    width={sizeImg.width}
                    height={sizeImg.height}
                    className="mx-auto max-w-full object-contain lg:mr-0"
                  />                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
