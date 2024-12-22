import { Background } from '@/components/background';
import { Fragment } from 'react';
import { getCategories, getCities, getFranchises } from '@/server-actions';
import { LocationCard } from './location-card';
import { LocationDetails } from '@/components/location-details';

interface LocationsProps {
  params: Promise<{
    category: string;
    city: string;
  }>;
}

export default async function Locations({ params }: LocationsProps) {
  const { city: citySlug, category: categorySlug } = await params;

  const cities = await getCities();
  const city = cities.find((city) => city.slug === citySlug);
  const categories = await getCategories(citySlug);
  const category = categories.find(
    (category) => category.slug === categorySlug
  );

  const franchises = await getFranchises(1, 1);

  const locationCards = [];

  for (const franchise of franchises) {
    for (const location of franchise.locations) {
      locationCards.push(
        <LocationCard
          key={location.id}
          franchise={franchise}
          location={location}
          categoryIcon={category?.icon || ''}
        />
      );
    }
  }

  // const categoryData = categoriesData ? categoriesData[0] : {};

  return (
    <Fragment>
      <Background />
      <h1 className="text-3xl font-bold text-center p-4 text-black bg-primary">
        {city?.name} {'>'} {category?.name}
      </h1>
      <div className="p-2">{locationCards}</div>
      <LocationDetails />
    </Fragment>
  );
}
