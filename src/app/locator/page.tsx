'use client';
import { MapboxMap } from '@/components/mapbox';
import { Fragment, useEffect, useState } from 'react';

interface GeoState {
  lat: number;
  lng: number;
  located: boolean;
}

export default function Page() {
  const [geo, setGeo] = useState<GeoState | null>(null);

  // const { data } = useLocations('', '');

  // const markers = data?.map((location) => ({
  //   lat: location.coordinates[0],
  //   lng: location.coordinates[1],
  // }));

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setGeo({
        lat,
        lng,
        located: true,
      });
    }

    function error() {
      console.log('Unable to retrieve your location');
    }
  }, []);

  return (
    <Fragment>
      {/* <MapComponent /> */}
      {geo && <MapboxMap className="" center={geo} markers={[]} />}
    </Fragment>
  );
}
