"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import translations from '@/translations'; // Import object chứa tất cả các bản dịch

interface TranslationContextType {
  language: 'vi' | 'en';
  setLanguage: (lang: 'vi' | 'en') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi'); // Mặc định là tiếng Việt

  const t = (key: string): string => {
    // Truy cập bản dịch dựa trên ngôn ngữ hiện tại và key
    // Fallback về key nếu không tìm thấy bản dịch
    return (translations[language] && translations[language][key]) || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};