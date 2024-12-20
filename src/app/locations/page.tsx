'use client';
import { Background } from '@/components/background';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';
import logoSvg from '../../../public/logo-08.svg';
import { Card } from '@/components/card';
import { useCitiesStore } from '@/store';
import { getCities } from '@/server-actions';
import { useRouter } from 'next/navigation';

export default function City() {
  const setCities = useCitiesStore((state) => state.setCities);
  const cities = useCitiesStore((state) => state.cities);
  const setSelectedCity = useCitiesStore((state) => state.setSelectedCity);
  const selectedCity = useCitiesStore((state) => state.selectedCity);

  const router = useRouter();

  if (selectedCity) {
    router.push(`/locations/${selectedCity.slug}`);
  }

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await getCities();
      setCities(cities);
    };

    fetchCities();
  }, []);

  return (
    <Fragment>
      <Background />

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
    </Fragment>
  );
}
