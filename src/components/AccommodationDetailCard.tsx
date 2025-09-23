"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { LearnMoreButton } from './LearnMoreButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface AccommodationDetailCardProps {
  item: {
    images: string[];
    titleKey: string;
    descriptionKey: string;
    specs: {
      area: string;
      capacity: string;
      bedType: string;
      view: string;
    };
    buttonTextKey: string;
  };
}

export const AccommodationDetailCard: React.FC<AccommodationDetailCardProps> = React.memo(({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-8 md:gap-16 bg-orange-1 p-6 md:p-10 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 flex-shrink-0">
        <Carousel className="w-full">
          <CarouselContent>
            {item.images.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img src={src} alt={`${t(item.titleKey)} image ${index + 1}`} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-6">
        <div>
          <h3 className="text-4xl font-serif font-semibold leading-tight text-orange-7 mb-4">
            {t(item.titleKey)}
          </h3>
          <p className="text-neutral-9 text-lg font-normal leading-relaxed font-public-sans mb-6">
            {t(item.descriptionKey)}
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-neutral-9 text-base font-public-sans">
            <div className="flex items-center gap-2">
              <span className="font-medium">{t('room_specs_area')}:</span>
              <span>{item.specs.area}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{t('room_specs_capacity')}:</span>
              <span>{item.specs.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{t('room_specs_bed_type')}:</span>
              <span>{item.specs.bedType}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{t('room_specs_view')}:</span>
              <span>{item.specs.view}</span>
            </div>
          </div>
        </div>
        <LearnMoreButton />
      </div>
    </div>
  );
});