import { Card } from '@/components/card';
import Link from 'next/link';
import { useState } from 'react';

type LocationProps = {
  icon: string;
  name: string;
  media: string[];
  rating: number;
  address: string;
  description: string;
  coordinates: [number, number];
  isFeatured: boolean;
};

export function LocationCard({ location }: { location: LocationProps }) {
  const {
    icon,
    name,
    media,
    rating,
    address,
    description,
    coordinates,
    isFeatured,
  } = location;

  const [lat, long] = coordinates;

  const [isOpen, setOpen] = useState(false);

  const RatingStars = [1, 2, 3, 4, 5].map((number, i) => (
    <i
      className={
        Math.round(rating) >= number ? 'flaticon-star-1' : 'flaticon-star'
      }
      key={i}
    />
  ));

  const ImageComponent = media[0] ? (
    <img src={media[0]} alt={name} className="w-full h-full object-cover" />
  ) : (
    <i className={`${icon} mt-1 text-5xl`} />
  );

  return (
    <Card
      className={`grid grid-cols-3 grid-flow-row-dense relative justify-between transition-all ease-out duration-200 mt-4 ${isOpen ? 'h-80' : 'h-28'}`}
      onClick={() => setOpen(!isOpen)}
    >
      <div
        className={`grow-1 bg-primary-200 flex justify-center items-center ${isOpen ? 'col-span-3 h-40' : 'col-span-1'}`}
      >
        {ImageComponent}
      </div>
      <div className="p-3 grow col-span-2">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-secondary flex gap-0.5 items-center">
          {RatingStars}
        </p>
        <p className="text-sm">{address}</p>

        {isOpen && (
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between items-center px-3 py-2 gap-2  absolute top-0 right-0 bottom-0">
        <i
          className={`${isFeatured ? 'flaticon-star-1' : 'flaticon-star'} mt-1 text-2xl text-secondary`}
        />
        <Link
          href={`https://www.google.com/maps/place/${lat},${long}`}
          target="_blank"
          className="rounded-full bg-white text-primary shadow-lg size-12 flex items-center justify-center"
        >
          <i className="flaticon-map mt-1 text-2xl" />
        </Link>
      </div>
    </Card>
  );
}
