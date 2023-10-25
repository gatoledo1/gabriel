"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SliderComponent from "../Slider";
import { useTheme } from "next-themes";
import { BlurObject } from "../Common/BlurObject";

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

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = ({ title, paragraph, arraySkills, image, link, sizeImg }: About) => {
  const { theme } = useTheme();

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
        {checkIcon}
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
              <BlurObject />
              <div className={`relative mx-auto mt-10 lg:mt-0 ${vertOrHoriz(sizeImg.width, sizeImg.height)}`}>
                {Array.isArray(image) ? (
                  <SliderComponent images={image} width={sizeImg.width} height={sizeImg.height} />
                ) : (
                  <Image
                    src={`/images/${image}`}
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
