"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { AccommodationItem } from '@/constants/accommodation';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Users, BedSingle, Ruler } from 'lucide-react';

interface AccommodationCardProps {
  item: AccommodationItem;
}

const AccommodationCard: React.FC<AccommodationCardProps> = React.memo(({ item }) => {
  const { t } = useTranslation();
  const isLeftAligned = item.alignment === "left";

  // Placeholder for multiple images if needed, for now using the single image
  const images = [item.image, item.image]; // Replace with actual multiple images if available

  return (
    <div className="w-full flex flex-col gap-6 md:gap-14">
      <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-14 ${isLeftAligned ? '' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-[690px] md:h-[390px] flex-shrink-0 mb-4 md:mb-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`${t(item.titleKey)} ${index + 1}`} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="flex-1 flex flex-col justify-start gap-2 text-left">
          <h3 className="text-4xl lg:text-[64px] font-serif font-medium leading-tight lg:leading-[72px] text-orange-7">
            {t(item.titleKey)}
          </h3>
          <p className="text-darkblue-5 text-xl font-normal leading-7 font-public-sans">{t(item.subtitleKey)}</p>
          <p className="text-neutral-9 text-xl font-normal leading-7 font-public-sans mb-6">{t(item.descriptionKey)}</p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-neutral-9 text-base font-public-sans mb-6">
            <div className="flex items-center gap-2">
              <Ruler size={16} className="text-darkblue-5" />
              <span>{t('room_details_area')}: {item.area}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-darkblue-5" />
              <span>{t('room_details_capacity')}: {item.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <BedSingle size={16} className="text-darkblue-5" />
              <span>{t('room_details_bed_type')}: {item.bedType}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-darkblue-5" />
              <span>{t('room_details_view')}: {item.view}</span>
            </div>
          </div>

          <Button className="bg-darkblue-5 hover:bg-darkblue-6 text-white text-lg font-semibold py-6 px-8 rounded-lg self-start">
            {t('room_details_book_now')}
          </Button>
        </div>
      </div>
    </div>
  );
});

interface AccommodationCategorySectionProps {
  titleKey: string;
  categoryId: string;
  items: AccommodationItem[];
}

export const AccommodationCategorySection: React.FC<AccommodationCategorySectionProps> = ({ titleKey, categoryId, items }) => {
  const { t } = useTranslation();

  return (
    <section id={categoryId} className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-orange-1 overflow-hidden flex flex-col items-center scroll-mt-24">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        <h2 className="text-5xl md:text-7xl font-serif font-semibold text-darkblue-6 text-center md:text-left w-full">
          {t(titleKey)}
        </h2>
        {items.map((item) => (
          <AccommodationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};