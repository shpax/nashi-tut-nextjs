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
  coordinates: number[];
  contacts: Contact[];
}

export interface SocialLink {
  name: string;
  logo: string;
  url: string;
}

export interface Franchise {
  id: number;
  name: string;
  logo: string;
  description: string;
  contacts: Contact[];
  locations: Location[];
  socialLinks: SocialLink[];
}
