import { Svgs } from "../Common/Svgs";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-primary bg-opacity-5 pt-16">
        <div className="not-animate container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[360px] text-center lg:mb-16">
                <p className="text-3xl font-bold leading-relaxed text-black dark:text-white">Gabriel Toledo</p>
                <p className="mb-5 text-xl font-medium leading-relaxed text-body-color">Desenvolvedor Front-End</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white"></p>
          </div>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <Svgs type="cube" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
