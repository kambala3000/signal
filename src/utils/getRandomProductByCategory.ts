import sample from 'lodash/sample';

import { FOOD_DATA } from '../generated';
import { Product } from '../types';

const getRandomProductByCategory = (category: string) =>
  sample((FOOD_DATA as Product[]).filter(food => food.fgcat_id === category));

export default getRandomProductByCategory;
