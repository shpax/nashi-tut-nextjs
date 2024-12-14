import { useQuery } from '@tanstack/react-query';
import { MOCKED_LOCATIONS } from './mocked-data/locations';
import { MOCKED_CATEGORIES } from './mocked-data/categories';

export const useLocations = (category: string, city: string = '') =>
  useQuery({
    queryKey: ['locations', city, category],
    queryFn: () => Promise.resolve(MOCKED_LOCATIONS),
    initialData: MOCKED_LOCATIONS,
  });

export const useCategories = (city: string = '') =>
  useQuery({
    queryKey: ['categories', city],
    queryFn: () => Promise.resolve(MOCKED_CATEGORIES),
    initialData: MOCKED_CATEGORIES,
  });
