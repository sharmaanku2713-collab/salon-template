export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'hair' | 'skin' | 'bridal' | 'nails' | 'spa';
  description: string;
  details: string[];
  duration: string;
  priceNote: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  experience: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'bridal' | 'skin' | 'studio' | 'nails';
  categoryLabel: string;
  image: string;
  description: string;
  span?: string; // For masonry/asymmetric grid
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  specialist: string;
  date: string;
  time: string;
  message: string;
}
