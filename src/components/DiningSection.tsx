import { useTranslation } from '@/contexts/TranslationContext';

export const DiningSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="dining"
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/IMG_-DSC_2342.png')" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 text-center font-serif [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
        <p className="text-2xl md:text-3xl">{t('dining_section_number')}</p>
        <h2 className="text-5xl md:text-7xl font-semibold my-2">{t('dining_section_title')}</h2>
        <p className="text-xl md:text-2xl">{t('dining_section_subtitle')}</p>
      </div>
    </section>
  );
};