export interface LocationDTO {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name_ua: string | null;
  name_en: string | null;
  description_ua: string | null;
  description_en: string | null;
  is_verified: boolean;
  owner: string | null;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  address: string;
  google_maps_id: string | null;
  rating: number | null;
  contacts: {
    contact_type: string;
    contact: string;
  }[];
  logo: string | null;
  city_id: number;
  franchise_id: number;
  photos: string[];
  categories: number[];
}

export interface CategoryDTO {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  name_ua: string;
  parent_category: number | null;
  name_en: string;
  slug: string;
  icon: string | null;
  colour: string;
}

export interface CityDTO {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  state_id: number;
  country_id: number;
  name_native: string;
  is_enabled: boolean;
  name_ua: string | null;
  name_en: string | null;
}
