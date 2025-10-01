import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from '@/contexts/TranslationContext';
import { getNavLinks } from '@/constants/navigation';
import { Link } from 'react-router-dom';

interface ResortHeaderProps {
  shouldHeaderChangeColor: boolean;
}

export const ResortHeader = ({ shouldHeaderChangeColor }: ResortHeaderProps) => {
  const { t } = useTranslation();
  const navLinks = getNavLinks(t);

  const headerClasses = cn(
    "container mx-auto flex h-16 items-center justify-between rounded-2xl px-4 shadow-lg backdrop-blur-lg sm:px-6 transition-all duration-300",
    "border border-white/20 bg-gradient-to-r from-white/10 via-gray-500/20 to-gray-800/40"
  );

  const logoTextClasses = cn(
    "block text-sm font-semibold tracking-wider",
    shouldHeaderChangeColor ? "text-darkblue-5" : "text-white"
  );
  const logoSubtitleClasses = cn(
    "block text-xs tracking-widest",
    shouldHeaderChangeColor ? "text-darkblue-5" : "text-white"
  );

  const bookButtonClasses = cn(
    "flex items-center gap-1.5 h-10 rounded-lg px-4 text-sm font-medium text-white transition-colors",
    shouldHeaderChangeColor ? "bg-darkblue-5 hover:bg-darkblue-6" : "bg-header-button-default hover:bg-darkblue-5"
  );

  const loginButtonClasses = cn(
    "h-10 rounded-lg px-4 text-sm font-medium",
    shouldHeaderChangeColor ? "text-darkblue-5 hover:bg-gray-100" : "text-white hover:bg-white/20"
  );

  const menuIconFilter = shouldHeaderChangeColor ? "" : "brightness(0) invert(1)";
  const shellfishButtonIconFilter = 'brightness(0) invert(1)'; 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 font-sans">
      <Sheet>
        <div className={headerClasses}>
          
          {/* --- DESKTOP LAYOUT --- */}
          <div className="hidden md:flex w-full items-center">
            <div className="flex-1 flex justify-start items-center gap-4">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(shouldHeaderChangeColor ? "hover:bg-gray-100" : "hover:bg-white/20")}>
                  <img src="/icons/List.svg" alt="Menu" className="h-6 w-6" style={{ filter: menuIconFilter }} />
                </Button>
              </SheetTrigger>
              <LanguageSwitcher shouldHeaderChangeColor={shouldHeaderChangeColor} />
            </div>
            
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={shouldHeaderChangeColor ? "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Isolation_Mode.png" : "/icons/Isolation_Mode.svg"}
                  alt="Resort Logo"
                  className="h-10 w-10"
                  style={{ filter: shouldHeaderChangeColor ? '' : 'brightness(0) invert(1)' }}
                />
                <div className="font-sans">
                  <span className={logoTextClasses}>QUY NHON SEA</span>
                  <span className={logoSubtitleClasses}>RESORT</span>
                </div>
              </Link>
            </div>

            <div className="flex-1 flex items-center justify-end gap-2">
              <Button variant="ghost" className={loginButtonClasses}>
                {t('header_login')}
              </Button>
              <button className={bookButtonClasses}>
                <span>{t('header_book_now')}</span>
                <img src="/icons/shellfish.svg" alt={t('header_book_now')} className="h-4 w-4" style={{ filter: shellfishButtonIconFilter }} />
              </button>
            </div>
          </div>

          {/* --- MOBILE LAYOUT --- */}
          <div className="flex md:hidden w-full justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={shouldHeaderChangeColor ? "https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Isolation_Mode.png" : "/icons/Isolation_Mode.svg"}
                alt="Resort Logo"
                className="h-10 w-10"
                style={{ filter: shouldHeaderChangeColor ? '' : 'brightness(0) invert(1)' }}
              />
              <div className="font-sans">
                <span className={logoTextClasses}>QUY NHON SEA</span>
                <span className={logoSubtitleClasses}>RESORT</span>
              </div>
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(shouldHeaderChangeColor ? "hover:bg-gray-100" : "hover:bg-white/20")}>
                <img src="/icons/List.svg" alt={t('header_menu')} className="h-6 w-6" style={{ filter: menuIconFilter }} />
              </Button>
            </SheetTrigger>
          </div>
        </div>

        <SheetContent side="left" className="bg-gray-900/90 text-white border-gray-700 backdrop-blur-lg">
          <SheetHeader>
            <SheetTitle className="text-white">{t('header_menu')}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="text-lg hover:text-sky-300 transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="text-lg hover:text-sky-300 transition-colors">
                    {link.label}
                  </Link>
                )}
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Button variant="ghost" className="text-lg text-white hover:text-sky-300 justify-start p-0 h-auto">
                {t('header_login')}
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <button className="mt-4 flex w-full items-center justify-center gap-1.5 h-12 rounded-lg bg-lightblue-5 px-4 text-sm font-medium text-white transition-colors hover:bg-darkblue-5">
                <span>{t('header_book_now')}</span>
                <img src="/icons/shellfish.svg" alt={t('header_book_now')} className="h-4 w-4" style={{ filter: 'brightness(0) invert(1)' }} />
              </button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};