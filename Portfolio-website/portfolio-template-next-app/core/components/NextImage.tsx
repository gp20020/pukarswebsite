import Image from "next/image";
import { useState } from "react";

function NextImage({
  imagePath,
  aspectRatio = 1,
  alt,
  className = "",
  imageClassName = "",
  useNaturalAspectRatio = false,
  objectFit = undefined,
  priority = false,
}: NextImageProps) {
  const [ratio, setRatio] = useState(1);

  return (
    <div className={`block ${className}`}>
      <Image
        className={`${imageClassName}`}
        src={imagePath}
        alt={alt}
        width={useNaturalAspectRatio ? ratio : aspectRatio}
        height={1}
        priority={priority}
        objectFit={objectFit}
        // objectFit="contain"
        // objectFit=""
        layout="responsive"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          useNaturalAspectRatio && setRatio(naturalWidth / naturalHeight);
        }}
      />
    </div>
  );
}

type NextImageProps = {
  imagePath: string;
  alt: string;
  aspectRatio?: number;
  useNaturalAspectRatio?: boolean;
  className?: string;
  imageClassName?: string;
  objectFit?: any;
  priority?: boolean;
};

export default NextImage;
