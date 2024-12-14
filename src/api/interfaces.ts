export interface Location {
  name: string;
  isFeatured: boolean;
  rating: number;
  description: string;
  address: string;
  phone: string;

  coordinates: [number, number];

  icon: string;

  media: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  path: string;
  locations: number;
}
