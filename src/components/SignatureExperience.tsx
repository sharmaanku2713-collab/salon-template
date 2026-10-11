import React from 'react';
import { Sparkles, Wine, VolumeX, Leaf, ArrowRight } from 'lucide-react';

interface SignatureExperienceProps {
  onDiscoverClick: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({
  onDiscoverClick,
}) => {
  const pillars = [
    {
      icon: <VolumeX className="w-5 h-5 text-[#C5A572]" />,
      title: 'Private Acoustic Suites',
      desc: 'Quiet rooms engineered for peaceful privacy, uninterrupted client calls, or silent meditative appointments.',
    },
    {
      icon: <Wine className="w-5 h-5 text-[#C5A572]" />,
      title: 'French Champagne & Artisan Tea',
      desc: 'Enjoy chilled Veuve Clicquot or freshly steeped herbal tisanes poured in handblown glassware upon arrival.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#C5A572]" />,
      title: 'Clean Botanical Formulas',
      desc: '100% cruelty-free, sustainable luxury European brands formulated without harsh sulfates or parabens.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C5A572]" />,
      title: 'Diagnostic Diagnostic Consultation',
      desc: 'Every session includes a digital scalp and complexion micro-scan to formulate targeted salon therapies.',
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-[#28201D] text-[#F8F4EF] py-24 sm:py-32 overflow-hidden border-y border-[#C5A572]/20"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C99A98]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Editorial Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#C5A572]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="ÉLAN luxury spa relaxation atmosphere with calming waters and warm stone accents"
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191412]/80 via-transparent to-transparent" />

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#191412]/90 backdrop-blur-md border border-[#C5A572]/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A572] block mb-1">
                  The ÉLAN Standard
                </span>
                <p className="font-serif italic text-sm text-[#E9DDD1]">
                  “We don’t rush beauty. We create the space where you can exhale and feel thoroughly indulged.”
                </p>
              </div>
            </div>

            {/* Subtle Gold Accent Corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-[#C5A572] pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy & Sensory Touchpoints */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A572]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
                The Signature Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F8F4EF] leading-tight mb-6">
              Your Moment.{' '}
              <span className="italic text-[#C5A572]">Your Ritual.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#E9DDD1]/85 leading-relaxed font-light mb-10 max-w-xl">
              Take a pause from the everyday and enjoy beauty services shaped around your style,
              comfort, and individuality.
            </p>

            {/* 4 Sensory Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 bg-white/[0.04] border border-[#C5A572]/20 hover:border-[#C5A572]/60 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="p-2 bg-[#191412] inline-block mb-3 border border-[#C5A572]/30">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#F8F4EF] font-medium mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#E9DDD1]/70 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A572] text-[#28201D] hover:bg-[#DFCAAB] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Discover the Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
