import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface AboutSalonProps {
  onBookClick: () => void;
}

export const AboutSalon: React.FC<AboutSalonProps> = ({ onBookClick }) => {
  const highlights = [
    'Private individual dressing rooms with personalized acoustic tuning',
    'Certified European mastercolorists & clinical barrier repair aestheticians',
    'Complimentary diagnostic scalp & complexion scanning before treatments',
    'Sustainable, sulfate-free European botanical formulations',
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-7">
            {/* Small Gold Accent & Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A572]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
                The ÉLAN Heritage
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#28201D] leading-tight mb-6">
              More Than a Beauty{' '}
              <span className="italic text-[#C5A572]">Appointment.</span>
            </h2>

            {/* Brand Story Prose */}
            <div className="space-y-4 text-sm sm:text-base text-[#28201D]/80 font-light leading-relaxed mb-8">
              <p>
                Founded on the belief that self-care should be unhurried and deeply personalized,
                ÉLAN Beauty Studio was conceived as an intimate sanctuary in the heart of the city.
                We stepped away from the bustling, hurried salon archetype to build an atelier where
                every mirror, warm travertine surface, and botanical formula is chosen with intention.
              </p>
              <p>
                Our philosophy balances runway-trained precision with everyday wearability. We listen
                first—studying your facial harmony, lifestyle rhythms, and natural movement—before
                recommending bespoke services that honor who you are.
              </p>
            </div>

            {/* Atelier Inclusions Checklist */}
            <div className="space-y-3 mb-10 pt-4 border-t border-[#E9DDD1]">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#C5A572]/20 text-[#C5A572] shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="text-xs sm:text-sm text-[#28201D]/80 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Tasteful CTA */}
            <div>
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span>Reserve Your Atelier Experience</span>
                <ArrowRight className="w-4 h-4 text-[#C5A572] group-hover:text-[#28201D] transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Column: Interior Architecture Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Interior Photo */}
              <div className="aspect-[3/4] overflow-hidden border border-[#C5A572]/30 shadow-2xl bg-[#E9DDD1]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                  alt="ÉLAN Beauty Studio quiet styling atelier"
                  className="w-full h-full object-cover object-center filter brightness-[0.97] hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Gold Accent Corner & Floating Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#C5A572] pointer-events-none" />
              
              <div className="absolute -bottom-6 -left-6 bg-[#28201D] text-[#F8F4EF] p-5 sm:p-6 border border-[#C5A572]/40 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 text-[#C5A572] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                    Atelier Standard
                  </span>
                </div>
                <div className="font-serif text-lg text-white">
                  Bespoke Beauty Suites
                </div>
                <div className="text-[11px] text-[#E9DDD1]/70 font-light mt-0.5">
                  Designed for peaceful restoration and unhurried focus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
