"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import SvgImage from './SvgImage';

export const AccommodationAmenities: React.FC = () => {
  const { t } = useTranslation();

  const amenities = [
    { icon: "/icons/bed.svg", textKey: "amenity_double_bed" },
    { icon: "/icons/air-conditioner.svg", textKey: "amenity_air_conditioning" },
    { icon: "/icons/phone.svg", textKey: "amenity_in_room_phone" },
    { icon: "/icons/coffee-maker.svg", textKey: "amenity_coffee_maker" },
    { icon: "/icons/fridge.svg", textKey: "amenity_mini_fridge" },
    { icon: "/icons/wifi.svg", textKey: "amenity_high_speed_wifi" },
    { icon: "/icons/desk.svg", textKey: "amenity_work_desk" },
    { icon: "/icons/tv.svg", textKey: "amenity_lcd_tv" },
  ];

  return (
    <section className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-darkblue-6 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        <h2 className="text-5xl md:text-7xl font-serif font-semibold text-white text-center md:text-left w-full">
          {t('accommodation_amenities_title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center md:items-start gap-4 text-white">
              <SvgImage src={amenity.icon} alt={t(amenity.textKey)} size={48} style={{ filter: 'brightness(0) invert(1)' }} />
              <p className="text-xl font-public-sans font-normal text-center md:text-left">{t(amenity.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};