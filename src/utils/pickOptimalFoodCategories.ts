import pickCategoriesForVegetables from './pickCategoriesForVegetables';
import pickCategoriesForGrains from './pickCategoriesForGrains';
import pickCategoriesForMilk from './pickCategoriesForMilk';
import pickCategoriesForMeat from './pickCategoriesForMeat';
import getRandomInt from './getRandomIntInRange';
import { FamilyMemberData, ServingsDataWithRange } from '../types';
import { FOOD_GROUPS } from './constants';

/**
 * Transforms servings range to a precise number on a random basis,
 * i.e. [6, 8] => 7
 */
const calculateServingsCount = (servingsRange: number[]) =>
  servingsRange.length > 1 ? getRandomInt(servingsRange[0], servingsRange[1]) : servingsRange[0];

/**
 * Based on a food group and a number of servings,
 * creates the optimal list of food categories for the day
 */
const pickOptimalFoodCategories = (
  servingsData: ServingsDataWithRange,
  memberData: FamilyMemberData
) => {
  const servingsCount = calculateServingsCount(servingsData.servingsRange);

  switch (servingsData.fgid) {
    // Every food group has its own daily recommendations
    case FOOD_GROUPS.VegetablesAndFruit: {
      return pickCategoriesForVegetables(servingsCount);
    }
    case FOOD_GROUPS.Grains: {
      return pickCategoriesForGrains(servingsCount);
    }
    case FOOD_GROUPS.MilkAndAlts: {
      return pickCategoriesForMilk(servingsCount, memberData.lactoseIntolerance);
    }
    case FOOD_GROUPS.MeatAndAlts: {
      return pickCategoriesForMeat(servingsCount);
    }
    default:
      return [];
  }
};

export default pickOptimalFoodCategories;
