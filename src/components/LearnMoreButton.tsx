import { useTranslation } from '@/contexts/TranslationContext';
import { Link } from 'react-router-dom';

interface LearnMoreButtonProps {
  to?: string;
}

export const LearnMoreButton = ({ to }: LearnMoreButtonProps) => {
  const { t } = useTranslation();
  const buttonClasses = "flex items-center justify-center p-4 rounded-full outline outline-1 outline-darkblue-2 text-darkblue-5 text-center text-[15px] font-sans font-medium leading-6 hover:bg-lightblue-5 transition-colors flex-shrink-0 mt-4 md:mt-0";

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {t('learn_more_button')}
      </Link>
    );
  }

  return (
    <button className={buttonClasses}>
      {t('learn_more_button')}
    </button>
  );
};