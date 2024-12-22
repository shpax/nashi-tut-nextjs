'use client';

import { useLocationDetailsStore } from '@/store/location-details';
import { useShallow } from 'zustand/shallow';

export function LocationDetails() {
  const { location, franchise, categoryIcon } = useLocationDetailsStore(
    useShallow(({ location, franchise, categoryIcon }) => ({
      location,
      franchise,
      categoryIcon,
    }))
  );
  const closeCard = useLocationDetailsStore((state) => state.resetLocation);

  return (
    <div
      className={`inset-0 transition-all ease-out duration-300 fixed ${location && franchise ? 'top-0' : 'top-full'}`}
      onClick={closeCard}
    >
      {location && franchise && (
        <div className="mx-8 my-16 p-8 bg-white rounded-2xl shadow-md flex flex-row justify-between text-primary">
          <div>
            {franchise.logo ? (
              <img
                src={franchise.logo}
                alt={franchise.name}
                className="size-16 object-cover"
              />
            ) : (
              <i className={`${categoryIcon} mt-1 text-5xl`} />
            )}
          </div>

          <div>
            <p>{franchise.name}</p>
          </div>
          <div>
            <p>Rating: {location.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
}
