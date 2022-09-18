import sample from 'lodash/sample';

import { FOOD_DATA } from '../generated';

const getRandomProductByCategory = (category: string) =>
  sample(FOOD_DATA.filter(food => food.fgcat_id === category));

export default getRandomProductByCategory;
