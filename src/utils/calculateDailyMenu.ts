import groupBy from 'lodash/groupBy';
import values from 'lodash/values';

import pickOptimalFoodCategories from './pickOptimalFoodCategories';
import getRandomProductByCategory from './getRandomProductByCategory';
import { FamilyMemberData } from '../types';
import findServings from './findServings';

const countQuantity = (products: any[]) => {
  const groupedByName = groupBy(products, 'food');
  const productsByGroup = values(groupedByName);
  return productsByGroup.map(group => ({ ...group[0], quantity: group.length }));
};

const calculateDailyMenu = (familyData: FamilyMemberData[]) =>
  familyData.map(memberData => {
    const servings = findServings(memberData);

    const menu = servings.reduce<Record<string, any[]>>((acc, servingsData) => {
      const foodCategories = pickOptimalFoodCategories(servingsData, memberData);
      acc[servingsData.fgid] = countQuantity(
        foodCategories.map(category => getRandomProductByCategory(category))
      );
      return acc;
    }, {});

    return { ...memberData, menu };
  });

export default calculateDailyMenu;
