import { useTranslation } from '@/contexts/TranslationContext';

export const AccommodationHero = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Luu-tru.png')" }}
    >
      <div className="absolute inset-0 bg-[#0A3E54]/60" />
      <div className="relative z-10 text-center font-serif [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
        <h1 className="text-6xl md:text-8xl font-semibold my-2">{t('nav_accommodation_details')}</h1>
      </div>
    </section>
  );
};