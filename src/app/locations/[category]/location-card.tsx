import { Location } from '@/app/api/locations';
import { Card } from '@/components/card';
import Link from 'next/link';

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  const { icon, name, media, rating, address, isFeatured } = location;

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
    <Card className="flex flex-row justify-between">
      <div
        className={`grow-1 w-24 aspect-square bg-primary-200 flex justify-center items-center `}
      >
        {ImageComponent}
      </div>
      <div className="p-3 grow">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-secondary flex gap-0.5 items-center">
          {RatingStars}
        </p>
        <p className="text-sm">{address}</p>
      </div>
      <div className="flex flex-col justify-between items-center px-3 py-2 gap-2">
        <i
          className={`${isFeatured ? 'flaticon-star-1' : 'flaticon-star'} mt-1 text-2xl text-secondary`}
        />
        <Link
          href={`/locations/${name}`}
          className="rounded-full bg-white text-primary shadow-lg size-12 flex items-center justify-center"
        >
          <i className="flaticon-map mt-1 text-2xl" />
        </Link>
      </div>
    </Card>
  );
}
