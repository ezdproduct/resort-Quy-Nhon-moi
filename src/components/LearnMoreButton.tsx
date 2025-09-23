import { useTranslation } from '@/contexts/TranslationContext';

export const LearnMoreButton = () => {
  const { t } = useTranslation();
  return (
    <button className="flex items-center justify-center p-4 rounded-full outline outline-1 outline-darkblue-2 text-darkblue-5 text-center text-[15px] font-sans font-medium leading-6 hover:bg-lightblue-5 transition-colors flex-shrink-0 mt-4 md:mt-0">
      {t('learn_more_button')}
    </button>
  );
};