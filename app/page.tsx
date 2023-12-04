import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/Hero";
import { dataAbout, dataMyTests } from "@/public/data";
import TitleArea from "@/components/TitleArea";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <TitleArea
        title={"Projetos"}
        text={"Os projetos abaixo são exemplos de melhorias ou novidades tecnológicas que pude levar para as empresas que trabalhei."}
      />
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} aspectRatio={item.aspectRatio} />
        </React.Fragment>
      ))}
      <TitleArea title={"Testes técnicos"} text={"Projetos criados como etapas técnicas em processos seletivos"} />
      {dataMyTests.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} aspectRatio={item.aspectRatio} />
        </React.Fragment>
      ))}
    </>
  );
};

export default AboutPage;
