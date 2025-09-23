import React from 'react';

interface ImageMarqueeProps {
  images: string[];
  duration?: string;
}

export const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images, duration = "40s" }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full h-[203px] overflow-hidden bg-white">
      <div
        className="flex whitespace-nowrap animate-marquee h-full"
        style={{ animationDuration: duration }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="inline-block w-[360px] h-full flex-shrink-0">
            <img src={src} alt={`Marquee image ${index}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};