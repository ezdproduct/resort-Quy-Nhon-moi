"use client";

import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccommodationFAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      questionKey: "faq_breakfast_included_q",
      answerKey: "faq_breakfast_included_a",
    },
    {
      questionKey: "faq_checkin_checkout_q",
      answerKey: "faq_checkin_checkout_a",
    },
    {
      questionKey: "faq_private_beach_q",
      answerKey: "faq_private_beach_a",
    },
    {
      questionKey: "faq_family_group_rooms_q",
      answerKey: "faq_family_group_rooms_a",
    },
  ];

  return (
    <section className="relative w-full px-4 py-16 md:px-[138px] md:py-[120px] bg-orange-1 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full md:w-[1164px] flex flex-col items-center md:items-start gap-16 md:gap-[88px]">
        <h2 className="text-5xl md:text-7xl font-serif font-semibold text-darkblue-6 text-center md:text-left w-full">
          {t('accommodation_faq_title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-darkblue-2">
              <AccordionTrigger className="text-darkblue-5 text-xl md:text-2xl font-semibold font-public-sans hover:no-underline py-6">
                {t(faq.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-9 text-lg md:text-xl font-normal font-public-sans pb-6">
                {t(faq.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};