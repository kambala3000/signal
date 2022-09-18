import sample from 'lodash/sample';

import { FOOD_DATA } from '../generated';
import { Product } from '../types';

/** Return random product from the provided category */
const getRandomProductByCategory = (category: string) =>
  sample((FOOD_DATA as Product[]).filter(food => food.fgcat_id === category));

export default getRandomProductByCategory;
