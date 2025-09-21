"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/contexts/TranslationContext'; // Import useTranslation

interface LanguageSwitcherProps {
  shouldHeaderChangeColor: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ shouldHeaderChangeColor }) => {
  const { language, setLanguage } = useTranslation();

  const textColorClass = shouldHeaderChangeColor ? "text-darkblue-5" : "text-white";
  const activeOpacityClass = "opacity-100";
  const inactiveOpacityClass = "opacity-40";

  return (
    <div className={cn("flex items-center space-x-1 text-base font-medium transition-colors duration-300", textColorClass)}>
      <button
        onClick={() => setLanguage('vi')}
        className={cn("hover:opacity-100", language === 'vi' ? activeOpacityClass : inactiveOpacityClass)}
      >
        VI
      </button>
      <span className="mx-1">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={cn("hover:opacity-100", language === 'en' ? activeOpacityClass : inactiveOpacityClass)}
      >
        EN
      </button>
    </div>
  );
};