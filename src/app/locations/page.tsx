import { Background } from '@/components/background';
import { Fragment } from 'react';
import { getCities } from '@/server-actions';
import { CityPicker } from './city-picker';

export default async function City() {
  const cities = await getCities();

  return (
    <Fragment>
      <Background />

      <CityPicker cities={cities} />
    </Fragment>
  );
}
