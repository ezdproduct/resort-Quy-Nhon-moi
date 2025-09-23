"use client";

import React from 'react';
import { ResortHeader } from '@/components/ResortHeader';
import { Footer } from '@/components/Footer';
import { AccommodationHeroSection } from '@/components/AccommodationHeroSection';
import { AccommodationCategoriesNav } from '@/components/AccommodationCategoriesNav';
import { AccommodationCategorySection } from '@/components/AccommodationCategorySection';
import { AccommodationAmenities } from '@/components/AccommodationAmenities';
import { AccommodationFAQ } from '@/components/AccommodationFAQ';
import { accommodationItems, AccommodationItem } from '@/constants/accommodation';

const AccommodationPage: React.FC = () => {
  const getItemsByCategory = (category: string): AccommodationItem[] => {
    return accommodationItems.filter(item => item.category === category);
  };

  return (
    <div>
      <ResortHeader shouldHeaderChangeColor={true} />
      <main>
        <AccommodationHeroSection />
        <AccommodationCategoriesNav />
        
        <AccommodationCategorySection
          titleKey="accommodation_category_deluxe"
          categoryId="deluxe"
          items={getItemsByCategory("deluxe")}
        />
        <AccommodationCategorySection
          titleKey="accommodation_category_family"
          categoryId="family"
          items={getItemsByCategory("family")}
        />
        <AccommodationCategorySection
          titleKey="accommodation_category_premier"
          categoryId="premier"
          items={getItemsByCategory("premier")}
        />
        <AccommodationCategorySection
          titleKey="accommodation_category_villa"
          categoryId="villa"
          items={getItemsByCategory("villa")}
        />
        <AccommodationCategorySection
          titleKey="accommodation_category_dormroom"
          categoryId="dormroom"
          items={getItemsByCategory("dormroom")}
        />

        <AccommodationAmenities />
        <AccommodationFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationPage;