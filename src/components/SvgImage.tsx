import React from 'react';

interface SvgImageProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties; // Thêm thuộc tính style
}

const SvgImage: React.FC<SvgImageProps> = ({ src, alt = '', size = 24, className, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size, ...style }} // Áp dụng style
      className={className}
    />
  );
};

export default SvgImage;