import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experts', href: '#experts' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#28201D] text-[#E9DDD1] text-xs py-2 px-4 border-b border-[#C5A572]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A572]" />
            <span className="tracking-wider uppercase text-[10px] md:text-xs">
              Complimentary French Champagne & Diagnostic Consultation with Every Visit
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] tracking-wider">
            <span className="text-[#C5A572]">Beverly Hills Atelier</span>
            <span>Mon–Sat 9am–7:30pm</span>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#E9DDD1] hover:text-[#C5A572] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A572]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F4EF]/95 backdrop-blur-md shadow-sm border-b border-[#C5A572]/25 py-3.5'
            : 'bg-[#F8F4EF]/85 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="group flex flex-col items-start focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-light text-[#28201D] group-hover:text-[#C5A572] transition-colors">
                ÉLAN
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#C5A572] font-medium uppercase -mt-0.5">
                BEAUTY STUDIO
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.18em] text-[#28201D]/80 hover:text-[#C5A572] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A572] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBookClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] border border-[#28201D] hover:border-[#C5A572] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm rounded-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book an Appointment</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#28201D] hover:text-[#C5A572] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] border-b border-[#C5A572]/20 opacity-100' : 'max-h-0 opacity-0'
          } bg-[#F8F4EF]/98 backdrop-blur-lg`}
        >
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-sm uppercase tracking-[0.2em] text-[#28201D] hover:text-[#C5A572] py-2 border-b border-[#E9DDD1]/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
              <div className="mt-3 text-center text-xs text-[#28201D]/60 tracking-wider">
                {BRAND_INFO.phone} • {BRAND_INFO.address.split(',')[0]}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
