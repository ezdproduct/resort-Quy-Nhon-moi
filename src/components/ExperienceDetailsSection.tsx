import React from 'react';
import { LearnMoreButton } from './LearnMoreButton';
import { useTranslation } from '@/contexts/TranslationContext';

interface ExperienceDetailsCardProps {
  item: {
    image: string;
    titleKey: string;
    descriptionKey: string;
    alignment: "left" | "right";
  };
}

const ExperienceDetailsCard: React.FC<ExperienceDetailsCardProps> = React.memo(({ item }) => {
  const { t } = useTranslation();
  const isLeftAligned = item.alignment === "left";

  return (
    <div className="w-full flex flex-col gap-6 md:gap-14">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h3 className="text-4xl lg:text-[64px] font-serif font-medium leading-tight lg:leading-[72px] text-orange-7 text-center md:text-left flex-grow">
          {t(item.titleKey)}
        </h3>
        <LearnMoreButton />
      </div>
      <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-14 ${isLeftAligned ? '' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-[690px] md:h-[390px] flex-shrink-0">
          <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <div className={`flex-1 flex flex-col justify-start gap-2 text-center md:text-left`}>
          <p className="text-neutral-9 text-xl font-normal leading-7 font-public-sans">{t(item.descriptionKey)}</p>
        </div>
      </div>
    </div>
  );
});

export const ExperienceDetailsSection = () => {
  const experienceDetailsItems: ExperienceDetailsCardProps['item'][] = [
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/5aff7282e333f6cf5402e47e1aba0dd11d3e0f44-scaled.jpg",
      titleKey: "swimming_pool_title",
      descriptionKey: "swimming_pool_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-10.png",
      titleKey: "beach_title",
      descriptionKey: "beach_description",
      alignment: "right"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-12.png",
      titleKey: "flavor_floating_title",
      descriptionKey: "flavor_floating_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-13.png",
      titleKey: "breakfast_buffet_title",
      descriptionKey: "breakfast_buffet_description",
      alignment: "right"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-14.png",
      titleKey: "paddleboarding_title",
      descriptionKey: "paddleboarding_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-15.png",
      titleKey: "kids_play_area_title",
      descriptionKey: "kids_play_area_description",
      alignment: "right"
    },
  ];

  return (
    <section className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-orange-1 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        {experienceDetailsItems.map((item) => (
          <ExperienceDetailsCard key={item.titleKey} item={item} />
        ))}
      </div>
    </section>
  );
};