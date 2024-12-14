import { MapComponent } from '@/components/map';
import { MapboxMap } from '@/components/mapbox';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      {/* <MapComponent /> */}
      <MapboxMap className="" />
    </Fragment>
  );
}
