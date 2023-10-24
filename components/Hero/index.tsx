"use client"

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  function age(date: { getFullYear: () => number; getMonth: () => number; getDate: () => number; }) {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear() - 
               Number(today.getMonth() < date.getMonth() || 
               (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
    return age;
  }

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="animated fadeInUp mx-auto max-w-[700px]"
              >
                <h1 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight" >
                  Desenvolvedor Front-End 
                  Atuação com 
                  <TypeAnimation
                    sequence={[
                      ' Javascript',
                      2500,
                      ' TypeScript',
                      2500,
                      ' ReactJS',
                      2500,
                      ' NextJS',
                      2500,
                      ' React Native',
                      2500
                    ]}
                    className="gradient-words mb-5 text-2xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                    wrapper="span"
                    speed={4}
                    repeat={Infinity}
                  />
                </h1>
              </div>
              <div className="animated fadeInUp mx-auto max-w-[900px]">
                <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-gray dark:opacity-90 sm:text-lg md:text-xl">
                  Para mim, um bom código, significa código que pode ser facilmente lido, entendido, mantido e dimensionado por desenvolvedores de qualquer nível.<br />
                </p>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-gray dark:opacity-90 sm:text-lg md:text-xl">
                  Sou Desenvolvedor Web a {age(new Date(2016, 1, 1))} anos, sendo mais de {age(new Date(2020, 9, 10))} anos com ReactJS. Nesse tempo aprendi que não basta ser excelente na codificação, também é necessário ser alguém que possa compartilhar conhecimento com a equipe, pois crescer em conjunto é a forma mais eficiente de melhorar a capacidade de um projeto, tornando a entrega contínua uma realidade para qualquer equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
            opacity="0.6"
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
            opacity="0.6"
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
            opacity="0.6"
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
            opacity="0.6"
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.4"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.4"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.4"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
