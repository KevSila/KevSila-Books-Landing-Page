export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  price: string;
  coverImage: string;
  buyLink: string;
  themeColor: string;
  tags: string[];
}

export interface Author {
  name: string;
  bio: string[];
  image: string;
  tagline: string;
}