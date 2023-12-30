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

              <div className="flex justify-center mt-8">
                <a href="/curriculo.pdf" target="_blank" aria-label="social-link" className="mr-6 rounded-md bg-primary text-white dark:text-black duration-100 hover:bg-opacity-90 font-bold py-2 px-4 inline-flex items-center">
                  <span>Acesso ao CV</span>
                </a>
                  <a href="https://github.com/gatoledo1" target="_blank" aria-label="social-link" className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4a6cf7" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/gatoledo1" target="_blank" aria-label="social-link" className="duration-100 hover:bg-opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4a6cf7" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
