// Removed: import { useTranslation } from '@/contexts/TranslationContext';

export const getNavLinks = (t: (key: string) => string) => [
  { href: "#home", label: t("nav_home") },
  { href: "#accommodation", label: t("nav_accommodation") },
  { href: "#dining", label: t("nav_dining") },
  { href: "#experiences", label: t("nav_experiences") },
  { href: "#events", label: t("nav_events") },
];