import sample from 'lodash/sample';

import { MEAT_CATEGORIES_LIST, MEAT_CATEGORIES } from './constants';

/** Pick meat alternative (7) with 50% chance */
const pickCategoriesForMeat = (servingsCount: number) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    categories.push(sample(MEAT_CATEGORIES_LIST) || MEAT_CATEGORIES.MeatAlt);
  }

  return categories;
};

export default pickCategoriesForMeat;
