import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryLightbox } from './GalleryLightbox';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'skin', label: 'Skincare' },
    { id: 'studio', label: 'Atelier Interior' },
    { id: 'nails', label: 'Nail Art' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F8F4EF] border-b border-[#E9DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Visual Showcase
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            The Art of <span className="italic text-[#C5A572]">Transformation</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            A curated lookbook of our signature editorial cuts, dimensional balayage, dewy bridal finishes, and peaceful studio environments.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#28201D] text-[#F8F4EF]'
                    : 'bg-white/80 text-[#28201D]/70 border border-[#E9DDD1] hover:border-[#C5A572] hover:text-[#28201D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-[#28201D] overflow-hidden cursor-pointer border border-[#E9DDD1] hover:border-[#C5A572] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Image with zoom effect */}
              <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#28201D]/90 via-[#28201D]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 bg-[#F8F4EF]/90 text-[#28201D] border border-[#C5A572]/40 backdrop-blur-sm">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover Expand Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 bg-[#28201D]/80 text-[#C5A572] border border-[#C5A572]/50">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg sm:text-xl text-white font-light mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E9DDD1]/80 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-[#28201D]/60 tracking-wider">
          Click on any look to view editorial full-screen details and treatment composition.
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filteredItems.length : null
          )
        }
      />
    </section>
  );
};
