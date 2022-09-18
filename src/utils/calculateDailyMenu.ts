import groupBy from 'lodash/groupBy';
import values from 'lodash/values';

import pickOptimalFoodCategories from './pickOptimalFoodCategories';
import getRandomProductByCategory from './getRandomProductByCategory';
import {
  FamilyMemberData,
  Product,
  ProductWithQuantity,
  FamilyMemberDataWithMenu,
  MenuByFoodGroup,
} from '../types';
import findServings from './findServings';

/** Combines same products and calculates their 'quantity' */
const countQuantity = (products: Product[]): ProductWithQuantity[] => {
  const groupedByName = groupBy(products, 'food');
  const productsByGroup = values(groupedByName);
  return productsByGroup.map(group => ({ ...group[0], quantity: group.length }));
};

/** Calculates daily menu for each family member */
const calculateDailyMenu = (familyData: FamilyMemberData[]): FamilyMemberDataWithMenu[] =>
  familyData.map(memberData => {
    const servings = findServings(memberData);

    const menu = servings.reduce((acc, servingsData) => {
      const foodCategories = pickOptimalFoodCategories(servingsData, memberData);
      acc[servingsData.fgid] = countQuantity(
        foodCategories.map(category => getRandomProductByCategory(category)!)
      );
      return acc;
    }, {} as MenuByFoodGroup);

    return { ...memberData, menu };
  });

export default calculateDailyMenu;
