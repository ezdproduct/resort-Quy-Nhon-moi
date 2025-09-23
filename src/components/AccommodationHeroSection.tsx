"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export const AccommodationHeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="accommodation-hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/luu-tru.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0A3E54]/80" />
      <div className="relative z-10 text-center font-serif [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
        <h1 className="text-5xl md:text-7xl font-semibold my-2">{t('accommodation_page_hero_title')}</h1>
        <p className="text-xl md:text-2xl">{t('accommodation_page_hero_subtitle')}</p>
      </div>
    </section>
  );
};