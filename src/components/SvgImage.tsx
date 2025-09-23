import React from 'react';

interface SvgImageProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

const SvgImage: React.FC<SvgImageProps> = ({ src, alt = '', size = 24, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={className}
    />
  );
};

export default SvgImage;