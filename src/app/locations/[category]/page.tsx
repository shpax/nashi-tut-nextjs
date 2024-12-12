import { mockedLocations } from '@/app/api/locations';
import { Background } from '@/components/background';
import { Fragment } from 'react';
import { LocationCard } from './location-card';

interface LocationsProps {
  params: {
    category: string;
  };
}

export default function Locations(props: LocationsProps) {
  return (
    <Fragment>
      <Background />
      <h1 className="text-3xl font-bold text-center p-4 text-black bg-primary">
        {props.params.category}
      </h1>
      <div className="p-2">
        {mockedLocations?.map((location, i) => (
          <LocationCard key={i} location={location} />
        ))}
      </div>
    </Fragment>
  );
}
