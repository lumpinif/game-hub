import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCropedImageUrl = (url: string) => {
  if (!url) return noImage;
  const taget = 'media/';
  const index = url.indexOf(taget) + taget.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCropedImageUrl;
