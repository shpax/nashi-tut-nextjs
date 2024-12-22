import { Franchise, Location } from '@/server-actions/interfaces';
import { create } from 'zustand';

interface LocationDetailsState {
  location: Location | null;
  franchise: Franchise | null;
  categoryIcon: string;
  setLocation: (
    franchise: Franchise,
    location: Location,
    categoryIcon: string
  ) => void;
  resetLocation: () => void;
}

export const useLocationDetailsStore = create<LocationDetailsState>()(
  (set) => ({
    location: null,
    franchise: null,
    categoryIcon: '',
    setLocation: (
      franchise: Franchise,
      location: Location,
      categoryIcon: string
    ) => set({ franchise, location, categoryIcon }),
    resetLocation: () =>
      set({ location: null, franchise: null, categoryIcon: '' }),
  })
);
