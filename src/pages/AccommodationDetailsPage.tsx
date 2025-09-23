"use client";

import { useState, useEffect } from "react";
import { ResortHeader } from "@/components/ResortHeader";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AccommodationHero } from "@/components/AccommodationHero";
import { AccommodationCategoryTabs } from "@/components/AccommodationCategoryTabs";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { FAQSection } from "@/components/FAQSection";
// import { useTranslation } from '@/contexts/TranslationContext'; // Không cần import nếu không sử dụng 't'

const AccommodationDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const { t } = useTranslation(); // Biến 't' không được sử dụng, nên đã bị xóa

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div>
      <LoadingScreen isLoading={isLoading} />
      <ResortHeader shouldHeaderChangeColor={true} /> {/* Header luôn đổi màu trên trang này */}
      <main>
        <AccommodationHero />
        <AccommodationCategoryTabs />
        <AmenitiesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationDetailsPage;