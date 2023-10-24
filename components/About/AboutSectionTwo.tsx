import Image from "next/image";
import SliderComponent from "../Slider";

interface Details {
  moreDetails: {
    image: string | string[],
    titles: string[],
    texts: string[]
  },
  sizeImage: {
    width: number,
    height: number,
  }
}

const AboutSectionTwo = ({moreDetails, sizeImage}: Details) => {

  const vertOrHoriz = (width: number, height: number) => {
    if(width > height) {
      return "aspect-[5/3]"
    } else {
      return "aspect-[5/11] h-[34rem]"
    }
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className={`wow fadeInUp relative mx-auto ${vertOrHoriz(sizeImage.width, sizeImage.height)}`}
              data-wow-delay=".15s"
            >
              {
                Array.isArray(moreDetails.image) ? (
                  <SliderComponent images={moreDetails.image} width={sizeImage.width} height={sizeImage.height} />
                ) : (
                  <Image
                    src={`/images/${moreDetails.image}`}
                    alt="about-image"
                    width={sizeImage.width}
                    height={sizeImage.height}
                    className="mx-auto max-w-full lg:mr-0 object-contain"
                  />
                )
              }
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              {
                moreDetails?.titles?.map((item, index) => {
                  return (
                    <div className="mb-9" key={index}>
                      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {item}
                      </h3>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        {moreDetails.texts[index]}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
