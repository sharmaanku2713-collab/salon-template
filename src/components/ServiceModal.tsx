import React, { useEffect } from 'react';
import { X, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#28201D]/75 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative bg-[#F8F4EF] w-full max-w-2xl border border-[#C5A572]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/90 via-[#28201D]/30 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#C5A572] font-semibold mb-1">
              Ritual Spotlight
            </span>
            <h3 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-light">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#28201D]">
          <div>
            <p className="font-serif italic text-base sm:text-lg text-[#C5A572] mb-2">
              “{service.tagline}”
            </p>
            <p className="text-sm sm:text-base text-[#28201D]/80 leading-relaxed font-light">
              {service.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#E9DDD1] bg-white/60 p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#C5A572]" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60">Treatment Time</div>
                <div className="text-xs sm:text-sm font-medium">{service.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A572]" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#28201D]/60">Investment</div>
                <div className="text-xs sm:text-sm font-medium text-[#C5A572]">{service.priceNote}</div>
              </div>
            </div>
          </div>

          {/* Treatment Inclusions */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#28201D] mb-3">
              What This Experience Includes
            </h4>
            <ul className="space-y-2.5">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#28201D]/80 font-light">
                  <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#C5A572]/20 text-[#C5A572] shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Courtesy Note */}
          <div className="p-3.5 bg-[#E9DDD1]/40 border-l-2 border-[#C5A572] text-[11px] text-[#28201D]/75 leading-relaxed">
            All appointments include our signature welcome beverage service and unhurried consultation to tailor product formulations specifically to your hair and skin profile.
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-[#F8F4EF] border-t border-[#E9DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#28201D]/60 tracking-wider">
            Pricing is tailored to length & diagnostic consultation
          </div>
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
          >
            <span>Book This Ritual</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
