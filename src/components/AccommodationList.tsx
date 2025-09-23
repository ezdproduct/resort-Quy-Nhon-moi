import React from 'react';
import { LearnMoreButton } from './LearnMoreButton';
import { useTranslation } from '@/contexts/TranslationContext';

interface AccommodationCardProps {
  item: {
    image: string;
    titleKey: string;
    subtitleKey: string;
    descriptionKey: string;
    alignment: "left" | "right";
  };
}

const AccommodationCard: React.FC<AccommodationCardProps> = React.memo(({ item }) => {
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
        <div className="w-full md:w-[690px] md:h-[390px] flex-shrink-0 mb-4 md:mb-0">
          <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <div className="flex-1 flex flex-col justify-start gap-2 text-left">
          <p className="text-darkblue-5 text-xl font-normal leading-7 font-public-sans">{t(item.subtitleKey)}</p>
          <p className="text-neutral-9 text-xl font-normal leading-7 font-public-sans mb-6">{t(item.descriptionKey)}</p>
        </div>
      </div>
    </div>
  );
});

export const AccommodationList = () => {
  const accommodationItems: AccommodationCardProps['item'][] = [
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/66f4984e3472eb7ab06f15b5cb28a5ccefcd2e88.png",
      titleKey: "deluxe_ocean_view_title",
      subtitleKey: "deluxe_ocean_view_subtitle",
      descriptionKey: "deluxe_ocean_view_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img.png",
      titleKey: "deluxe_garden_view_title",
      subtitleKey: "deluxe_garden_view_subtitle",
      descriptionKey: "deluxe_garden_view_description",
      alignment: "right"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-2.png",
      titleKey: "family_suite_sea_view_title",
      subtitleKey: "family_suite_sea_view_subtitle",
      descriptionKey: "family_suite_sea_view_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-1.png",
      titleKey: "premier_suite_sea_view_title",
      subtitleKey: "premier_suite_sea_view_subtitle",
      descriptionKey: "premier_suite_sea_view_description",
      alignment: "right"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-3.png",
      titleKey: "sea_beachfront_pool_3_bedroom_villa_title",
      subtitleKey: "sea_beachfront_pool_3_bedroom_villa_subtitle",
      descriptionKey: "sea_beachfront_pool_3_bedroom_villa_description",
      alignment: "left"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-4.png",
      titleKey: "sea_vip_beachfront_pool_3_bedroom_villa_title",
      subtitleKey: "sea_vip_beachfront_pool_3_bedroom_villa_subtitle",
      descriptionKey: "sea_vip_beachfront_pool_3_bedroom_villa_description",
      alignment: "right"
    },
    {
      image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-5.png",
      titleKey: "dormitory_room_title",
      subtitleKey: "dormitory_room_subtitle",
      descriptionKey: "dormitory_room_description",
      alignment: "left"
    }
  ];

  return (
    <section className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-orange-1 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        {accommodationItems.map((item) => (
          <AccommodationCard key={item.titleKey} item={item} />
        ))}
      </div>
    </section>
  );
};