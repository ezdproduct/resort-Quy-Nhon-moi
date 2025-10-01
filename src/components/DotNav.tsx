"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { getNavLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from '@/contexts/TranslationContext';

export const DotNav = () => {
  const { t } = useTranslation();
  const navLinks = getNavLinks(t);
  // Lọc chỉ các liên kết neo (#) cho scroll spy
  const sectionIds = navLinks
    .map(link => link.href)
    .filter(href => href.startsWith('#'));
  const activeId = useScrollSpy(sectionIds, { rootMargin: "-30% 0% -70% 0%" });

  return (
    <TooltipProvider>
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <ul className="space-y-4">
          {navLinks.map((link) => (
            // Chỉ hiển thị các chấm điều hướng cho các liên kết neo
            link.href.startsWith('#') && (
              <li key={link.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      className={cn(
                        "block w-2 h-2 rounded-full transition-all duration-300", // Kích thước nhỏ hơn
                        activeId === link.href.substring(1)
                          ? "bg-neutral-13 opacity-70 outline outline-1 outline-white scale-125" // Active state
                          : "bg-neutral-13 opacity-20 hover:opacity-70 hover:outline hover:outline-1 hover:outline-white hover:scale-125" // Inactive and hover state
                      )}
                      aria-label={`Scroll to ${link.label}`}
                    >
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="left"
                    className="bg-darkblue-1 text-darkblue-5 px-4 py-2 rounded-sm text-xl font-public-sans font-normal leading-7 whitespace-nowrap" // Cập nhật UI tooltip
                  >
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          ))}
        </ul>
      </nav>
    </TooltipProvider>
  );
};