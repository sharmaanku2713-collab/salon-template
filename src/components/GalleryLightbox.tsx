import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#191412]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30 text-white">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A572]">
          <Sparkles className="w-4 h-4" />
          <span>
            {currentIndex + 1} / {items.length} — {currentItem.categoryLabel}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 bg-[#28201D] hover:bg-[#C5A572] hover:text-[#28201D] text-white border border-[#C5A572]/40 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#28201D]/80 hover:bg-[#C5A572] hover:text-[#28201D] text-white border border-[#C5A572]/40 transition-all cursor-pointer focus:outline-none hidden sm:block"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#28201D]/80 hover:bg-[#C5A572] hover:text-[#28201D] text-white border border-[#C5A572]/40 transition-all cursor-pointer focus:outline-none hidden sm:block"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden border border-[#C5A572]/30 shadow-2xl bg-black">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl px-4">
          <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mb-1">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E9DDD1]/80 font-light leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
