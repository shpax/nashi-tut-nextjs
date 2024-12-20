'use client';
import { Background } from '@/components/background';
import { Fragment, use } from 'react';
import { categoryBySlug, useCategoriesStore, useCitiesStore } from '@/store';

interface LocationsProps {
  params: Promise<{
    category: string;
    city: string;
  }>;
}

export default function Locations(props: LocationsProps) {
  const { category: categorySlug } = use(props.params);
  const city = useCitiesStore((state) => state.selectedCity);
  const category = useCategoriesStore(categoryBySlug(categorySlug));

  // const categoryData = categoriesData ? categoriesData[0] : {};

  return (
    <Fragment>
      <Background />
      <h1 className="text-3xl font-bold text-center p-4 text-black bg-primary">
        {city?.name} {'>'} {category?.name}
      </h1>
      <div className="p-2">
        {/* {data &&
          data.map(
            (
              {
                name_ua,
                name_en,
                photos,
                rating,
                description_ua,
                description_en,
                geometry: { coordinates },
                is_verified,
              },
              i
            ) => (
              <LocationCard
                key={i}
                location={{
                  icon: categoryData.icon || '',
                  name: name_ua || name_en || '',
                  media: photos,
                  rating: rating || 0,
                  address: '',
                  description: description_ua || description_en || '',
                  coordinates,
                  isFeatured: is_verified,
                }}
              />
            )
          )} */}
      </div>
    </Fragment>
  );
}
