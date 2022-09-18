import sample from 'lodash/sample';

import { MILK_CATEGORIES, MILK_CATEGORIES_LIST } from './constants';

/** Ignore lactose containing products (5) if 'lactoseIntolerance' = true */
const pickCategoriesForMilk = (servingsCount: number, lactoseIntolerance = false) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    if (lactoseIntolerance) {
      categories.push(MILK_CATEGORIES.MilkAlt);
      continue;
    }
    categories.push(sample(MILK_CATEGORIES_LIST) || MILK_CATEGORIES.MilkAlt);
  }
  return categories;
};

export default pickCategoriesForMilk;
