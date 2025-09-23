"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { cn } from '@/lib/utils';
import SvgImage from './SvgImage';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface AccommodationCategory {
  id: string;
  number: string;
  titleKey: string;
}

export const AccommodationCategoriesNav: React.FC = () => {
  const { t } = useTranslation();

  const categories: AccommodationCategory[] = [
    { id: "deluxe", number: "No.01", titleKey: "accommodation_category_deluxe" },
    { id: "family", number: "No.02", titleKey: "accommodation_category_family" },
    { id: "premier", number: "No.03", titleKey: "accommodation_category_premier" },
    { id: "villa", number: "No.04", titleKey: "accommodation_category_villa" },
    { id: "dormroom", number: "No.05", titleKey: "accommodation_category_dormroom" },
  ];

  const categoryIds = categories.map(cat => `#${cat.id}`);
  const activeId = useScrollSpy(categoryIds, { rootMargin: "-50% 0% -50% 0%" });

  return (
    <nav className="sticky top-16 z-40 w-full bg-darkblue-6 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-around items-center">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={cn(
              "flex flex-col items-center gap-1 text-white text-center transition-colors duration-300",
              activeId === category.id ? "opacity-100" : "opacity-50 hover:opacity-80"
            )}
          >
            <span className="text-xs font-public-sans">{category.number}</span>
            <span className="text-lg font-semibold font-serif">{t(category.titleKey)}</span>
            <SvgImage
              src="/icons/shellfish.svg"
              alt="icon"
              size={16}
              className={cn(activeId === category.id ? "opacity-100" : "opacity-50")}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};