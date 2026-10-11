import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Car,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BRAND_INFO, FAQS } from '../data/salonData';

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

export const ContactLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Location & Studio Details
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            Visit the <span className="italic text-[#C5A572]">Atelier</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            Conveniently situated along Beverly Boulevard with complimentary valet arrival and discreet private suite entrances.
          </p>
        </div>

        {/* Top Grid: Location Card & Architectural Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left Column: Address, Valet & Quick Details */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-[#E9DDD1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#C5A572] mb-3">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Atelier Flagship
                </span>
              </div>

              <h3 className="font-serif text-2xl font-light text-[#28201D] mb-6">
                ÉLAN Studio Beverly Hills
              </h3>

              <div className="space-y-6 text-xs sm:text-sm text-[#28201D]/80 font-light">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60 font-medium">
                      Studio Address
                    </div>
                    <div className="text-sm text-[#28201D] font-normal mt-0.5">
                      {BRAND_INFO.address}
                    </div>
                    <div className="text-[11px] text-[#28201D]/60 mt-1">
                      Second floor above the promenade garden
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60 font-medium">
                      Direct Atelier Line
                    </div>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-sm text-[#28201D] hover:text-[#C5A572] transition-colors font-normal mt-0.5 block"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60 font-medium">
                      Concierge Desk
                    </div>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm text-[#28201D] hover:text-[#C5A572] transition-colors font-normal mt-0.5 block"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Car className="w-5 h-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60 font-medium">
                      Parking & Arrival
                    </div>
                    <div className="text-xs text-[#28201D]/75 mt-0.5">
                      Complimentary valet parking available at the building courtyard. Private subterranean parking for VIP suite bookings.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 mt-8 border-t border-[#E9DDD1] flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-[#28201D]/60">
                Follow The Atelier
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#F8F4EF] hover:bg-[#28201D] text-[#28201D] hover:text-[#C5A572] border border-[#E9DDD1] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#F8F4EF] hover:bg-[#28201D] text-[#28201D] hover:text-[#C5A572] border border-[#E9DDD1] transition-colors text-xs font-serif italic"
                  aria-label="Pinterest"
                >
                  P
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Map Placeholder (Not a fake working map) */}
          <div className="lg:col-span-7 relative min-h-[360px] bg-[#28201D] border border-[#C5A572]/40 overflow-hidden shadow-lg flex flex-col justify-between p-8 sm:p-10">
            {/* Background Stylized Map Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#C5A572"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Top Label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A572] bg-[#191412] px-3 py-1 border border-[#C5A572]/30">
                Interactive Map Placeholder
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#E9DDD1]/60">
                Demo Studio Locator
              </span>
            </div>

            {/* Center Pin Artwork */}
            <div className="relative z-10 my-auto text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#191412] border-2 border-[#C5A572] shadow-2xl mb-4 animate-pulse">
                <Navigation className="w-7 h-7 text-[#C5A572]" />
              </div>
              <h4 className="font-serif text-2xl text-white font-light tracking-wide">
                ÉLAN BEAUTY STUDIO
              </h4>
              <p className="text-xs text-[#E9DDD1]/75 max-w-sm mx-auto mt-1 font-light">
                Beverly Hills Promenade • California, USA
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-4 border-t border-[#C5A572]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-[#E9DDD1]/70 font-light">
                * Real Google Maps / Apple Maps integration embeds here upon deployment.
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A572] text-[#28201D] hover:bg-[#DFCAAB] text-[11px] uppercase tracking-wider font-medium transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A572] font-semibold">
              Guest Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#28201D] mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E9DDD1] hover:border-[#C5A572]/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-[#28201D] font-normal">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C5A572] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#28201D]/75 font-light leading-relaxed border-t border-[#E9DDD1]/40 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
