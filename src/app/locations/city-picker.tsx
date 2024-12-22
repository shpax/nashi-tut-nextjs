'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import logoSvg from '../../../public/logo-08.svg';
import { Card } from '@/components/card';
import { useCitiesStore } from '@/store';
import { useRouter } from 'next/navigation';
import { City } from '@/server-actions/interfaces';

type CityPickerProps = {
  cities: City[];
};

export function CityPicker({ cities }: CityPickerProps) {
  const setCities = useCitiesStore((state) => state.setCities);

  useEffect(() => {
    setCities(cities);
  }, []);

  const setSelectedCity = useCitiesStore((state) => state.setSelectedCity);
  const selectedCity = useCitiesStore((state) => state.selectedCity);

  const router = useRouter();

  useEffect(() => {
    if (selectedCity) {
      router.push(`/locations/${selectedCity.slug}`);
    }
  }, [selectedCity]);

  return (
    <div className="container mx-auto pb-40">
      <div className="size-56 mx-auto mt-12">
        <Image src={logoSvg} alt="logo" />
      </div>
      <div className="flex flex-row justify-center gap-2">
        {cities.map((city, i) => (
          <Card
            key={i}
            className="p-3 font-bold"
            onClick={() => {
              setSelectedCity(city);
              router.push(`/locations/${city.slug}`);
            }}
          >
            {city.name}
          </Card>
        ))}
      </div>
    </div>
  );
}
