'use client';

import { City } from '@/server-actions/interfaces';
import { create } from 'zustand';

const CITY_KEY = 'city';

export function getSavedCity() {
  const cityString = localStorage.getItem(CITY_KEY);

  if (!cityString) return null;

  return JSON.parse(cityString) as City;
}

function saveCity(city: City) {
  localStorage.setItem(CITY_KEY, JSON.stringify(city));
}

interface CityState {
  selectedCity: City | null;
  cities: City[];
  setSelectedCity: (city: City) => void;
  setCities: (cities: City[]) => void;
}

export const useCitiesStore = create<CityState>()((set) => ({
  selectedCity: null,
  cities: [],
  setSelectedCity: (city: City) => {
    set({ selectedCity: city });
    saveCity(city);
  },
  setCities: (cities: City[]) => set({ cities }),
}));
