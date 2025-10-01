import { MapPin, Mail, User, Instagram, Facebook, Youtube } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

export const Footer = () => {
  const { t } = useTranslation();

  const footerSections = {
    [t('footer_accommodation_title')]: [
      t('footer_accommodation_deluxe_ocean_view'), t('footer_accommodation_deluxe_garden_view'), t('footer_accommodation_family_suite_sea_view'), 
      t('footer_accommodation_premier_suite_sea_view'), t('footer_accommodation_villa_sea_beachfront_pool_3_bedroom'), 
      t('footer_accommodation_villa_sea_vip_beachfront_pool_3_bedroom'), t('footer_accommodation_dormroom_ocean_view')
    ],
    [t('footer_dining_title')]: [t('footer_dining_drink_the_ocean_coffee'), t('footer_dining_food_the_ocean_restaurant')],
    [t('footer_experiences_title')]: [t('footer_experiences_swimming_pool'), t('footer_experiences_beach'), t('footer_experiences_spa'), t('footer_experiences_kids_area'), t('footer_experiences_breakfast_buffet'), t('footer_experiences_paddleboarding')],
    [t('footer_events_title')]: [t('footer_events_wedding'), t('footer_events_team_building'), t('footer_events_meetings')],
    [t('footer_offers_title')]: [],
  };

  const contactInfo = [
    { icon: <MapPin size={16} />, text: t('footer_contact_address') },
    { icon: <Mail size={16} />, text: t('footer_contact_email') },
    { icon: <User size={16} />, text: t('footer_contact_phone') },
  ];

  const socialLinks = [
    { icon: <Instagram size={16} />, name: t('footer_social_instagram') },
    { icon: <Facebook size={16} />, name: t('footer_social_facebook') },
    { icon: <Youtube size={16} />, name: t('footer_social_youtube') },
  ];

  return (
    <footer className="bg-[#0A3E54] text-white font-sans rounded-t-3xl">
      <div className="container mx-auto px-4 py-16">
        {/* Logo for Mobile */}
        <div className="mb-12 md:hidden">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/icons/Isolation_Mode.svg"
              alt="Resort Logo"
              className="h-12 w-12"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div>
              <span className="block text-base font-semibold tracking-wider">QUY NHON SEA</span>
              <span className="block text-sm tracking-widest">RESORT</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {/* Column 1 */}
          <div className="space-y-10">
            <FooterSection title={t('footer_accommodation_title')} links={footerSections[t('footer_accommodation_title')]} />
            <FooterSection title={t('footer_dining_title')} links={footerSections[t('footer_dining_title')]} />
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            <FooterSection title={t('footer_experiences_title')} links={footerSections[t('footer_experiences_title')]} />
            <FooterSection title={t('footer_events_title')} links={footerSections[t('footer_events_title')]} />
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            <FooterSection title={t('footer_offers_title')} links={footerSections[t('footer_offers_title')]} />
            <div>
              <h3 className="text-lg font-semibold tracking-widest border-b border-white/20 pb-2 mb-4 flex justify-between items-center">
                {t('footer_contact_title')}
                <img src="/icons/shellfish.svg" alt="icon" className="h-4 w-4 opacity-50" style={{ filter: 'brightness(0) invert(1)' }}/>
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 md:mb-0 text-center sm:text-left">
            <span>{t('footer_social_follow')}</span>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <a key={social.name} href="#" className="flex items-center gap-1 hover:text-[#ECA521] transition-colors">
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
               <a href="#" className="flex items-center gap-1 hover:text-[#ECA521] transition-colors">
                  <img src="/icons/shellfish.svg" alt="Tripadvisor" className="h-4 w-4 opacity-80" style={{ filter: 'brightness(0) invert(1)' }}/>
                  <span className="hidden sm:inline">{t('footer_social_tripadvisor')}</span>
                </a>
            </div>
          </div>
          <p>{t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-lg font-semibold tracking-widest border-b border-white/20 pb-2 mb-4 flex justify-between items-center">
      {title}
      <img src="/icons/shellfish.svg" alt="icon" className="h-4 w-4 opacity-50" style={{ filter: 'brightness(0) invert(1)' }}/>
    </h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-sm text-gray-300 hover:text-[#ECA521] transition-colors">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);