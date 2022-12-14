import { FoodGroup } from '../types';

export const FOOD_GROUP_TITLES = {
  [FoodGroup.VegetablesAndFruit]: 'Vegetables and Fruit',
  [FoodGroup.Grains]: 'Grains',
  [FoodGroup.MilkAndAlts]: 'Milk and Alternatives',
  [FoodGroup.MeatAndAlts]: 'Meat and Alternatives',
};

export const FOOD_GROUPS: { [key: string]: FoodGroup } = {
  VegetablesAndFruit: FoodGroup.VegetablesAndFruit,
  Grains: FoodGroup.Grains,
  MilkAndAlts: FoodGroup.MilkAndAlts,
  MeatAndAlts: FoodGroup.MeatAndAlts,
};

export const FOOD_GROUPS_LIST = Object.values(FOOD_GROUPS);

export const VEGETABLE_CATEGORIES = {
  NonDarkGreenOrOrange: '0',
  DarkGreen: '1',
  Orange: '2',
};

export const VEGETABLE_CATEGORIES_LIST = Object.values(VEGETABLE_CATEGORIES);

export const GRAINS_CATEGORIES = {
  NonWhole: '4',
  Whole: '3',
};

export const GRAINS_CATEGORIES_LIST = Object.values(GRAINS_CATEGORIES);

export const MILK_CATEGORIES = {
  Milk: '5',
  MilkAlt: '6',
};

export const MILK_CATEGORIES_LIST = Object.values(MILK_CATEGORIES);

export const MEAT_CATEGORIES = {
  MeatAlt: '7',
  Meat: '8',
};

export const MEAT_CATEGORIES_LIST = Object.values(MEAT_CATEGORIES);
