"use client";

import { useTranslation } from '@/contexts/TranslationContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      questionKey: "faq_breakfast_included_question",
      answerKey: "faq_breakfast_included_answer",
    },
    {
      questionKey: "faq_checkin_checkout_question",
      answerKey: "faq_checkin_checkout_answer",
    },
    {
      questionKey: "faq_private_beach_question",
      answerKey: "faq_private_beach_answer",
    },
    {
      questionKey: "faq_room_types_question",
      answerKey: "faq_room_types_answer",
    },
  ];

  return (
    <section className="bg-darkblue-6 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-center text-white text-4xl md:text-5xl font-serif font-semibold leading-tight mb-12 md:mb-16">
          {t('faq_title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-lightblue-1/20">
              <AccordionTrigger className="text-left text-white text-xl font-public-sans font-medium hover:no-underline py-4">
                {t(faq.questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-lightblue-3 text-lg font-public-sans leading-relaxed pb-4">
                {t(faq.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};