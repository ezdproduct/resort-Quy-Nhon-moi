"use client";

import { useState, useEffect } from "react";
import { ResortHeader } from "@/components/ResortHeader";
import { HeroSection } from "@/components/HeroSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AccommodationSection } from "@/components/AccommodationSection";
import { AccommodationList } from "@/components/AccommodationList";
import { DiningSection } from "@/components/DiningSection";
import { DiningDetailsSection } from "@/components/DiningDetailsSection";
import { DetailedExperienceSection } from "@/components/DetailedExperienceSection";
import { ExperienceDetailsSection } from "@/components/ExperienceDetailsSection";
import { EventBannerSection } from "@/components/EventBannerSection";
import { EventSection } from "@/components/EventSection";
import { Footer } from "@/components/Footer";
import { DotNav } from "@/components/DotNav";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { getNavLinks } from "@/constants/navigation";
import { useTranslation } from '@/contexts/TranslationContext';

const IndexContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const sectionIds = getNavLinks(t)
    .map(link => link.href)
    .filter(href => href.startsWith('#'));
  const activeId = useScrollSpy(sectionIds, { rootMargin: "-30% 0% -70% 0%" });

  const sectionsToChangeHeader = ['accommodation', 'dining', 'experiences', 'events'];
  const shouldHeaderChangeColor = activeId ? sectionsToChangeHeader.includes(activeId) : false;

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
      <ResortHeader shouldHeaderChangeColor={shouldHeaderChangeColor} />
      <DotNav />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ExperienceSection />
        <AccommodationSection />
        <AccommodationList />
        <DiningSection />
        <DiningDetailsSection />
        <DetailedExperienceSection />
        <ExperienceDetailsSection />
        <EventBannerSection />
        <EventSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexContent;