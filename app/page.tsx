import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/Hero";
import { dataAbout } from "@/public/data";

const AboutPage = () => {
  
  return (
    <>
      <Hero />
      <div className="container px-10 not-animate">
        <h2 className="projects relative text-center text-2xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:text-3xl lg:text-4xl md:leading-tight">
          <span className="bg-white dark:bg-black z-0 px-8">Projetos</span>
        </h2>
        <p className="text-base my-4 text-center !leading-relaxed dark:text-dark-mode text-body-color md:text-lg">
          Os projetos abaixo são exemplos de melhorias ou novidades tecnológicas que pude levar para as empresas que trabalhei.
        </p>
      </div>
      {
        dataAbout.map((item, index) => 
          <>
            <AboutSectionOne key={index} {...item} />
            <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} />
          </>
        )
      }
    </>
  );
};

export default AboutPage;
