import { useQuery } from '@tanstack/react-query';
import { DEFAULT_QUERY_OPTS } from './constants';

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

export const mockedLocations: Location[] = [
  {
    name: 'Starsky Fine Foods',
    isFeatured: true,
    rating: 4,
    description: 'Опис магазину 1',
    address: 'Адреса магазину 1',
    phone: 'Телефон магазину 1',
    coordinates: [50.4501, 30.5234],

    icon: 'flaticon-iftar',

    media: ['https://via.placeholder.com/300x200'],
  },
];

export const useLocations = (category: string) =>
  useQuery({
    queryKey: ['locations', category],
    queryFn: () => Promise.resolve(mockedLocations),
    ...DEFAULT_QUERY_OPTS,
    initialData: mockedLocations,
  });
