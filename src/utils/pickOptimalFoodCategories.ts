import pickCategoriesForVegetables from './pickCategoriesForVegetables';
import pickCategoriesForGrains from './pickCategoriesForGrains';
import pickCategoriesForMilk from './pickCategoriesForMilk';
import pickCategoriesForMeat from './pickCategoriesForMeat';
import getRandomInt from './getRandomIntInRange';
import { FamilyMemberData, ServingsDataRecord } from '../types';
import { FOOD_GROUPS } from './constants';

const calculateServingsCount = (servingsRange: number[]) =>
  servingsRange.length > 1 ? getRandomInt(servingsRange[0], servingsRange[1]) : servingsRange[0];

const pickOptimalFoodCategories = (
  servingsData: ServingsDataRecord,
  memberData: FamilyMemberData
) => {
  const servingsCount = calculateServingsCount(servingsData.servingsRange);

  switch (servingsData.fgid) {
    case FOOD_GROUPS.VegetablesAndFruit: {
      return pickCategoriesForVegetables(servingsCount);
    }
    case FOOD_GROUPS.Grains: {
      return pickCategoriesForGrains(servingsCount);
    }
    case FOOD_GROUPS.MilkAndAlt: {
      return pickCategoriesForMilk(servingsCount, memberData.lactoseIntolerance);
    }
    case FOOD_GROUPS.AndAlt: {
      return pickCategoriesForMeat(servingsCount);
    }
    default:
      return [];
  }
};

export default pickOptimalFoodCategories;
