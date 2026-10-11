import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Services } from './components/Services';
import { SignatureExperience } from './components/SignatureExperience';
import { Gallery } from './components/Gallery';
import { MeetTheExperts } from './components/MeetTheExperts';
import { Testimonials } from './components/Testimonials';
import { AboutSalon } from './components/AboutSalon';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [selectedSpecialistForBooking, setSelectedSpecialistForBooking] = useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    scrollToAppointment();
  };

  const handleSelectSpecialist = (specialistName: string) => {
    setSelectedSpecialistForBooking(specialistName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#28201D] flex flex-col antialiased selection:bg-[#C5A572] selection:text-white">
      {/* Refined Sticky Navbar */}
      <Navbar onBookClick={scrollToAppointment} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToServices}
          onBookClick={scrollToAppointment}
        />

        {/* 2. Brand Introduction */}
        <BrandIntro />

        {/* 3. Services Section */}
        <Services onSelectServiceToBook={handleSelectService} />

        {/* 4. Signature Experience (Dark Espresso Feature) */}
        <SignatureExperience onDiscoverClick={scrollToAppointment} />

        {/* 5. Editorial Gallery / Transformations Lookbook */}
        <Gallery />

        {/* 6. Meet The Experts */}
        <MeetTheExperts onSelectExpertToBook={handleSelectSpecialist} />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. About the Salon / Our Story */}
        <AboutSalon onBookClick={scrollToAppointment} />

        {/* 9. Appointment Section */}
        <AppointmentSection
          initialService={selectedServiceForBooking}
          initialSpecialist={selectedSpecialistForBooking}
        />

        {/* 10. Contact and Location */}
        <ContactLocation />
      </main>

      {/* Footer with Configurable ASAI LABS Credit */}
      <Footer />

      {/* Floating Scroll to Top */}
      <BackToTop />
    </div>
  );
}

export default App;
