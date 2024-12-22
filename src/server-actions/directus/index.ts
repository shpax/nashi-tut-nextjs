'use server';

import { createDirectus, readItems, rest } from '@directus/sdk';
import { CategoryDTO, CityDTO, LocationDTO } from './interfaces';

const client = createDirectus(process.env.DIRECTUS_URL!).with(rest());

export const getDirectusCategories = async (
  citySlug: string = '',
  categorySlug: string = ''
) =>
  client.request<CategoryDTO[]>(
    readItems('categories', {
      filter: categorySlug
        ? {
            slug: {
              _eq: categorySlug,
            },

            citySlug,
          }
        : {},
    })
  );

export const getDirectusLocations = async (city: number, category: number) =>
  client.request<LocationDTO[]>(
    readItems('spots', {
      fields: ['*.*'],
      filter: {
        categories: { name_en: { _eq: category } },
      },
    })
  );

export const getDirectusCities = async (featured = true) =>
  client.request<CityDTO[]>(
    readItems('cities', {
      filter: {
        is_enabled: { _eq: featured },
      },
    })
  );
