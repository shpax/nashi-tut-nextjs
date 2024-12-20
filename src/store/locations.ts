import { Location } from '@/server-actions/interfaces';
import { create } from 'zustand';

interface LocationsState {
  locations: Location[];
  setLocations: (locations: Location[]) => void;
}

export const useLocationsStore = create<LocationsState>()((set) => ({
  locations: [],
  setLocations: (locations: Location[]) => set({ locations }),
}));
