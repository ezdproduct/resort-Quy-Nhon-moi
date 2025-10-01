import { useTranslation } from '@/contexts/TranslationContext';
import SvgImage from './SvgImage';

export const AmenitiesSection = () => {
  const { t } = useTranslation();

  const amenities = [
    { icon: "/icons/QN_SEA.svg", labelKey: "amenity_double_bed" },
    { icon: "/icons/RESORT.svg", labelKey: "amenity_air_conditioning" },
    { icon: "/icons/List.svg", labelKey: "amenity_in_room_phone" },
    { icon: "/icons/shellfish.svg", labelKey: "amenity_coffee_maker" },
    { icon: "/icons/QN_SEA.svg", labelKey: "amenity_mini_fridge" },
    { icon: "/icons/RESORT.svg", labelKey: "amenity_high_speed_wifi" },
    { icon: "/icons/List.svg", labelKey: "amenity_convenient_workspace" },
    { icon: "/icons/shellfish.svg", labelKey: "amenity_cable_tv" },
  ];

  return (
    <section className="bg-orange-1 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-orange-7 text-4xl md:text-5xl font-serif font-semibold leading-tight mb-12 md:mb-16">
          {t('amenities_title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <SvgImage src={amenity.icon} alt={t(amenity.labelKey)} size={48} className="text-darkblue-5" />
              <p className="text-darkblue-5 text-lg font-public-sans font-medium">{t(amenity.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};