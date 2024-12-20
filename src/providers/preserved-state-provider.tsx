'use client';
import { getSavedCity, useCitiesStore } from '@/store';
import React, { useEffect } from 'react';

export const PreservedStateProvider = ({
  children,
}: React.PropsWithChildren) => {
  const setSelectedCity = useCitiesStore((state) => state.setSelectedCity);

  useEffect(() => {
    const city = getSavedCity();

    if (city) {
      setSelectedCity(city);
    }
  });

  return children;
};
