import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/Hero";
import { dataAbout } from "@/public/data";

const AboutPage = () => {
  
  return (
    <>
      <Hero />
      <div className="container px-10">
        <h2 className="projects relative text-center text-2xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:text-3xl lg:text-4xl md:leading-tight">
          <span className="bg-white dark:bg-black z-0 px-8">Projetos</span>
        </h2>
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
