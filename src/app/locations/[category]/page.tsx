'use client';
import { Background } from '@/components/background';
import { Fragment, use } from 'react';
import { LocationCard } from './location-card';
import { useLocations } from '@/api/hooks';

interface LocationsProps {
  params: Promise<{
    category: string;
  }>;
}

export default function Locations(props: LocationsProps) {
  const { category } = use(props.params);
  const { data } = useLocations(category);
  // const data = MOCKED_LOCATIONS;
  return (
    <Fragment>
      <Background />
      <h1 className="text-3xl font-bold text-center p-4 text-black bg-primary">
        {category}
      </h1>
      <div className="p-2">
        {data.map((location, i) => (
          <LocationCard key={i} location={location} />
        ))}
      </div>
    </Fragment>
  );
}
