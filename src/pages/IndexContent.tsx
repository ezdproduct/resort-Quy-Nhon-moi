"use client";

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
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { getNavLinks } from "@/constants/navigation"; // Corrected import
import { useTranslation } from '@/contexts/TranslationContext'; // Added missing import

const IndexContent = () => {
  const { t } = useTranslation();
  const sectionIds = getNavLinks(t).map(link => link.href); // Use getNavLinks
  const activeId = useScrollSpy(sectionIds, { rootMargin: "-30% 0% -70% 0%" });

  // Xác định các section mà header nên đổi màu
  const sectionsToChangeHeader = ['accommodation', 'dining', 'experiences', 'events'];
  const shouldHeaderChangeColor = activeId ? sectionsToChangeHeader.includes(activeId) : false;

  return (
    <div>
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