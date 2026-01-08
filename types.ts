export interface BookLink {
  label: string;
  url: string;
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
  thumbnailUrl?: string; // Specific image for the audio player
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  coverImage: string;
  themeColor: string;
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
}

export interface FAQItem {
  question: string;
  answer: string;
}