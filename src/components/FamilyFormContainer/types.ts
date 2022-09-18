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

export enum ActionType {
  ADD_FAMILY_MEMBER = 'ADD_FAMILY_MEMBER',
  CHANGE_MEMBER_DATA = 'CHANGE_MEMBER_DATA',
}

export interface Action {
  type: ActionType;
  payload?: Partial<FamilyMemberData>;
}
