import type { ServiceItem, TeamMember, TestimonialItem, GalleryItem } from '../types';

export const BRAND_INFO = {
  name: 'ÉLAN',
  fullName: 'ÉLAN BEAUTY STUDIO',
  tagline: 'Where Beauty Meets Elegance.',
  eyebrow: 'A LUXURY BEAUTY EXPERIENCE',
  heroHeadline: 'Your Beauty. Your Signature.',
  heroSubheadline:
    'Discover personalized beauty experiences, expert artistry, and moments of self-care designed around you.',
  address: '450 Beverly Boulevard, Suite 200, Beverly Hills, CA 90210',
  phone: '+1 (555) 382-3526',
  email: 'concierge@elanbeautystudio.demo',
  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 7:30 PM' },
    { days: 'Saturday', hours: '8:30 AM – 6:30 PM' },
    { days: 'Sunday', hours: '10:00 AM – 5:00 PM' },
  ],
  socials: [
    { name: 'Instagram', url: 'https://instagram.com', handle: '@elanbeautystudio' },
    { name: 'Pinterest', url: 'https://pinterest.com', handle: 'elanbeauty' },
    { name: 'Facebook', url: 'https://facebook.com', handle: 'ElanBeautyStudio' },
  ],
  principles: [
    {
      title: 'Personalized Care',
      description:
        'Every appointment begins with a one-on-one lifestyle consultation, tailoring every cut, shade, and serum to your distinctive essence.',
    },
    {
      title: 'Expert Artistry',
      description:
        'Internationally trained master stylists and clinical aestheticians blending runway technique with effortless daily wearability.',
    },
    {
      title: 'Exceptional Experience',
      description:
        'Private treatment suites, complimentary French champagne, artisanal tisanes, and sensory aromatherapy in an unhurried atmosphere.',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hair-styling',
    title: 'Hair Styling & Cutting',
    tagline: 'Precision architecture for effortless movement.',
    category: 'hair',
    description: 'Signature cuts, professional styling, and looks tailored to your personality.',
    details: [
      'In-depth bespoke consultation and face-framing analysis',
      'Sensory scalp wash with Davines botanical shampoo & head massage',
      'Architectural precision dry cut or wet cut',
      'Signature Parisian blowout with thermal finishing serum',
    ],
    duration: '60 – 75 min',
    priceNote: 'Consultation available',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hair-color',
    title: 'Hair Color & Treatments',
    tagline: 'Dimensional illumination and restorative hair wellness.',
    category: 'hair',
    description: 'Beautiful color transformations and nourishing treatments for healthy-looking hair.',
    details: [
      'Custom hand-painted French balayage & foilayage techniques',
      'Ammonia-free organic glossing and tone balancing',
      'Olaplex No. 1–2 restorative molecular bonding therapy',
      'K18 peptide deep moisture bath and scalp infusion',
    ],
    duration: '90 – 180 min',
    priceNote: 'Enquire for pricing',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'skin-facial',
    title: 'Skin & Facial Care',
    tagline: 'Clinical efficacy infused with ritualistic relaxation.',
    category: 'skin',
    description: 'Thoughtful skincare rituals designed to refresh and restore your natural glow.',
    details: [
      'Advanced triple-cleanse and ultrasonic pore refinement',
      'Custom fruit enzyme exfoliation and gentle peel',
      'Cryo-lymphatic facial sculpting with ice globes',
      'High-potency hyaluronic infusion under medical-grade LED light',
    ],
    duration: '75 min',
    priceNote: 'Consultation available',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal & Occasion Makeup',
    tagline: 'Timeless grace for life’s most cherished celebrations.',
    category: 'bridal',
    description: 'Personalized makeup artistry for weddings, celebrations, and special moments.',
    details: [
      'Full preview bridal trial with moodboard alignment',
      'Airbrush HD complexion matching for 16-hour longevity',
      'Custom individual feather lash placement',
      'Luxury bridal emergency touch-up kit included',
    ],
    duration: '90 min',
    priceNote: 'Enquire for pricing',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'manicure-nail',
    title: 'Manicure & Nail Art',
    tagline: 'Understated luxury, pristine cuticle work, and modern art.',
    category: 'nails',
    description: 'Refined nail care, elegant finishes, and modern nail artistry.',
    details: [
      'Non-invasive dry European e-file cuticle care',
      'BIAB (Builder in a Bottle) strengthening overlay',
      'Minimalist chrome, micro-French, or champagne gold accents',
      'Warm rose oil massage and botanical collagen gloves',
    ],
    duration: '60 min',
    priceNote: 'Consultation available',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'spa-relaxation',
    title: 'Spa & Relaxation',
    tagline: 'A haven of serenity to restore equilibrium and calm.',
    category: 'spa',
    description: 'A calming escape with rejuvenating beauty and relaxation treatments.',
    details: [
      'Japanese waterfall head spa with herbal micro-mist',
      'Aromatherapy scalp detox and lymphatic neck pressure',
      'Hot volcanic stone shoulder tension release',
      'Custom organic herbal tea infusion in our private quiet lounge',
    ],
    duration: '60 – 90 min',
    priceNote: 'Enquire for pricing',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'genevieve-laurent',
    name: 'Geneviève Laurent',
    role: 'Creative Hair Artist & Founder',
    experience: '14+ Years Experience',
    bio: 'Trained on the runways of Paris and Milan, Geneviève is renowned for architectural dry cutting, bespoke lived-in balayage, and effortless Parisian silhouettes.',
    specialties: ['Editorial Haircutting', 'French Balayage', 'Texture Sculpting'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'maya-vance',
    name: 'Maya Vance',
    role: 'Beauty & Skincare Specialist',
    experience: '11+ Years Experience',
    bio: 'A certified master clinical aesthetician specializing in cellular skin regeneration, lymphatic sculpting, and holistic facials that produce radiant, glass-like clarity.',
    specialties: ['Clinical Glow Facials', 'Lymphatic Sculpting', 'Barrier Repair'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'camille-mercier',
    name: 'Camille Mercier',
    role: 'Bridal Makeup Artist',
    experience: '9+ Years Experience',
    bio: 'Celebrated for luminous, skin-forward bridal artistry, Camille balances modern camera-ready HD wear with delicate, natural enhancement for timeless wedding memories.',
    specialties: ['Couture Bridal', 'Airbrush Complexion', 'Red Carpet Glamour'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    clientName: 'Elena R.',
    location: 'Beverly Hills, CA',
    service: 'Signature Balayage & French Cut',
    rating: 5,
    quote:
      'ÉLAN is completely unlike any salon I have ever stepped into. Geneviève took 20 unhurried minutes just to study how my hair naturally falls and matches my skin tone. The champagne was lovely, but the haircut was truly transformative.',
    date: 'February 2025',
  },
  {
    id: '2',
    clientName: 'Sophia M.',
    location: 'Malibu, CA',
    service: 'Bridal Preview & Wedding Day Artistry',
    rating: 5,
    quote:
      'For my wedding day, Camille and the ÉLAN team created an oasis of calm. My makeup remained dewy and completely pristine through 14 hours of crying, laughing, and dancing in the ocean breeze. Pure artistry.',
    date: 'January 2025',
  },
  {
    id: '3',
    clientName: 'Marcus T.',
    location: 'West Hollywood, CA',
    service: 'Japanese Head Spa & Executive Cut',
    rating: 5,
    quote:
      'The Japanese scalp ritual accompanied by hot stone tension release is the single most rejuvenating hour in the city. The private styling suite allows complete discretion and luxury. Masters of their trade.',
    date: 'March 2025',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Lived-In Dimensional Balayage',
    category: 'hair',
    categoryLabel: 'Hair Transformation',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    description: 'Custom golden champagne hues with natural shadow root for seamless 4-month longevity.',
    span: 'col-span-12 md:col-span-8 row-span-2',
  },
  {
    id: 'g2',
    title: 'The ÉLAN Atelier Interior',
    category: 'studio',
    categoryLabel: 'Salon Interior',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm travertine stone, arched mirrors, and soft amber illumination designed for absolute privacy.',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'g3',
    title: 'Bridal Radiance & Couture Glow',
    category: 'bridal',
    categoryLabel: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'Dewy skin-forward finish with feather-light lash accentuation for our spring bride.',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'g4',
    title: 'Sculpted Glass Skin Facial',
    category: 'skin',
    categoryLabel: 'Skincare Ritual',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    description: 'Post-lymphatic drainage and cryo-infusion therapy showing immediate barrier revival.',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'g5',
    title: 'Minimalist Champagne Chrome Nails',
    category: 'nails',
    categoryLabel: 'Nail Artistry',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80',
    description: 'Russian dry manicure paired with builder gel and delicate micro-glazed gold tips.',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
  {
    id: 'g6',
    title: 'Architectural Editorial Cut',
    category: 'hair',
    categoryLabel: 'Precision Cut',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    description: 'Sharp French bob with feathered internal weight removal and high-gloss glaze.',
    span: 'col-span-12 md:col-span-4 row-span-1',
  },
];

export const FAQS = [
  {
    question: 'How do I know which service is right for my hair or skin type?',
    answer:
      'Every ÉLAN visit begins with a complimentary 15-minute diagnostic consultation. Your artist will examine your hair porosity, face shape, or skin barrier health before recommending tailored formulas.',
  },
  {
    question: 'What professional product lines do you formulate with?',
    answer:
      'We exclusively partner with clean, sustainable, and high-performance European luxury brands including Davines, Olaplex, K18, and Biologique Recherche. All products are 100% cruelty-free.',
  },
  {
    question: 'Can I book a private suite for high-profile visits or bridal parties?',
    answer:
      'Yes. ÉLAN features two dedicated VIP suites with private entrances, bespoke catering options, and dedicated styling teams for complete privacy and comfort.',
  },
  {
    question: 'What is your appointment cancellation and rescheduling policy?',
    answer:
      'Because our artisans dedicate undivided one-on-one time to each guest, we kindly request at least 24 hours notice for standard appointments, and 72 hours for bridal packages.',
  },
];
