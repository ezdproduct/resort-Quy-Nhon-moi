"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { useTranslation } from '@/contexts/TranslationContext';
import SvgImage from './SvgImage';
import { AccommodationDetailCard } from './AccommodationDetailCard';

export const AccommodationCategoryTabs = () => {
  const { t } = useTranslation();

  const accommodationData = {
    deluxe: [
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/66f4984e3472eb7ab06f15b5cb28a5ccefcd2e88.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img.png"
        ],
        titleKey: "deluxe_ocean_view_title",
        descriptionKey: "deluxe_ocean_view_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_ocean")
        },
        buttonTextKey: "book_now_button"
      },
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/66f4984e3472eb7ab06f15b5cb28a5ccefcd2e88.png"
        ],
        titleKey: "deluxe_garden_view_title",
        descriptionKey: "deluxe_garden_view_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_garden")
        },
        buttonTextKey: "book_now_button"
      }
    ],
    family: [
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-2.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-1.png"
        ],
        titleKey: "family_suite_sea_view_title",
        descriptionKey: "family_suite_sea_view_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_ocean")
        },
        buttonTextKey: "book_now_button"
      }
    ],
    premier: [
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-1.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-2.png"
        ],
        titleKey: "premier_suite_sea_view_title",
        descriptionKey: "premier_suite_sea_view_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_ocean")
        },
        buttonTextKey: "book_now_button"
      }
    ],
    villa: [
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-3.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-4.png"
        ],
        titleKey: "sea_beachfront_pool_3_bedroom_villa_title",
        descriptionKey: "sea_beachfront_pool_3_bedroom_villa_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_ocean_pool")
        },
        buttonTextKey: "book_now_button"
      },
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-4.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-3.png"
        ],
        titleKey: "sea_vip_beachfront_pool_3_bedroom_villa_title",
        descriptionKey: "sea_vip_beachfront_pool_3_bedroom_villa_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_3_people"),
          bedType: t("bed_type_double"),
          view: t("room_view_ocean_pool")
        },
        buttonTextKey: "book_now_button"
      }
    ],
    dormroom: [
      {
        images: [
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-5.png",
          "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-5.png"
        ],
        titleKey: "dormitory_room_title",
        descriptionKey: "dormitory_room_description",
        specs: {
          area: "30m2",
          capacity: t("capacity_4_people"),
          bedType: t("bed_type_mixed_dorm"),
          view: t("room_view_ocean")
        },
        buttonTextKey: "book_now_button"
      }
    ]
  };

  const tabTriggers = [
    { value: "deluxe", label: t("tab_deluxe"), number: "No.01" },
    { value: "family", label: t("tab_family"), number: "No.02" },
    { value: "premier", label: t("tab_premier"), number: "No.03" },
    { value: "villa", label: "No.04 Villa", labelKey: "tab_villa" },
    { value: "dormroom", label: "No.05 Dormroom", labelKey: "tab_dormroom" },
  ];

  return (
    <section className="bg-darkblue-6 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-4xl md:text-5xl font-semibold font-sans leading-tight mb-12 md:mb-16">
          {t('accommodation_details_title')}
        </h2>

        <Tabs defaultValue="deluxe" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4 bg-transparent mb-12 md:mb-16">
            {tabTriggers.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-4",
                  "text-white text-xl font-public-sans font-normal leading-7",
                  "data-[state=active]:text-orange-6 data-[state=active]:border-b-2 data-[state=active]:border-orange-6",
                  "hover:text-orange-6 transition-colors duration-300"
                )}
              >
                <span className="text-lightblue-3 text-base">{tab.number}</span>
                <div className="flex items-center gap-2">
                  <span>{tab.labelKey ? t(tab.labelKey) : tab.label}</span>
                  <SvgImage src="/icons/shellfish.svg" alt="icon" size={16} className="opacity-50" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(accommodationData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-16 md:space-y-24">
              {items.map((item, index) => (
                <AccommodationDetailCard key={index} item={item} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};