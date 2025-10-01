import { useTranslation } from '@/contexts/TranslationContext';

export const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-[#85BFD1] py-24">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="text-lg font-sans">{t('welcome_from')}</p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold my-4">
          {t('resort_name')}
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg font-sans leading-relaxed [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)]">
          {t('welcome_description')}
        </p>
      </div>
    </section>
  );
};