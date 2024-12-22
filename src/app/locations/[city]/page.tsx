import { Background } from '@/components/background';
import { Fragment } from 'react';

import { getCategories } from '@/server-actions';
import { CategoryPicker } from './category-picker';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;

  const categories = await getCategories(city);

  return (
    <Fragment>
      <Background />

      <CategoryPicker categories={categories} city={city} />
    </Fragment>
  );
}
