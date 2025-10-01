"use client";

import SvgImage from './SvgImage';
import { ImageMarquee } from './ImageMarquee'; // Import component mới
import { useTranslation } from '@/contexts/TranslationContext';
import { cn } from '@/lib/utils'; // Import cn để kết hợp các class Tailwind

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = [
    { iconSrc: "/icons/home-2.svg", alt: "Home Icon", number: 'No.01', title: t('experience_item_01_title'), subtitle: t('experience_item_01_subtitle') },
    { iconSrc: "/icons/coffee-left.svg", alt: "Coffee Icon", number: 'No.02', title: t('experience_item_02_title'), subtitle: t('experience_item_02_subtitle') },
    { iconSrc: "/icons/sea-waves.svg", alt: "Sea Waves Icon", number: 'No.03', title: t('experience_item_03_title'), subtitle: t('experience_item_03_subtitle') },
    { iconSrc: "/icons/spa.svg", alt: "Spa Icon", number: 'No.04', title: t('experience_item_04_title'), subtitle: t('experience_item_04_subtitle') },
    { iconSrc: "/icons/jewelry.svg", alt: "Jewelry Icon", number: 'No.05', title: t('experience_item_05_title'), subtitle: t('experience_item_05_subtitle') },
  ];

  // Danh sách hình ảnh cho marquee
  const marqueeImages = [
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/11-scaled.jpg",
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/BIN_9301-scaled.jpg",
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/BIN_9877-scaled.jpg",
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/DSC_4091-scaled.jpg",
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/DSC_4976-scaled.jpg",
    "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/image.png",
  ];

  const iconFilterClass = "[filter:brightness(0)_saturate(100%)_invert(71%)_sepia(13%)_sate(1486%)_hue-rotate(150deg)_brightness(90%)_contrast(88%)]";

  const renderExperienceItem = (item: typeof experiences[0]) => (
    <div
      key={item.number}
      className={cn(
        "w-[180px] flex flex-col items-start gap-2 pt-3 border-t border-lightblue-1/50",
        "cursor-pointer rounded-lg p-4 transition-all duration-300", // Thêm padding, bo góc và hiệu ứng chuyển đổi
        "hover:bg-darkblue-5/20" // Chỉ giữ lại hiệu ứng đổi màu nền khi rê chuột
      )}
    >
      <div className="w-[52px] h-[52px] flex items-center justify-start">
        <SvgImage src={item.iconSrc} size={80} alt={item.alt} className={iconFilterClass} />
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <p className="text-lightblue-3 text-xl font-public-sans font-normal">{item.number}</p>
        <p className="text-lightblue-1 text-2xl font-sans font-semibold leading-tight whitespace-pre-line">
          {`${item.title}\n${item.subtitle}`}
        </p>
      </div>
    </div>
  );

  return (
    <section 
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Background.png')" }}
    >
      <div className="absolute inset-0 bg-[#0A3E54]/80" />
      
      <div className="relative">
        <img 
          src="https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Overlay.png" 
          alt="Decorative Overlay"
          className="w-full h-auto"
        />
        <div className="container mx-auto px-4 flex flex-col items-center gap-12 md:gap-16 py-16 md:py-24">
          <h2 className="text-center text-white text-4xl md:text-5xl font-semibold font-sans leading-tight" style={{ textShadow: '0px 4px 40px rgba(0, 0, 0, 0.24)' }}>
            {t('experiences_title')}<br/>{t('resort_name')}
          </h2>

          {/* Mobile Layout */}
          <div className="flex flex-wrap justify-center items-start gap-x-12 gap-y-10 md:hidden">
            {experiences.map(renderExperienceItem)}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center gap-10">
            {/* Top Row */}
            <div className="flex justify-center gap-12">
              {experiences.slice(0, 3).map(renderExperienceItem)}
            </div>
            {/* Bottom Row */}
            <div className="flex justify-center gap-12">
              {experiences.slice(3, 5).map(renderExperienceItem)}
            </div>
          </div>
        </div>
      </div>
      {/* Dải hình ảnh marquee được thêm vào đây */}
      <ImageMarquee images={marqueeImages} />
    </section>
  );
};