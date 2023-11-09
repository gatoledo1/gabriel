import { useTheme } from 'next-themes';

function AboutImage(image: string | string[]) {
  const { resolvedTheme, theme } = useTheme();

  const changeImgLinks = (images: string[]) => {
    return images.map((item) => {
      const regex = /([^\/]+)\/([^\/]+)\/?$/;
      const imgName = regex.exec(item)
      return `${imgName[1]}/${resolvedTheme || "dark"}/${imgName[2]}`
    })
  }

  return Array.isArray(image) ?
    changeImgLinks(image)
  : `/images/${resolvedTheme || "dark"}/${image}`

}

export default AboutImage;

