import PLACEHOLDER_IMG from "@/assets/placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  if (!url) return PLACEHOLDER_IMG;
  const index = url.indexOf(target) + target.length;
  const CROPED_IMAGE_URL =
    url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return CROPED_IMAGE_URL;
};

export default getCroppedImageUrl;
