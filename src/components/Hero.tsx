import React from 'react';
import { ArrowDown, Compass, CalendarCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#F8F4EF] overflow-hidden">
      {/* Background Decorative Gradient & Grain Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EF] via-[#F8F4EF]/85 to-transparent z-10 lg:w-3/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EF] via-transparent to-transparent z-10 h-28 bottom-0" />

      {/* Hero Image Container - High-End Editorial Split */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=85"
          alt="ÉLAN Beauty Studio editorial model with luminous hair styling"
          className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.03] scale-105 animate-in fade-in duration-1000"
          loading="eager"
        />
        {/* Subtle Warm Tone Filter */}
        <div className="absolute inset-0 bg-[#28201D]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/40 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-20 w-full">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 border border-[#C5A572]/40 bg-[#F8F4EF]/90 backdrop-blur-sm rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572] animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#28201D]">
              {BRAND_INFO.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#28201D] leading-[1.08] tracking-[-0.01em] mb-6">
            Your Beauty.{' '}
            <span className="italic font-normal text-[#C5A572] block sm:inline">
              Your Signature.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#28201D]/80 leading-relaxed font-light mb-10 max-w-lg">
            {BRAND_INFO.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group"
            >
              <CalendarCheck className="w-4 h-4 text-[#C5A572] group-hover:text-[#28201D] transition-colors" />
              <span>Book Your Visit</span>
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-[#28201D] border border-[#28201D]/50 hover:border-[#C5A572] hover:bg-[#F8F4EF]/80 text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 cursor-pointer group"
            >
              <Compass className="w-4 h-4 text-[#28201D]/70 group-hover:text-[#C5A572] transition-colors" />
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Trust & Luxury Highlights */}
          <div className="pt-8 border-t border-[#E9DDD1] grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#28201D] font-normal">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#28201D]/60 mt-0.5">
                Bespoke Consultations
              </div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#C5A572] font-normal">Private</div>
              <div className="text-[11px] uppercase tracking-wider text-[#28201D]/60 mt-0.5">
                VIP Styling Suites
              </div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#28201D] font-normal">Cruelty-Free</div>
              <div className="text-[11px] uppercase tracking-wider text-[#28201D]/60 mt-0.5">
                European Botanical Care
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#28201D]">Scroll</span>
        <button
          onClick={onExploreClick}
          aria-label="Scroll to services"
          className="p-1 text-[#C5A572] hover:text-[#28201D] transition-colors animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
