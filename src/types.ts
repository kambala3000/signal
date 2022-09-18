export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface FamilyMemberData {
  memberId: string;
  name?: string;
  gender: Gender | null;
  age: string | null;
  lactoseIntolerance: boolean;
}

export interface Product {
  fgcat_id: string;
  fgid: FoodGroup;
  food: string;
  srvg_sz: string;
}

export interface ProductWithQuantity extends Product {
  quantity: number;
}

export enum FoodGroup {
  VegetablesAndFruit = 'vf',
  Grains = 'gr',
  MilkAndAlts = 'mi',
  MeatAndAlts = 'me',
}

export type Menu = {
  [key in FoodGroup]: ProductWithQuantity[];
};

export interface FamilyMemberDataWithMenu extends FamilyMemberData {
  menu: Menu;
}

export enum ActionType {
  ADD_FAMILY_MEMBER = 'ADD_FAMILY_MEMBER',
  CHANGE_MEMBER_DATA = 'CHANGE_MEMBER_DATA',
  REMOVE_FAMILY_MEMBER = 'REMOVE_FAMILY_MEMBER',
  RESET_DATA = 'RESET_DATA',
}

export interface Action {
  type: ActionType;
  payload?: Partial<FamilyMemberData>;
}

export interface ServingsData {
  fgid: FoodGroup;
  gender: string;
  ages: string;
  servings: string;
}

export interface ServingsDataWithRange extends ServingsData {
  servingsRange: number[];
}
