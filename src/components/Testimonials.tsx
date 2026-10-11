import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Guest Reflections
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            Loved for the <span className="italic text-[#C5A572]">Details</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            Genuine hospitality, bespoke artistry, and tranquil appointments remembered by our guests.
          </p>

          {/* Illustrative Demo Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E9DDD1]/50 border border-[#C5A572]/30 text-[10px] uppercase tracking-wider text-[#28201D]/75">
            <Info className="w-3.5 h-3.5 text-[#C5A572]" />
            <span>Illustrative Demo Reviews: Created for template presentation purposes</span>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white p-8 sm:p-9 border border-[#E9DDD1] hover:border-[#C5A572]/70 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Gold Quote Ornament */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#C5A572] text-[#C5A572]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E9DDD1] stroke-[1.5]" />
                </div>

                {/* Service Tag */}
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#C5A572] mb-3">
                  {testimonial.service}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="font-serif italic text-base sm:text-lg text-[#28201D]/90 leading-relaxed font-light mb-8">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E9DDD1] flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg font-medium text-[#28201D]">
                    {testimonial.clientName}
                  </div>
                  <div className="text-[11px] text-[#28201D]/60 tracking-wider">
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#28201D]/50">
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet hospitality banner */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#28201D]/60">
            Dedicated 1-on-1 Stylist Focus • Private Suites • Unhurried Consultations
          </p>
        </div>
      </div>
    </section>
  );
};
