import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      alt={alt}
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      transformation={[{ height: h, width: w }]}
    />
  );
};

export default Image;
