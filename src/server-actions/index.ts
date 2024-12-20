'use server';

import { getDirectusCategories, getDirectusCities } from './directus';
import { Category, City, Franchise } from './interfaces';
import { MOCKED_FRANCHISES } from './mocked-data/franchises';

export async function getCities(): Promise<City[]> {
  const cities = await getDirectusCities(true);

  return cities.map(({ id, name_en, name_ua }) => {
    if (name_en === null || name_ua === null)
      throw new Error('City params is missing');

    return {
      id: id,
      name: name_ua,
      slug: name_en,
    };
  });
}

export async function getCategories(cityId: number): Promise<Category[]> {
  const categories = await getDirectusCategories(cityId);

  return categories.map(({ id, slug, name_ua, icon }) => {
    if (slug === null || name_ua === null || icon === null)
      throw new Error(
        `Category params is missing: ${slug}, ${name_ua}, ${icon}`
      );

    return {
      id: id,
      name: name_ua,
      slug,
      icon,
      locationsCount: Math.floor(Math.random() * 10), // TODO: calculate locations count
    };
  });
}

export async function getLocations(
  cityId: number,
  categoryId: number
): Promise<Franchise[]> {
  // const locations = await getDirectusLocations(cityId, categoryId);

  console.log('getLocations', cityId, categoryId);

  return MOCKED_FRANCHISES;
}
