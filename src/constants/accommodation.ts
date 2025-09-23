export const accommodationItems = [
  {
    id: "deluxe-ocean-view",
    category: "deluxe",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/66f4984e3472eb7ab06f15b5cb28a5ccefcd2e88.png",
    titleKey: "deluxe_ocean_view_title",
    subtitleKey: "deluxe_ocean_view_subtitle",
    descriptionKey: "deluxe_ocean_view_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển",
    alignment: "left" as const
  },
  {
    id: "deluxe-garden-view",
    category: "deluxe",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img.png",
    titleKey: "deluxe_garden_view_title",
    subtitleKey: "deluxe_garden_view_subtitle",
    descriptionKey: "deluxe_garden_view_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Sân vườn",
    alignment: "right" as const
  },
  {
    id: "family-suite-sea-view",
    category: "family",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-2.png",
    titleKey: "family_suite_sea_view_title",
    subtitleKey: "family_suite_sea_view_subtitle",
    descriptionKey: "family_suite_sea_view_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển",
    alignment: "left" as const
  },
  {
    id: "premier-suite-sea-view",
    category: "premier",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-1.png",
    titleKey: "premier_suite_sea_view_title",
    subtitleKey: "premier_suite_sea_view_subtitle",
    descriptionKey: "premier_suite_sea_view_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển",
    alignment: "right" as const
  },
  {
    id: "sea-beachfront-pool-3-bedroom-villa",
    category: "villa",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-3.png",
    titleKey: "sea_beachfront_pool_3_bedroom_villa_title",
    subtitleKey: "sea_beachfront_pool_3_bedroom_villa_subtitle",
    descriptionKey: "sea_beachfront_pool_3_bedroom_villa_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển/ Hồ bơi",
    alignment: "left" as const
  },
  {
    id: "sea-vip-beachfront-pool-3-bedroom-villa",
    category: "villa",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-4.png",
    titleKey: "sea_vip_beachfront_pool_3_bedroom_villa_title",
    subtitleKey: "sea_vip_beachfront_pool_3_bedroom_villa_subtitle",
    descriptionKey: "sea_vip_beachfront_pool_3_bedroom_villa_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển/ Hồ bơi",
    alignment: "right" as const
  },
  {
    id: "dormitory-room",
    category: "dormroom",
    image: "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Thumbnail-Img-5.png",
    titleKey: "dormitory_room_title",
    subtitleKey: "dormitory_room_subtitle",
    descriptionKey: "dormitory_room_description",
    area: "30m2",
    capacity: "3 người",
    bedType: "Giường đôi",
    view: "Hướng biển",
    alignment: "left" as const
  }
];

export type AccommodationItem = typeof accommodationItems[0];