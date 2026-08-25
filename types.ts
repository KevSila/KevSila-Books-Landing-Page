export type BookTheme = 'attention' | 'firelit';

export interface BookLink {
  label: string;
  url: string;
  retailer: 'Amazon' | 'Selar' | 'Gumroad' | 'Nuria';
  market?: string;
}

export interface BookFormat {
  type: 'Ebook' | 'Paperback' | 'Hardcover';
  price: string;
  available: boolean;
  links: BookLink[];
}

export interface AudioPreview {
  title: string;
  subtitle: string;
  sourceUrl: string;
  heading: string;
  description: string;
  theme: BookTheme;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  shortPromise: string;
  description: string;
  longDescription: string[];
  outcomes: string[];
  idealFor: string;
  coverImage: string;
  coverAlt: string;
  theme: BookTheme;
  tags: string[];
  formats: BookFormat[];
  audioPreview?: AudioPreview;
}

export interface Author {
  name: string;
  bio: string[];
  image: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  book?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
