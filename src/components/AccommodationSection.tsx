import { useTranslation } from '@/contexts/TranslationContext';

export const AccommodationSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="accommodation"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/luu tru.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 text-center font-serif [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
        <p className="text-2xl md:text-3xl">{t('accommodation_section_number')}</p>
        <h2 className="text-5xl md:text-7xl font-semibold my-2">{t('accommodation_section_title')}</h2>
        <img
          src="/icons/shellfish.svg"
          alt="icon"
          className="h-8 w-8 mx-auto mt-4"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </section>
  );
};