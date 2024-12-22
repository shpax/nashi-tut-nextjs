export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  locationsCount: number;
}

export interface City {
  id: number;
  name: string;
  slug: string;
}

export interface Contact {
  label: string;
  value: string;
}

export interface Location {
  id: number;
  rating: number;
  coordinates: [number, number];
  address: string;
  contacts: Contact[];
  tags: Tag[];
}

export interface SocialLink {
  name: string;
  logo: string;
  url: string;
}

export interface Franchise {
  id: number;
  name: string;
  logo?: string;
  description: string;
  contacts: Contact[];
  locations: Location[];
  socialLinks: SocialLink[];
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}
