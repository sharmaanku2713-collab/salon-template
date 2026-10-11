import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  X,
  Send,
} from 'lucide-react';
import { SERVICES, TEAM_MEMBERS, BRAND_INFO } from '../data/salonData';
import type { BookingFormData } from '../types';

interface AppointmentSectionProps {
  initialService?: string;
  initialSpecialist?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialService = '',
  initialSpecialist = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    specialist: initialSpecialist,
    date: '',
    time: '',
    message: '',
  });

  // Track if prefilled from outside
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialSpecialist) {
      setFormData((prev) => ({ ...prev, specialist: initialSpecialist }));
    }
  }, [initialSpecialist]);

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const timeSlots = [
    '09:30 AM — Morning Calm',
    '11:00 AM — Midday Ritual',
    '01:30 PM — Afternoon Suite',
    '03:00 PM — Tea Hour',
    '05:00 PM — Evening Glow',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a preferred service or consultation';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a preferred appointment date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief luxury processing animation (frontend only)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      specialist: '',
      date: '',
      time: '',
      message: '',
    });
    setErrors({});
  };

  // Compute minimum date (today)
  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-24 sm:py-32 bg-[#F8F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A572]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A572]">
              Reservations & Inquiries
            </span>
            <span className="w-5 h-[1px] bg-[#C5A572]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#28201D] mb-5 tracking-tight">
            Reserve Your <span className="italic text-[#C5A572]">Atelier Visit</span>
          </h2>

          <p className="text-sm sm:text-base text-[#28201D]/75 leading-relaxed font-light">
            Submit your appointment request below. Our concierge team reviews each schedule to ensure
            adequate time for your bespoke consultation and ritual.
          </p>

          <div className="mt-4 text-[11px] text-[#28201D]/60 tracking-wider">
            Frontend Prototype • No payments or personal data stored • Connects to your booking CRM
          </div>
        </div>

        {/* Two-Column Grid: Form on Left, Replaceable Contact Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E9DDD1] shadow-sm relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E9DDD1]">
              <div>
                <h3 className="font-serif text-2xl font-light text-[#28201D]">
                  Appointment Request Form
                </h3>
                <p className="text-xs text-[#28201D]/60 font-light mt-0.5">
                  Fields marked with an asterisk (*) are required.
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-[#C5A572]" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Genevieve Laurent"
                    className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] placeholder-[#28201D]/40 focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 019-2834"
                    className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] placeholder-[#28201D]/40 focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. guest@elanbeauty.demo"
                  className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] placeholder-[#28201D]/40 focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                    errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                  }`}
                />
                {errors.email && (
                  <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Row 3: Service Selection & Preferred Specialist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Selected Service *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                      errors.service ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                    }`}
                  >
                    <option value="">Select a Service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.duration})
                      </option>
                    ))}
                    <option value="Custom Atelier Package">Custom Atelier Package / Bridal</option>
                    <option value="Complimentary Diagnostic Consultation">
                      Complimentary Diagnostic Consultation
                    </option>
                  </select>
                  {errors.service && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.service}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="specialist"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Preferred Specialist
                  </label>
                  <select
                    id="specialist"
                    value={formData.specialist}
                    onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EF]/50 border border-[#E9DDD1] text-sm text-[#28201D] focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors"
                  >
                    <option value="">First Available Master Artisan</option>
                    {TEAM_MEMBERS.map((tm) => (
                      <option key={tm.id} value={tm.name}>
                        {tm.name} — {tm.role.split('&')[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      min={todayDateString}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                        errors.date ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.date}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                  >
                    Preferred Time Slot *
                  </label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#F8F4EF]/50 border text-sm text-[#28201D] focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors ${
                      errors.time ? 'border-red-400 bg-red-50/20' : 'border-[#E9DDD1]'
                    }`}
                  >
                    <option value="">Select Time Window</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <span className="text-[11px] text-red-500 mt-1 block">{errors.time}</span>
                  )}
                </div>
              </div>

              {/* Row 5: Optional Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.16em] font-medium text-[#28201D] mb-2"
                >
                  Special Requests or Hair/Skin Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding previous color processing, allergies, bridal dates, or desire for a private quiet suite..."
                  className="w-full px-4 py-3 bg-[#F8F4EF]/50 border border-[#E9DDD1] text-sm text-[#28201D] placeholder-[#28201D]/40 focus:outline-none focus:border-[#C5A572] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Reviewing Availability...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C5A572]" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-[#28201D]/55 leading-relaxed">
                By submitting this request, you understand this is a showcase demo form.
                In a production build, your booking system will trigger an automated SMS / email calendar invite.
              </div>
            </form>
          </div>

          {/* Right Column: Replaceable Concierge Details & Atelier Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Atelier Contact Card */}
            <div className="bg-[#28201D] text-[#F8F4EF] p-8 sm:p-9 border border-[#C5A572]/30 shadow-lg">
              <div className="flex items-center gap-2 text-[#C5A572] mb-3">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Atelier Concierge
                </span>
              </div>

              <h4 className="font-serif text-2xl font-light text-white mb-2">
                Prefer Personal Concierge Assistance?
              </h4>
              <p className="text-xs sm:text-sm text-[#E9DDD1]/80 font-light leading-relaxed mb-6">
                For same-day inquiries, bridal party consultations, or private room bookings,
                our atelier coordinator is available directly by phone or email.
              </p>

              {/* Replaceable Demo Badge */}
              <div className="mb-6 p-2.5 bg-white/[0.06] border border-[#C5A572]/30 text-[10px] text-[#C5A572] uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Replaceable Demo Contact Placeholders</span>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C5A572] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#E9DDD1]/60">
                      Telephone / WhatsApp
                    </div>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-white hover:text-[#C5A572] transition-colors"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C5A572] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#E9DDD1]/60">
                      Email Concierge
                    </div>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-white hover:text-[#C5A572] transition-colors"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A572] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#E9DDD1]/60">
                      Studio Address
                    </div>
                    <div className="text-[#E9DDD1]/90 font-light">{BRAND_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier Operating Hours */}
            <div className="bg-white p-7 sm:p-8 border border-[#E9DDD1] shadow-sm">
              <div className="flex items-center gap-2 text-[#28201D] mb-4">
                <Clock className="w-4 h-4 text-[#C5A572]" />
                <h4 className="font-serif text-xl font-light">Atelier Operating Hours</h4>
              </div>

              <div className="space-y-2.5 text-xs text-[#28201D]/80">
                {BRAND_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5 border-b border-[#E9DDD1]/60 last:border-b-0"
                  >
                    <span className="font-medium text-[#28201D]">{h.days}</span>
                    <span className="font-light text-[#28201D]/70">{h.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#E9DDD1] text-[11px] text-[#28201D]/60 leading-relaxed font-light">
                * Private Sunday appointments and early-morning bridal parties accommodated upon request.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Submission Confirmation Dialog */}
      {submittedData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#28201D]/80 backdrop-blur-md animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-[#F8F4EF] w-full max-w-lg p-8 sm:p-10 border border-[#C5A572]/50 shadow-2xl text-[#28201D]">
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] transition-colors"
              aria-label="Close confirmation"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#C5A572]/20 flex items-center justify-center text-[#C5A572]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A572] font-semibold">
                Demo Request Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1">
                Thank You, {submittedData.fullName.split(' ')[0]}
              </h3>
            </div>

            {/* Submitted Summary */}
            <div className="bg-white p-5 border border-[#E9DDD1] space-y-2 text-xs mb-6">
              <div className="flex justify-between py-1 border-b border-[#E9DDD1]/60">
                <span className="text-[#28201D]/60">Requested Ritual:</span>
                <span className="font-medium text-[#28201D]">{submittedData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E9DDD1]/60">
                <span className="text-[#28201D]/60">Specialist:</span>
                <span className="font-medium text-[#28201D]">
                  {submittedData.specialist || 'First Available Artisan'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E9DDD1]/60">
                <span className="text-[#28201D]/60">Requested Date & Time:</span>
                <span className="font-medium text-[#28201D]">
                  {submittedData.date} ({submittedData.time.split('—')[0]})
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#28201D]/60">Contact Email:</span>
                <span className="font-medium text-[#28201D]">{submittedData.email}</span>
              </div>
            </div>

            {/* Clear Demo Statement */}
            <div className="p-4 bg-[#E9DDD1]/50 border-l-2 border-[#C5A572] text-xs text-[#28201D]/80 leading-relaxed mb-6 font-light">
              <strong className="font-semibold block mb-1 text-[#28201D]">
                Frontend Template Notice:
              </strong>
              No actual reservation was recorded and no credit card was charged. This form is a client
              design preview ready to connect with your preferred CRM or booking provider (Acuity, Phorest, Fresha, Mindbody, or custom webhook).
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-[#28201D] text-[#F8F4EF] hover:bg-[#C5A572] hover:text-[#28201D] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
