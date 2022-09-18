import sample from 'lodash/sample';

import { GRAINS_CATEGORIES, GRAINS_CATEGORIES_LIST } from './constants';

/** At least half of servings should be whole grain (3) */
const pickCategoriesForGrains = (servingsCount: number) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    // Fill the list with whole grain category until it take up half the list
    if (i < servingsCount / 2) {
      categories.push(GRAINS_CATEGORIES.Whole);
      continue;
    }
    categories.push(sample(GRAINS_CATEGORIES_LIST) || GRAINS_CATEGORIES.NonWhole);
  }
  return categories;
};

export default pickCategoriesForGrains;
