import React from 'react';
import { LearnMoreButton } from './LearnMoreButton';
import { useTranslation } from '@/contexts/TranslationContext';
import { accommodationItems } from '@/constants/accommodation';

interface AccommodationCardProps {
  item: typeof accommodationItems[0];
}

const AccommodationCard: React.FC<AccommodationCardProps> = React.memo(({ item }) => {
  const { t } = useTranslation();
  const isLeftAligned = item.alignment === "left";

  return (
    <div id={item.id} className="w-full flex flex-col gap-6 md:gap-14 scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h3 className="text-4xl lg:text-[64px] font-serif font-medium leading-tight lg:leading-[72px] text-orange-7 text-center md:text-left flex-grow">
          {t(item.titleKey)}
        </h3>
        <LearnMoreButton />
      </div>
      <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-14 ${isLeftAligned ? '' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-[690px] md:h-[390px] flex-shrink-0 mb-4 md:mb-0">
          <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <div className="flex-1 flex flex-col justify-start gap-2 text-left">
          <p className="text-darkblue-5 text-xl font-normal leading-7 font-public-sans">{t(item.subtitleKey)}</p>
          <p className="text-neutral-9 text-xl font-normal leading-7 font-public-sans mb-6">{t(item.descriptionKey)}</p>
        </div>
      </div>
    </div>
  );
});

export const AccommodationList = () => {
  return (
    <section className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-orange-1 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-neutral-9 text-xl font-normal leading-7 font-public-sans">
                Tại Quy Nhon Sea Resort, mỗi không gian nghỉ dưỡng đều được thiết kế tinh tế để mang đến cho bạn sự thoải mái và thư giãn tuyệt đối. Dù bạn tìm kiếm một kỳ nghỉ lãng mạn, một chuyến đi gia đình hay một không gian yên tĩnh để tái tạo năng lượng, chúng tôi đều có lựa chọn hoàn hảo dành cho bạn. Hãy khám phá các loại phòng và villa của chúng tôi để tìm thấy không gian lý tưởng cho kỳ nghỉ trong mơ của mình.
            </p>
        </div>
        {accommodationItems.map((item) => (
          <AccommodationCard key={item.titleKey} item={item} />
        ))}
      </div>
    </section>
  );
};