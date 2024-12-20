'use server';

import { createDirectus, readItems, rest } from '@directus/sdk';
import { CategoryDTO, CityDTO, LocationDTO } from './interfaces';

const client = createDirectus(process.env.DIRECTUS_URL!).with(rest());

export const getDirectusCategories = async (
  cityId: number,
  slug: string = ''
) =>
  client.request<CategoryDTO[]>(
    readItems('categories', {
      filter: slug
        ? {
            slug: {
              _eq: slug,
            },
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
