import React from 'react';
import { HeartHandshake, Wand2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export const BrandIntro: React.FC = () => {
  const icons = [
    <HeartHandshake className="w-5 h-5 text-[#C5A572]" key="care" />,
    <Wand2 className="w-5 h-5 text-[#C5A572]" key="artistry" />,
    <Sparkles className="w-5 h-5 text-[#C5A572]" key="experience" />,
  ];

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery & Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10">
              {/* Main Image with refined framing */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden shadow-2xl border border-[#C5A572]/20">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                  alt="ÉLAN Beauty Studio interior with travertine details and warm lighting"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Secondary Overlay Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#28201D] text-[#F8F4EF] p-6 sm:p-7 shadow-xl border border-[#C5A572]/30 max-w-xs sm:max-w-sm hidden sm:block">
                <div className="font-serif italic text-lg text-[#C5A572] mb-1">
                  “A quiet sanctuary of unhurried elegance.”
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#E9DDD1]/70">
                  ÉLAN Atelier Architectural Suite
                </div>
              </div>
            </div>

            {/* Subtle background ornamental frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#C5A572]/30 -z-0 hidden md:block" />
          </div>

          {/* Right Column: Copy & Principles */}
          <div className="lg:col-span-6 lg:pl-6">
            {/* Small Decorative Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A572]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
                Our Atelier Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] leading-tight mb-6 tracking-tight">
              Beauty, Thoughtfully <span className="italic text-[#C5A572]">Redefined.</span>
            </h2>

            {/* Brand Story Lead */}
            <p className="text-base sm:text-lg text-[#28201D]/80 leading-relaxed font-light mb-10">
              At ÉLAN, every detail matters. From personalized consultations to carefully chosen treatments,
              our team creates an experience that celebrates your individuality and helps you feel your best.
            </p>

            {/* Three Brand Principles */}
            <div className="space-y-6 pt-4 border-t border-[#E9DDD1]">
              {BRAND_INFO.principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="group p-5 bg-white/70 hover:bg-white border border-[#E9DDD1] hover:border-[#C5A572]/50 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#F8F4EF] rounded-none border border-[#C5A572]/30 group-hover:bg-[#28201D] group-hover:text-[#F8F4EF] transition-colors">
                      {icons[index]}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#28201D] group-hover:text-[#C5A572] transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#28201D]/75 leading-relaxed font-light mt-1">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Atelier Note */}
            <div className="mt-8 flex items-center gap-3 text-xs text-[#28201D]/70 tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#C5A572] shrink-0" />
              <span>Complimentary skin & hair diagnostic included with all reservations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
