import sample from 'lodash/sample';

import { VEGETABLE_CATEGORIES, VEGETABLE_CATEGORIES_LIST } from './constants';

/** Each menu should include 1 (dark-green) and 2 (orange) vegetable */
const pickCategoriesForVegetables = (servingsCount: number) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    if (!categories.includes(VEGETABLE_CATEGORIES.DarkGreen)) {
      categories.push(VEGETABLE_CATEGORIES.DarkGreen);
      continue;
    }
    if (!categories.includes(VEGETABLE_CATEGORIES.Orange)) {
      categories.push(VEGETABLE_CATEGORIES.Orange);
      continue;
    }
    // Rest - on a random basis
    categories.push(sample(VEGETABLE_CATEGORIES_LIST) || VEGETABLE_CATEGORIES.NonDarkGreenOrOrange);
  }
  return categories;
};

export default pickCategoriesForVegetables;
