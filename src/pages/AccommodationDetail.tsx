"use client";

import { useParams, Link } from 'react-router-dom';
import { accommodationItems } from '@/constants/accommodation';
import { useTranslation } from '@/contexts/TranslationContext';
import { ResortHeader } from '@/components/ResortHeader';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AccommodationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  const accommodation = accommodationItems.find(item => item.id === id);

  if (!accommodation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Không tìm thấy loại phòng</h1>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-orange-1">
      <ResortHeader shouldHeaderChangeColor={true} />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay về trang chủ
            </Link>
          </Button>

          <div className="w-full flex flex-col gap-6 md:gap-14">
            <h1 className="text-4xl lg:text-[64px] font-serif font-medium leading-tight lg:leading-[72px] text-orange-7 text-center">
              {t(accommodation.titleKey)}
            </h1>
            <div className="w-full h-[60vh] max-h-[700px]">
              <img src={accommodation.image} alt={t(accommodation.titleKey)} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-darkblue-5 text-2xl font-semibold leading-7 font-public-sans mb-4">{t(accommodation.subtitleKey)}</p>
              <p className="text-neutral-9 text-xl font-normal leading-8 font-public-sans">{t(accommodation.descriptionKey)}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationDetail;