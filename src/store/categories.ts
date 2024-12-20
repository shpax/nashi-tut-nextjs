import { Category } from '@/server-actions/interfaces';
import { create } from 'zustand';

interface CategoriesState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const useCategoriesStore = create<CategoriesState>()((set) => ({
  categories: [],
  setCategories: (categories: Category[]) => set({ categories }),
}));

export const categoryBySlug = (slug: string) => (state: CategoriesState) => {
  return state.categories.find((category) => category.slug === slug);
};
