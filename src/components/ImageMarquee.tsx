import React from 'react';

interface ImageMarqueeProps {
  images: string[];
  duration?: string; // Ví dụ: "30s"
}

export const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images, duration = "40s" }) => {
  // Nhân đôi danh sách hình ảnh để tạo hiệu ứng cuộn liền mạch
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full h-[203px] overflow-hidden bg-white">
      <div
        className="flex whitespace-nowrap animate-marquee h-full"
        style={{ animationDuration: duration }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="inline-block w-[360px] h-full flex-shrink-0">
            <img src={src} alt={`Marquee image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};