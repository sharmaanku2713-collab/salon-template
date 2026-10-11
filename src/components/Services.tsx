import React, { useState } from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import type { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectServiceToBook: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Rituals' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'skin', label: 'Skincare & Facials' },
    { id: 'bridal', label: 'Bridal & Occasion' },
    { id: 'nails', label: 'Nails & Artistry' },
    { id: 'spa', label: 'Spa & Relaxation' },
  ];

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((item) => item.category === activeFilter);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F8F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Curated Menu of Services
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            Your Ritual of <span className="italic text-[#C5A572]">Beauty</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            Each experience is individually tailored by our master artisans using clean botanical
            formulations and time-honored European atelier techniques.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#28201D] text-[#F8F4EF] shadow-sm'
                    : 'bg-white/80 text-[#28201D]/70 border border-[#E9DDD1] hover:border-[#C5A572] hover:text-[#28201D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid: 6 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#E9DDD1] hover:border-[#C5A572]/60 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col overflow-hidden"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#E9DDD1]/40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Duration Tag */}
                <div className="absolute top-4 right-4 bg-[#F8F4EF]/90 backdrop-blur-sm text-[#28201D] text-[10px] uppercase tracking-widest px-2.5 py-1 flex items-center gap-1 border border-[#C5A572]/30">
                  <Clock className="w-3 h-3 text-[#C5A572]" />
                  <span>{service.duration}</span>
                </div>

                {/* Pricing / Consultation Note */}
                <div className="absolute bottom-3 left-4 text-white text-[11px] tracking-wider flex items-center gap-1.5 font-light">
                  <Sparkles className="w-3 h-3 text-[#C5A572]" />
                  <span>{service.priceNote}</span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#28201D] group-hover:text-[#C5A572] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#28201D]/75 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E9DDD1]/70 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#28201D] hover:text-[#C5A572] transition-colors group/link cursor-pointer focus:outline-none"
                  >
                    <span>Discover Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A572] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectServiceToBook(service.title)}
                    className="text-[11px] uppercase tracking-wider text-[#C5A572] hover:text-[#28201D] font-medium transition-colors cursor-pointer"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Advisory */}
        <div className="mt-14 p-6 sm:p-8 bg-[#E9DDD1]/40 border border-[#C5A572]/30 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-[#28201D] mb-2">
            “Seeking a fully bespoke bridal entourage or transformation package?”
          </p>
          <p className="text-xs text-[#28201D]/75 font-light mb-4">
            Our atelier coordinator will design a private itinerary featuring champagne service, dedicated styling suites, and customized scheduling.
          </p>
          <button
            onClick={() => onSelectServiceToBook('Custom Atelier Package')}
            className="text-xs uppercase tracking-[0.2em] font-medium text-[#28201D] underline underline-offset-4 hover:text-[#C5A572] transition-colors cursor-pointer"
          >
            Enquire for Private Suite Itinerary →
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceName) => {
          setSelectedService(null);
          onSelectServiceToBook(serviceName);
        }}
      />
    </section>
  );
};
