import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Eye, EyeOff } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/salonData';

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const [showAsaiCredit, setShowAsaiCredit] = useState(true);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#28201D] text-[#F8F4EF] pt-20 pb-12 border-t border-[#C5A572]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] font-light text-[#F8F4EF] block">
                ÉLAN
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#C5A572] font-semibold uppercase -mt-0.5 block">
                BEAUTY STUDIO
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#E9DDD1]/90">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#E9DDD1]/70 font-light leading-relaxed max-w-sm">
              An unhurried sanctuary offering bespoke hair styling, French balayage, clinical facial rituals, and timeless bridal artistry in Beverly Hills.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none border border-[#C5A572]/40 flex items-center justify-center text-[#E9DDD1] hover:text-[#C5A572] hover:border-[#C5A572] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none border border-[#C5A572]/40 flex items-center justify-center text-[#E9DDD1] hover:text-[#C5A572] hover:border-[#C5A572] transition-colors text-xs font-serif italic"
                aria-label="Pinterest"
              >
                P
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none border border-[#C5A572]/40 flex items-center justify-center text-[#E9DDD1] hover:text-[#C5A572] hover:border-[#C5A572] transition-colors text-xs font-serif font-bold"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {/* Navigation Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A572]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9DDD1]/75">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => scrollToSection(e, '#story')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollToSection(e, '#experience')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Signature Experience
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, '#gallery')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Lookbook Gallery
                </a>
              </li>
              <li>
                <a
                  href="#experts"
                  onClick={(e) => scrollToSection(e, '#experts')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Meet The Artists
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, '#testimonials')}
                  className="hover:text-[#C5A572] transition-colors"
                >
                  Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services Directory (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A572]">
              Atelier Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9DDD1]/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className="hover:text-[#C5A572] transition-colors block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A572]">
              Concierge Placeholders
            </h4>
            <div className="space-y-3 text-xs text-[#E9DDD1]/75 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A572] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A572] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#C5A572]">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A572] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#C5A572]">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#C5A572]/90">
                Mon–Fri: 9:00 AM – 7:30 PM
                <br />
                Sat: 8:30 AM – 6:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer & Configurable ASAI LABS Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E9DDD1]/60">
          <div>
            © {new Date().getFullYear()} ÉLAN BEAUTY STUDIO. All rights reserved. Client Template Demo.
          </div>

          {/* Configurable ASAI LABS Watermark & Pitch Toggle */}
          <div className="flex items-center gap-3">
            {showAsaiCredit && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] border border-[#C5A572]/30 text-[11px] text-[#E9DDD1]">
                <Sparkles className="w-3 h-3 text-[#C5A572]" />
                <span>Website concept by <strong className="text-[#C5A572] font-semibold">ASAI LABS</strong></span>
              </div>
            )}

            {/* Toggle Button for Client Presentations */}
            <button
              onClick={() => setShowAsaiCredit(!showAsaiCredit)}
              className="p-1 text-[#E9DDD1]/40 hover:text-[#C5A572] transition-colors flex items-center gap-1 text-[10px] uppercase tracking-wider cursor-pointer"
              title="Toggle ASAI LABS credit visibility for client pitch"
            >
              {showAsaiCredit ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              <span>{showAsaiCredit ? 'Hide Pitch Credit' : 'Show Credit'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
