"use client";

import { useState, useEffect } from "react";
import { ResortHeader } from "@/components/ResortHeader";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AccommodationHero } from "@/components/AccommodationHero";
import { AccommodationCategoryTabs } from "@/components/AccommodationCategoryTabs";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { FAQSection } from "@/components/FAQSection";

const AccommodationDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hideLoadingScreen = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      hideLoadingScreen();
      return;
    }

    const loadHandler = () => {
      clearTimeout(fallbackTimeout);
      hideLoadingScreen();
    };

    const fallbackTimeout = setTimeout(() => {
      window.removeEventListener('load', loadHandler);
      hideLoadingScreen();
    }, 7000); // 7 giây dự phòng

    window.addEventListener('load', loadHandler);

    return () => {
      window.removeEventListener('load', loadHandler);
      clearTimeout(fallbackTimeout);
    };
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