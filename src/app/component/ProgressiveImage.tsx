import Image from "next/image";
import { useState } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  className?: string;
  priority?: boolean;
  loading?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 75,
  className,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false); // Set loading state to false when image loads
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        className={`transition-opacity duration-700 ease-in-out ${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoad} // Using only onLoad
        priority={priority}
        placeholder="blur"
        blurDataURL={src} // Optional: Update this if you have an actual blurDataURL
      />
      {isLoading && <div className="absolute inset-0 animate-pulse"></div>}
    </div>
  );
};

export default ProgressiveImage;
