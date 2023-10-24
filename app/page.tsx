import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { dataAbout } from "@/public/data";

const AboutPage = () => {

  function age(date: { getFullYear: () => number; getMonth: () => number; getDate: () => number; }) {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear() - 
               Number(today.getMonth() < date.getMonth() || 
               (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
    return age;
  }
  
  return (
    <>
      <Breadcrumb
        pageName="Gabriel Toledo"
        subtitle="Front-end Developer"
        description={`Tenho ${age(new Date(1994, 2, 13))} anos e trabalho como Desenvolvedor a ${age(new Date(2016, 1, 1))} anos, sendo mais de ${age(new Date(2020, 9, 10))} anos com ReactJS. 
        Além da minha paixão pelo desenvolvimento front-end, ajudar os membros da equipe
        também é algo que me sinto realizado em fazer. Acredito que, melhor do que ser
        excelente na codificação, é ser alguém que possa compartilhar conhecimento com a
        equipe, pois crescer em conjunto é a forma mais eficiente de melhorar a capacidade de
        um projeto, tornando a entrega contínua uma realidade para qualquer equipe.`}
      />
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
