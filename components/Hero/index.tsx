"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Svgs } from "../Common/Svgs";

const Hero = () => {
  function age(date: { getFullYear: () => number; getMonth: () => number; getDate: () => number }) {
    const today = new Date();
    const age =
      today.getFullYear() -
      date.getFullYear() -
      Number(today.getMonth() < date.getMonth() || (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
    return age;
  }

  return (
    <>
      <section id="home" className="xl:pb-[160px]2xl:pb-[200px] relative z-10 overflow-hidden pt-[60px] pb-16 md:pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center md:flex-nowrap">
                <div className="mr-6 flex w-[240px] flex-col items-center justify-center">
                  <div className="container-image">
                    <div className="container-inner">
                      <div className="circle-cover bg-primary opacity-60" />
                      <Image
                        src="/images/hero/profile-2.png"
                        alt="Gabriel Toledo"
                        width={250}
                        height={250}
                        quality={70}
                        priority={true}
                        placeholder="blur"
                        blurDataURL="/images/hero/profile-2.png"
                        className="img w-full rounded-t-lg object-cover md:h-auto md:rounded-none md:rounded-l-lg"
                      />
                    </div>
                  </div>
                </div>
                <h1 className="w-80 text-2xl font-bold leading-tight text-black dark:text-white sm:w-[476px] sm:text-4xl sm:leading-tight md:w-full md:text-5xl md:leading-tight">
                  Desenvolvedor Front-End Atuação com
                  <TypeAnimation
                    sequence={[" Javascript", 2500, " Typescript", 2500, " ReactJS", 2500, " NextJS", 2500, " React Native", 2500]}
                    className="gradient-words mb-5 text-2xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                    wrapper="span"
                    speed={4}
                    repeat={Infinity}
                  />
                </h1>
              </div>

              <div className="animated fadeInUp mt-8 flex items-center justify-center">
                <div className="mx-auto max-w-[1200px]">
                  <div className="overflow-hidden rounded-lg shadow-xl dark:bg-primary dark:bg-opacity-10 md:flex">
                    <div className="p-8">
                      <p className="text-xl font-bold md:text-2xl">Sobre Gabriel Toledo</p>
                      <p className="my-5 text-base !leading-relaxed text-body-color dark:text-dark-mode sm:text-lg md:text-xl">
                        Sou um profissional desenvolvedor de sites, aplicações e app, plenamente realizado na área.
                        <br />
                      </p>
                      <p className="text-base !leading-relaxed text-body-color dark:text-dark-mode sm:text-lg md:text-xl">
                        Desenvolvedor Web há {age(new Date(2016, 1, 1))} anos, sendo mais de {age(new Date(2020, 9, 10))} anos com ReactJS.
                        Nesse tempo aprendi que não basta ser excelente na codificação, também é necessário ser alguém que possa
                        compartilhar conhecimento com a equipe, pois crescer em conjunto é a forma mais eficiente de melhorar a capacidade
                        de um projeto, tornando a entrega contínua uma realidade para qualquer equipe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-70 lg:opacity-100">
          <Svgs type="hero" />
        </div>
      </section>
    </>
  );
};

export default Hero;
